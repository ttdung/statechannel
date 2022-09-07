package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

func (k msgServer) SendCoinHashlock(goCtx context.Context, msg *types.MsgSendCoinHashlock) (*types.MsgSendCoinHashlockResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	msg.GetSigners()
	msg.GetSignBytes()

	from, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}

	err = k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, from, types.ModuleName, sdk.Coins{
		sdk.Coin{
			Denom:  msg.Amount.Denom,
			Amount: msg.Amount.Amount,
		},
	})
	if err != nil {
		return nil, err
	}

	indexStr := fmt.Sprintf("%s:%s:%s:%d:%d", msg.From, msg.To, msg.Amount.Denom, msg.Amount.Amount.Int64(), ctx.BlockHeight())

	hashLock := types.Hashlock{
		Index:  indexStr,
		From:   msg.From,
		To:     msg.To,
		Amount: msg.Amount,
		Secret: msg.Secret,
	}
	k.Keeper.SetHashlock(ctx, hashLock)

	if err != nil {
		return nil, err
	}
	return &types.MsgSendCoinHashlockResponse{
		Index: indexStr,
	}, nil
}
