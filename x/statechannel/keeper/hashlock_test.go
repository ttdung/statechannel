package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "github.com/ttdung/statechannel/testutil/keeper"
	"github.com/ttdung/statechannel/testutil/nullify"
	"github.com/ttdung/statechannel/x/statechannel/keeper"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNHashlock(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Hashlock {
	items := make([]types.Hashlock, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetHashlock(ctx, items[i])
	}
	return items
}

func TestHashlockGet(t *testing.T) {
	keeper, ctx := keepertest.StatechannelKeeper(t)
	items := createNHashlock(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetHashlock(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestHashlockRemove(t *testing.T) {
	keeper, ctx := keepertest.StatechannelKeeper(t)
	items := createNHashlock(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveHashlock(ctx,
			item.Index,
		)
		_, found := keeper.GetHashlock(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestHashlockGetAll(t *testing.T) {
	keeper, ctx := keepertest.StatechannelKeeper(t)
	items := createNHashlock(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllHashlock(ctx)),
	)
}
