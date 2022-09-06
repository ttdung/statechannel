package cli

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

var _ = strconv.Itoa(0)

func CmdSendCoin() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "send-coin [sender] [receiver] [amount] [unlockblockheight]",
		Short: "Broadcast message send-coin",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			cmd.Flags().Set(flags.FlagFrom, args[0])
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			argSender := args[0]
			argReceiver := args[1]

			argUnlockblockheight, err := strconv.Atoi(args[3])
			if err != nil {
				return err
			}

			decCoin, err := sdk.ParseDecCoin(args[2])
			if err != nil {
				return err
			}
			coin, _ := sdk.NormalizeDecCoin(decCoin).TruncateDecimal()

			msg := types.NewMsgSendCoin(
				argSender,
				argSender,
				argReceiver,
				&coin,
				uint64(argUnlockblockheight),
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
