import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgWithdrawCoinHashlock } from "./types/statechannel/tx";
import { MsgWithdrawCoin } from "./types/statechannel/tx";
import { MsgSendCoin } from "./types/statechannel/tx";
import { MsgSendCoinHashlock } from "./types/statechannel/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgWithdrawCoinHashlock: (data: MsgWithdrawCoinHashlock) => EncodeObject;
    msgWithdrawCoin: (data: MsgWithdrawCoin) => EncodeObject;
    msgSendCoin: (data: MsgSendCoin) => EncodeObject;
    msgSendCoinHashlock: (data: MsgSendCoinHashlock) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
