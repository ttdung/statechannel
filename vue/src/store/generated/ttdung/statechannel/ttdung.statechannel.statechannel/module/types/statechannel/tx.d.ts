import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "ttdung.statechannel.statechannel";
export interface MsgSendCoin {
    creator: string;
    sender: string;
    receiver: string;
    amount: Coin | undefined;
    unlockblockheight: number;
}
export interface MsgSendCoinResponse {
    index: string;
}
export interface MsgWithdrawCoin {
    index: string;
    receiver: string;
}
export interface MsgWithdrawCoinResponse {
}
export declare const MsgSendCoin: {
    encode(message: MsgSendCoin, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendCoin;
    fromJSON(object: any): MsgSendCoin;
    toJSON(message: MsgSendCoin): unknown;
    fromPartial(object: DeepPartial<MsgSendCoin>): MsgSendCoin;
};
export declare const MsgSendCoinResponse: {
    encode(message: MsgSendCoinResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendCoinResponse;
    fromJSON(object: any): MsgSendCoinResponse;
    toJSON(message: MsgSendCoinResponse): unknown;
    fromPartial(object: DeepPartial<MsgSendCoinResponse>): MsgSendCoinResponse;
};
export declare const MsgWithdrawCoin: {
    encode(message: MsgWithdrawCoin, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgWithdrawCoin;
    fromJSON(object: any): MsgWithdrawCoin;
    toJSON(message: MsgWithdrawCoin): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawCoin>): MsgWithdrawCoin;
};
export declare const MsgWithdrawCoinResponse: {
    encode(_: MsgWithdrawCoinResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgWithdrawCoinResponse;
    fromJSON(_: any): MsgWithdrawCoinResponse;
    toJSON(_: MsgWithdrawCoinResponse): unknown;
    fromPartial(_: DeepPartial<MsgWithdrawCoinResponse>): MsgWithdrawCoinResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    SendCoin(request: MsgSendCoin): Promise<MsgSendCoinResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    WithdrawCoin(request: MsgWithdrawCoin): Promise<MsgWithdrawCoinResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SendCoin(request: MsgSendCoin): Promise<MsgSendCoinResponse>;
    WithdrawCoin(request: MsgWithdrawCoin): Promise<MsgWithdrawCoinResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
