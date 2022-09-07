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

func (k Keeper) HashlockAll(c context.Context, req *types.QueryAllHashlockRequest) (*types.QueryAllHashlockResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var hashlocks []types.Hashlock
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	hashlockStore := prefix.NewStore(store, types.KeyPrefix(types.HashlockKeyPrefix))

	pageRes, err := query.Paginate(hashlockStore, req.Pagination, func(key []byte, value []byte) error {
		var hashlock types.Hashlock
		if err := k.cdc.Unmarshal(value, &hashlock); err != nil {
			return err
		}

		hashlocks = append(hashlocks, hashlock)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllHashlockResponse{Hashlock: hashlocks, Pagination: pageRes}, nil
}

func (k Keeper) Hashlock(c context.Context, req *types.QueryGetHashlockRequest) (*types.QueryGetHashlockResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetHashlock(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetHashlockResponse{Hashlock: val}, nil
}
