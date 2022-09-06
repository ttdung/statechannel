/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../statechannel/params";
import { Timelock } from "../statechannel/timelock";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "ttdung.statechannel.statechannel";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetTimelockRequest: object = { index: "" };

export const QueryGetTimelockRequest = {
  encode(
    message: QueryGetTimelockRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTimelockRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTimelockRequest,
    } as QueryGetTimelockRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTimelockRequest {
    const message = {
      ...baseQueryGetTimelockRequest,
    } as QueryGetTimelockRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetTimelockRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTimelockRequest>
  ): QueryGetTimelockRequest {
    const message = {
      ...baseQueryGetTimelockRequest,
    } as QueryGetTimelockRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetTimelockResponse: object = {};

export const QueryGetTimelockResponse = {
  encode(
    message: QueryGetTimelockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.timelock !== undefined) {
      Timelock.encode(message.timelock, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTimelockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTimelockResponse,
    } as QueryGetTimelockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timelock = Timelock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTimelockResponse {
    const message = {
      ...baseQueryGetTimelockResponse,
    } as QueryGetTimelockResponse;
    if (object.timelock !== undefined && object.timelock !== null) {
      message.timelock = Timelock.fromJSON(object.timelock);
    } else {
      message.timelock = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTimelockResponse): unknown {
    const obj: any = {};
    message.timelock !== undefined &&
      (obj.timelock = message.timelock
        ? Timelock.toJSON(message.timelock)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTimelockResponse>
  ): QueryGetTimelockResponse {
    const message = {
      ...baseQueryGetTimelockResponse,
    } as QueryGetTimelockResponse;
    if (object.timelock !== undefined && object.timelock !== null) {
      message.timelock = Timelock.fromPartial(object.timelock);
    } else {
      message.timelock = undefined;
    }
    return message;
  },
};

const baseQueryAllTimelockRequest: object = {};

export const QueryAllTimelockRequest = {
  encode(
    message: QueryAllTimelockRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTimelockRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTimelockRequest,
    } as QueryAllTimelockRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTimelockRequest {
    const message = {
      ...baseQueryAllTimelockRequest,
    } as QueryAllTimelockRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTimelockRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTimelockRequest>
  ): QueryAllTimelockRequest {
    const message = {
      ...baseQueryAllTimelockRequest,
    } as QueryAllTimelockRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTimelockResponse: object = {};

export const QueryAllTimelockResponse = {
  encode(
    message: QueryAllTimelockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.timelock) {
      Timelock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTimelockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTimelockResponse,
    } as QueryAllTimelockResponse;
    message.timelock = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timelock.push(Timelock.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTimelockResponse {
    const message = {
      ...baseQueryAllTimelockResponse,
    } as QueryAllTimelockResponse;
    message.timelock = [];
    if (object.timelock !== undefined && object.timelock !== null) {
      for (const e of object.timelock) {
        message.timelock.push(Timelock.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTimelockResponse): unknown {
    const obj: any = {};
    if (message.timelock) {
      obj.timelock = message.timelock.map((e) =>
        e ? Timelock.toJSON(e) : undefined
      );
    } else {
      obj.timelock = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTimelockResponse>
  ): QueryAllTimelockResponse {
    const message = {
      ...baseQueryAllTimelockResponse,
    } as QueryAllTimelockResponse;
    message.timelock = [];
    if (object.timelock !== undefined && object.timelock !== null) {
      for (const e of object.timelock) {
        message.timelock.push(Timelock.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Timelock by index. */
  Timelock(request: QueryGetTimelockRequest): Promise<QueryGetTimelockResponse>;
  /** Queries a list of Timelock items. */
  TimelockAll(
    request: QueryAllTimelockRequest
  ): Promise<QueryAllTimelockResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ttdung.statechannel.statechannel.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Timelock(
    request: QueryGetTimelockRequest
  ): Promise<QueryGetTimelockResponse> {
    const data = QueryGetTimelockRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ttdung.statechannel.statechannel.Query",
      "Timelock",
      data
    );
    return promise.then((data) =>
      QueryGetTimelockResponse.decode(new Reader(data))
    );
  }

  TimelockAll(
    request: QueryAllTimelockRequest
  ): Promise<QueryAllTimelockResponse> {
    const data = QueryAllTimelockRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ttdung.statechannel.statechannel.Query",
      "TimelockAll",
      data
    );
    return promise.then((data) =>
      QueryAllTimelockResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
