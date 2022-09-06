package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendCoin = "send_coin"

var _ sdk.Msg = &MsgSendCoin{}

func NewMsgSendCoin(creator string, sender string, receiver string, amount *sdk.Coin, unlockblockheight uint64) *MsgSendCoin {
	return &MsgSendCoin{
		Creator:           creator,
		Sender:            sender,
		Receiver:          receiver,
		Amount:            amount,
		Unlockblockheight: unlockblockheight,
	}
}

func (msg *MsgSendCoin) Route() string {
	return RouterKey
}

func (msg *MsgSendCoin) Type() string {
	return TypeMsgSendCoin
}

func (msg *MsgSendCoin) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendCoin) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendCoin) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
