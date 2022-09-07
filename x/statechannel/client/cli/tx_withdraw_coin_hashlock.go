package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

var _ = strconv.Itoa(0)

func CmdWithdrawCoinHashlock() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "withdraw-coin-hashlock [to] [index] [secret]",
		Short: "Broadcast message withdraw-coin-hashlock",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTo := args[0]
			argIndex := args[1]
			argSecret := args[2]

			cmd.Flags().Set(flags.FlagFrom, args[0])
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgWithdrawCoinHashlock(
				clientCtx.GetFromAddress().String(),
				argTo,
				argIndex,
				argSecret,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
