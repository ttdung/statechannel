package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

// SetHashlock set a specific hashlock in the store from its index
func (k Keeper) SetHashlock(ctx sdk.Context, hashlock types.Hashlock) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HashlockKeyPrefix))
	b := k.cdc.MustMarshal(&hashlock)
	store.Set(types.HashlockKey(
		hashlock.Index,
	), b)
}

// GetHashlock returns a hashlock from its index
func (k Keeper) GetHashlock(
	ctx sdk.Context,
	index string,

) (val types.Hashlock, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HashlockKeyPrefix))

	b := store.Get(types.HashlockKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveHashlock removes a hashlock from the store
func (k Keeper) RemoveHashlock(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HashlockKeyPrefix))
	store.Delete(types.HashlockKey(
		index,
	))
}

// GetAllHashlock returns all hashlock
func (k Keeper) GetAllHashlock(ctx sdk.Context) (list []types.Hashlock) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HashlockKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Hashlock
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
