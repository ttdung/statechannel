package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

func (k msgServer) SendCoin(goCtx context.Context, msg *types.MsgSendCoin) (*types.MsgSendCoinResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	msg.GetSigners()
	msg.GetSignBytes()

	from, err := sdk.AccAddressFromBech32(msg.Sender)
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

	indexStr := fmt.Sprintf("%s:%s:%s:%d:%d", msg.Sender, msg.Receiver, msg.Amount.Denom, msg.Amount.Amount.Int64(), ctx.BlockHeight())

	unlockBlock := msg.Unlockblockheight + uint64(ctx.BlockHeight())

	timeLock := types.Timelock{
		Index:       indexStr,
		From:        msg.Sender,
		To:          msg.Receiver,
		Amount:      msg.Amount,
		BlockHeight: unlockBlock,
	}
	k.Keeper.SetTimelock(ctx, timeLock)

	if err != nil {
		return nil, err
	}
	return &types.MsgSendCoinResponse{
		Index: indexStr,
	}, nil
}
