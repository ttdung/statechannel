package keeper

import (
	"context"
	"crypto/sha256"
	"encoding/base64"
	"errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

func (k msgServer) WithdrawCoinHashlock(goCtx context.Context, msg *types.MsgWithdrawCoinHashlock) (*types.MsgWithdrawCoinHashlockResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	val, found := k.Keeper.GetHashlock(ctx, msg.Index)
	if !found {
		return nil, errors.New("time lock is not existing")
	}

	if val.To != msg.To {
		return nil, errors.New("not matching receiver address!")
	}

	hash := sha256.Sum256([]byte(msg.Hash))
	if val.Hash != base64.StdEncoding.EncodeToString(hash[:]) {
		return nil, errors.New("Wrong hash !")
	}

	to, err := sdk.AccAddressFromBech32(msg.To)
	if err != nil {
		return nil, err
	}

	err = k.Keeper.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, to, sdk.Coins{*val.Amount})
	if err != nil {
		return nil, err
	}

	k.Keeper.RemoveHashlock(ctx, msg.Index)

	return &types.MsgWithdrawCoinHashlockResponse{}, nil
}
