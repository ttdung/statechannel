package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgSendCoin{}, "statechannel/SendCoin", nil)
	cdc.RegisterConcrete(&MsgWithdrawCoin{}, "statechannel/WithdrawCoin", nil)
	cdc.RegisterConcrete(&MsgSendCoinHashlock{}, "statechannel/SendCoinHashlock", nil)
	cdc.RegisterConcrete(&MsgWithdrawCoinHashlock{}, "statechannel/WithdrawCoinHashlock", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendCoin{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgWithdrawCoin{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendCoinHashlock{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgWithdrawCoinHashlock{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
