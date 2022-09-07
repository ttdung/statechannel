import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "ttdung.statechannel.statechannel";
export interface Timelock {
    index: string;
    from: string;
    to: string;
    amount: Coin | undefined;
    blockHeight: number;
}
export declare const Timelock: {
    encode(message: Timelock, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Timelock;
    fromJSON(object: any): Timelock;
    toJSON(message: Timelock): unknown;
    fromPartial(object: DeepPartial<Timelock>): Timelock;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
