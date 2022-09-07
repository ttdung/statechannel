package statechannel

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ttdung/statechannel/x/statechannel/keeper"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the timelock
	for _, elem := range genState.TimelockList {
		k.SetTimelock(ctx, elem)
	}
	// Set all the hashlock
	for _, elem := range genState.HashlockList {
		k.SetHashlock(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.TimelockList = k.GetAllTimelock(ctx)
	genesis.HashlockList = k.GetAllHashlock(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
