package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/ttdung/statechannel/x/statechannel/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TimelockAll(c context.Context, req *types.QueryAllTimelockRequest) (*types.QueryAllTimelockResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var timelocks []types.Timelock
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	timelockStore := prefix.NewStore(store, types.KeyPrefix(types.TimelockKeyPrefix))

	pageRes, err := query.Paginate(timelockStore, req.Pagination, func(key []byte, value []byte) error {
		var timelock types.Timelock
		if err := k.cdc.Unmarshal(value, &timelock); err != nil {
			return err
		}

		timelocks = append(timelocks, timelock)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTimelockResponse{Timelock: timelocks, Pagination: pageRes}, nil
}

func (k Keeper) Timelock(c context.Context, req *types.QueryGetTimelockRequest) (*types.QueryGetTimelockResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetTimelock(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetTimelockResponse{Timelock: val}, nil
}
