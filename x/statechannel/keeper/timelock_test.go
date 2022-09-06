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

func createNTimelock(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Timelock {
	items := make([]types.Timelock, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetTimelock(ctx, items[i])
	}
	return items
}

func TestTimelockGet(t *testing.T) {
	keeper, ctx := keepertest.StatechannelKeeper(t)
	items := createNTimelock(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetTimelock(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestTimelockRemove(t *testing.T) {
	keeper, ctx := keepertest.StatechannelKeeper(t)
	items := createNTimelock(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTimelock(ctx,
			item.Index,
		)
		_, found := keeper.GetTimelock(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestTimelockGetAll(t *testing.T) {
	keeper, ctx := keepertest.StatechannelKeeper(t)
	items := createNTimelock(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTimelock(ctx)),
	)
}
