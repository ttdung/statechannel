package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/ttdung/statechannel/x/statechannel/keeper"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

func SimulateMsgWithdrawCoin(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgWithdrawCoin{
			Receiver: simAccount.Address.String(),
		}

		// TODO: Handling the WithdrawCoin simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "WithdrawCoin simulation not implemented"), nil, nil
	}
}
