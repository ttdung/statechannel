package statechannel

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/ttdung/statechannel/testutil/sample"
	statechannelsimulation "github.com/ttdung/statechannel/x/statechannel/simulation"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = statechannelsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgSendCoin = "op_weight_msg_send_coin"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSendCoin int = 100

	opWeightMsgWithdrawCoin = "op_weight_msg_withdraw_coin"
	// TODO: Determine the simulation weight value
	defaultWeightMsgWithdrawCoin int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	statechannelGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&statechannelGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgSendCoin int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSendCoin, &weightMsgSendCoin, nil,
		func(_ *rand.Rand) {
			weightMsgSendCoin = defaultWeightMsgSendCoin
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSendCoin,
		statechannelsimulation.SimulateMsgSendCoin(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgWithdrawCoin int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgWithdrawCoin, &weightMsgWithdrawCoin, nil,
		func(_ *rand.Rand) {
			weightMsgWithdrawCoin = defaultWeightMsgWithdrawCoin
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgWithdrawCoin,
		statechannelsimulation.SimulateMsgWithdrawCoin(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
