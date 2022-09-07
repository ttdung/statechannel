package cli

import (
	"crypto/sha256"
	"fmt"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

var _ = strconv.Itoa(0)

func CmdWithdrawCoin() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "withdraw-coin [index] [receiver]",
		Short: "Broadcast message withdraw-coin",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			///////////////////////////
			secret := "abcd1"
			hash1 := sha256.Sum256([]byte(secret))
			if hash1 == sha256.Sum256([]byte("abcd")) {
				fmt.Println("@@@@@  OKKkkk")
			} else {
				fmt.Println("@@@@@  Secret  not  match input hash", hash1)
			}
			//////////////////////////////////

			cmd.Flags().Set(flags.FlagFrom, args[1])
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			index := args[0]
			receiver := args[1]

			//fmt.Println("@@@@ index:", index, " receiver: ", receiver)
			msg := types.NewMsgWithdrawCoin(
				index,
				receiver,
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
