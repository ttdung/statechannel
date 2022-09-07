package keeper

import (
	"context"
	"errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

func (k msgServer) WithdrawCoin(goCtx context.Context, msg *types.MsgWithdrawCoin) (*types.MsgWithdrawCoinResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	val, found := k.Keeper.GetTimelock(ctx, msg.Index)
	if !found {
		return nil, errors.New("time lock is not existing")
	}

	if val.To != msg.Receiver {
		return nil, errors.New("not matching receiver address!")
	}

	if val.BlockHeight >= uint64(ctx.BlockHeight()) {
		return nil, errors.New("block height")
	}

	to, err := sdk.AccAddressFromBech32(msg.Receiver)
	if err != nil {
		return nil, err
	}

	err = k.Keeper.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, to, sdk.Coins{*val.Amount})
	if err != nil {
		return nil, err
	}
	k.Keeper.RemoveTimelock(ctx, msg.Index)

	return &types.MsgWithdrawCoinResponse{}, nil
}
