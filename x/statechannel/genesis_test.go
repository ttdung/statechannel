package statechannel_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/ttdung/statechannel/testutil/keeper"
	"github.com/ttdung/statechannel/testutil/nullify"
	"github.com/ttdung/statechannel/x/statechannel"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		TimelockList: []types.Timelock{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		HashlockList: []types.Hashlock{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.StatechannelKeeper(t)
	statechannel.InitGenesis(ctx, *k, genesisState)
	got := statechannel.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.TimelockList, got.TimelockList)
	require.ElementsMatch(t, genesisState.HashlockList, got.HashlockList)
	// this line is used by starport scaffolding # genesis/test/assert
}
