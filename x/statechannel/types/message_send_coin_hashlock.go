package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendCoinHashlock = "send_coin_hashlock"

var _ sdk.Msg = &MsgSendCoinHashlock{}

func NewMsgSendCoinHashlock(creator string, from string, to string, amount *sdk.Coin, secret string) *MsgSendCoinHashlock {
	return &MsgSendCoinHashlock{
		Creator: creator,
		From:    from,
		To:      to,
		Amount:  amount,
		Secret:  secret,
	}
}

func (msg *MsgSendCoinHashlock) Route() string {
	return RouterKey
}

func (msg *MsgSendCoinHashlock) Type() string {
	return TypeMsgSendCoinHashlock
}

func (msg *MsgSendCoinHashlock) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendCoinHashlock) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendCoinHashlock) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
