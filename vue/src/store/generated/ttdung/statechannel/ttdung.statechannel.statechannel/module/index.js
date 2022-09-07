// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgWithdrawCoinHashlock } from "./types/statechannel/tx";
import { MsgWithdrawCoin } from "./types/statechannel/tx";
import { MsgSendCoin } from "./types/statechannel/tx";
import { MsgSendCoinHashlock } from "./types/statechannel/tx";
const types = [
    ["/ttdung.statechannel.statechannel.MsgWithdrawCoinHashlock", MsgWithdrawCoinHashlock],
    ["/ttdung.statechannel.statechannel.MsgWithdrawCoin", MsgWithdrawCoin],
    ["/ttdung.statechannel.statechannel.MsgSendCoin", MsgSendCoin],
    ["/ttdung.statechannel.statechannel.MsgSendCoinHashlock", MsgSendCoinHashlock],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgWithdrawCoinHashlock: (data) => ({ typeUrl: "/ttdung.statechannel.statechannel.MsgWithdrawCoinHashlock", value: data }),
        msgWithdrawCoin: (data) => ({ typeUrl: "/ttdung.statechannel.statechannel.MsgWithdrawCoin", value: data }),
        msgSendCoin: (data) => ({ typeUrl: "/ttdung.statechannel.statechannel.MsgSendCoin", value: data }),
        msgSendCoinHashlock: (data) => ({ typeUrl: "/ttdung.statechannel.statechannel.MsgSendCoinHashlock", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
