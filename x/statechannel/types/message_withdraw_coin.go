package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgWithdrawCoin = "withdraw_coin"

var _ sdk.Msg = &MsgWithdrawCoin{}

func NewMsgWithdrawCoin(index string, receiver string) *MsgWithdrawCoin {
	return &MsgWithdrawCoin{
		Index:    index,
		Receiver: receiver,
	}
}

func (msg *MsgWithdrawCoin) Route() string {
	return RouterKey
}

func (msg *MsgWithdrawCoin) Type() string {
	return TypeMsgWithdrawCoin
}

func (msg *MsgWithdrawCoin) GetSigners() []sdk.AccAddress {
	receiver, err := sdk.AccAddressFromBech32(msg.Receiver)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{receiver}
}

func (msg *MsgWithdrawCoin) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgWithdrawCoin) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Receiver)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
