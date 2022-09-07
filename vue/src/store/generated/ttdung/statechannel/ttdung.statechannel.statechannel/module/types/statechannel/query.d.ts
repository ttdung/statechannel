import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../statechannel/params";
import { Timelock } from "../statechannel/timelock";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "ttdung.statechannel.statechannel";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetTimelockRequest {
    index: string;
}
export interface QueryGetTimelockResponse {
    timelock: Timelock | undefined;
}
export interface QueryAllTimelockRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTimelockResponse {
    timelock: Timelock[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetTimelockRequest: {
    encode(message: QueryGetTimelockRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimelockRequest;
    fromJSON(object: any): QueryGetTimelockRequest;
    toJSON(message: QueryGetTimelockRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTimelockRequest>): QueryGetTimelockRequest;
};
export declare const QueryGetTimelockResponse: {
    encode(message: QueryGetTimelockResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimelockResponse;
    fromJSON(object: any): QueryGetTimelockResponse;
    toJSON(message: QueryGetTimelockResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTimelockResponse>): QueryGetTimelockResponse;
};
export declare const QueryAllTimelockRequest: {
    encode(message: QueryAllTimelockRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimelockRequest;
    fromJSON(object: any): QueryAllTimelockRequest;
    toJSON(message: QueryAllTimelockRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTimelockRequest>): QueryAllTimelockRequest;
};
export declare const QueryAllTimelockResponse: {
    encode(message: QueryAllTimelockResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimelockResponse;
    fromJSON(object: any): QueryAllTimelockResponse;
    toJSON(message: QueryAllTimelockResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTimelockResponse>): QueryAllTimelockResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Timelock by index. */
    Timelock(request: QueryGetTimelockRequest): Promise<QueryGetTimelockResponse>;
    /** Queries a list of Timelock items. */
    TimelockAll(request: QueryAllTimelockRequest): Promise<QueryAllTimelockResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Timelock(request: QueryGetTimelockRequest): Promise<QueryGetTimelockResponse>;
    TimelockAll(request: QueryAllTimelockRequest): Promise<QueryAllTimelockResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
