package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

// SetTimelock set a specific timelock in the store from its index
func (k Keeper) SetTimelock(ctx sdk.Context, timelock types.Timelock) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimelockKeyPrefix))
	b := k.cdc.MustMarshal(&timelock)
	store.Set(types.TimelockKey(
		timelock.Index,
	), b)
}

// GetTimelock returns a timelock from its index
func (k Keeper) GetTimelock(
	ctx sdk.Context,
	index string,
) (val types.Timelock, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimelockKeyPrefix))

	b := store.Get(types.TimelockKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTimelock removes a timelock from the store
func (k Keeper) RemoveTimelock(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimelockKeyPrefix))
	store.Delete(types.TimelockKey(
		index,
	))
}

// GetAllTimelock returns all timelock
func (k Keeper) GetAllTimelock(ctx sdk.Context) (list []types.Timelock) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimelockKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Timelock
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
