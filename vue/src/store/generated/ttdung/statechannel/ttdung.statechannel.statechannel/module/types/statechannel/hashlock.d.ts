import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "ttdung.statechannel.statechannel";
export interface Hashlock {
    index: string;
    from: string;
    to: string;
    amount: Coin | undefined;
    secret: string;
}
export declare const Hashlock: {
    encode(message: Hashlock, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Hashlock;
    fromJSON(object: any): Hashlock;
    toJSON(message: Hashlock): unknown;
    fromPartial(object: DeepPartial<Hashlock>): Hashlock;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
