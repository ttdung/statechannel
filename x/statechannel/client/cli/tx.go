package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdSendCoin())
	cmd.AddCommand(CmdWithdrawCoin())
	cmd.AddCommand(CmdSendCoinHashlock())
	cmd.AddCommand(CmdWithdrawCoinHashlock())
	// this line is used by starport scaffolding # 1

	/////////////////////////////
	//secret := "abcd1"
	//hash1 := sha256.Sum256([]byte(secret))
	//if hash1 == sha256.Sum256([]byte("abcd")) {
	//	//fmt.Println("@@@@@  OKKkkk")
	//	println("@@@@@  OKKkkk")
	//} else {
	//	//fmt.Println("@@@@@  Secret  not  match")
	//	println("@@@@@  Not  match")
	//}
	//////////////////////////////

	return cmd
}
