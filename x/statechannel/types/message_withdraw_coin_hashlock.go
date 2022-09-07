package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgWithdrawCoinHashlock = "withdraw_coin_hashlock"

var _ sdk.Msg = &MsgWithdrawCoinHashlock{}

func NewMsgWithdrawCoinHashlock(creator string, to string, index string, hash string) *MsgWithdrawCoinHashlock {
	return &MsgWithdrawCoinHashlock{
		Creator: creator,
		To:      to,
		Index:   index,
		Hash:    hash,
	}
}

func (msg *MsgWithdrawCoinHashlock) Route() string {
	return RouterKey
}

func (msg *MsgWithdrawCoinHashlock) Type() string {
	return TypeMsgWithdrawCoinHashlock
}

func (msg *MsgWithdrawCoinHashlock) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgWithdrawCoinHashlock) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgWithdrawCoinHashlock) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
