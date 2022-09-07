/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "ttdung.statechannel.statechannel";

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

export interface MsgWithdrawCoinResponse {}

export interface MsgSendCoinHashlock {
  creator: string;
  from: string;
  to: string;
  amount: Coin | undefined;
  hash: string;
}

export interface MsgSendCoinHashlockResponse {
  Index: string;
}

export interface MsgWithdrawCoinHashlock {
  creator: string;
  to: string;
  index: string;
  hash: string;
}

export interface MsgWithdrawCoinHashlockResponse {}

const baseMsgSendCoin: object = {
  creator: "",
  sender: "",
  receiver: "",
  unlockblockheight: 0,
};

export const MsgSendCoin = {
  encode(message: MsgSendCoin, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    if (message.unlockblockheight !== 0) {
      writer.uint32(40).uint64(message.unlockblockheight);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendCoin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendCoin } as MsgSendCoin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.unlockblockheight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendCoin {
    const message = { ...baseMsgSendCoin } as MsgSendCoin;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    if (
      object.unlockblockheight !== undefined &&
      object.unlockblockheight !== null
    ) {
      message.unlockblockheight = Number(object.unlockblockheight);
    } else {
      message.unlockblockheight = 0;
    }
    return message;
  },

  toJSON(message: MsgSendCoin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.unlockblockheight !== undefined &&
      (obj.unlockblockheight = message.unlockblockheight);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendCoin>): MsgSendCoin {
    const message = { ...baseMsgSendCoin } as MsgSendCoin;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    if (
      object.unlockblockheight !== undefined &&
      object.unlockblockheight !== null
    ) {
      message.unlockblockheight = object.unlockblockheight;
    } else {
      message.unlockblockheight = 0;
    }
    return message;
  },
};

const baseMsgSendCoinResponse: object = { index: "" };

export const MsgSendCoinResponse = {
  encode(
    message: MsgSendCoinResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendCoinResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendCoinResponse } as MsgSendCoinResponse;
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

  fromJSON(object: any): MsgSendCoinResponse {
    const message = { ...baseMsgSendCoinResponse } as MsgSendCoinResponse;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgSendCoinResponse): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendCoinResponse>): MsgSendCoinResponse {
    const message = { ...baseMsgSendCoinResponse } as MsgSendCoinResponse;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgWithdrawCoin: object = { index: "", receiver: "" };

export const MsgWithdrawCoin = {
  encode(message: MsgWithdrawCoin, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWithdrawCoin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawCoin } as MsgWithdrawCoin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawCoin {
    const message = { ...baseMsgWithdrawCoin } as MsgWithdrawCoin;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawCoin): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawCoin>): MsgWithdrawCoin {
    const message = { ...baseMsgWithdrawCoin } as MsgWithdrawCoin;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    return message;
  },
};

const baseMsgWithdrawCoinResponse: object = {};

export const MsgWithdrawCoinResponse = {
  encode(_: MsgWithdrawCoinResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWithdrawCoinResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawCoinResponse,
    } as MsgWithdrawCoinResponse;
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

  fromJSON(_: any): MsgWithdrawCoinResponse {
    const message = {
      ...baseMsgWithdrawCoinResponse,
    } as MsgWithdrawCoinResponse;
    return message;
  },

  toJSON(_: MsgWithdrawCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawCoinResponse>
  ): MsgWithdrawCoinResponse {
    const message = {
      ...baseMsgWithdrawCoinResponse,
    } as MsgWithdrawCoinResponse;
    return message;
  },
};

const baseMsgSendCoinHashlock: object = {
  creator: "",
  from: "",
  to: "",
  hash: "",
};

export const MsgSendCoinHashlock = {
  encode(
    message: MsgSendCoinHashlock,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    if (message.hash !== "") {
      writer.uint32(42).string(message.hash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendCoinHashlock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendCoinHashlock } as MsgSendCoinHashlock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendCoinHashlock {
    const message = { ...baseMsgSendCoinHashlock } as MsgSendCoinHashlock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    return message;
  },

  toJSON(message: MsgSendCoinHashlock): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendCoinHashlock>): MsgSendCoinHashlock {
    const message = { ...baseMsgSendCoinHashlock } as MsgSendCoinHashlock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    return message;
  },
};

const baseMsgSendCoinHashlockResponse: object = { Index: "" };

export const MsgSendCoinHashlockResponse = {
  encode(
    message: MsgSendCoinHashlockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Index !== "") {
      writer.uint32(10).string(message.Index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendCoinHashlockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendCoinHashlockResponse,
    } as MsgSendCoinHashlockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendCoinHashlockResponse {
    const message = {
      ...baseMsgSendCoinHashlockResponse,
    } as MsgSendCoinHashlockResponse;
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = String(object.Index);
    } else {
      message.Index = "";
    }
    return message;
  },

  toJSON(message: MsgSendCoinHashlockResponse): unknown {
    const obj: any = {};
    message.Index !== undefined && (obj.Index = message.Index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendCoinHashlockResponse>
  ): MsgSendCoinHashlockResponse {
    const message = {
      ...baseMsgSendCoinHashlockResponse,
    } as MsgSendCoinHashlockResponse;
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = object.Index;
    } else {
      message.Index = "";
    }
    return message;
  },
};

const baseMsgWithdrawCoinHashlock: object = {
  creator: "",
  to: "",
  index: "",
  hash: "",
};

export const MsgWithdrawCoinHashlock = {
  encode(
    message: MsgWithdrawCoinHashlock,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    if (message.hash !== "") {
      writer.uint32(34).string(message.hash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWithdrawCoinHashlock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawCoinHashlock,
    } as MsgWithdrawCoinHashlock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.index = reader.string();
          break;
        case 4:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawCoinHashlock {
    const message = {
      ...baseMsgWithdrawCoinHashlock,
    } as MsgWithdrawCoinHashlock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawCoinHashlock): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.to !== undefined && (obj.to = message.to);
    message.index !== undefined && (obj.index = message.index);
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgWithdrawCoinHashlock>
  ): MsgWithdrawCoinHashlock {
    const message = {
      ...baseMsgWithdrawCoinHashlock,
    } as MsgWithdrawCoinHashlock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    return message;
  },
};

const baseMsgWithdrawCoinHashlockResponse: object = {};

export const MsgWithdrawCoinHashlockResponse = {
  encode(
    _: MsgWithdrawCoinHashlockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWithdrawCoinHashlockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawCoinHashlockResponse,
    } as MsgWithdrawCoinHashlockResponse;
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

  fromJSON(_: any): MsgWithdrawCoinHashlockResponse {
    const message = {
      ...baseMsgWithdrawCoinHashlockResponse,
    } as MsgWithdrawCoinHashlockResponse;
    return message;
  },

  toJSON(_: MsgWithdrawCoinHashlockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawCoinHashlockResponse>
  ): MsgWithdrawCoinHashlockResponse {
    const message = {
      ...baseMsgWithdrawCoinHashlockResponse,
    } as MsgWithdrawCoinHashlockResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SendCoin(request: MsgSendCoin): Promise<MsgSendCoinResponse>;
  WithdrawCoin(request: MsgWithdrawCoin): Promise<MsgWithdrawCoinResponse>;
  SendCoinHashlock(
    request: MsgSendCoinHashlock
  ): Promise<MsgSendCoinHashlockResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  WithdrawCoinHashlock(
    request: MsgWithdrawCoinHashlock
  ): Promise<MsgWithdrawCoinHashlockResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SendCoin(request: MsgSendCoin): Promise<MsgSendCoinResponse> {
    const data = MsgSendCoin.encode(request).finish();
    const promise = this.rpc.request(
      "ttdung.statechannel.statechannel.Msg",
      "SendCoin",
      data
    );
    return promise.then((data) => MsgSendCoinResponse.decode(new Reader(data)));
  }

  WithdrawCoin(request: MsgWithdrawCoin): Promise<MsgWithdrawCoinResponse> {
    const data = MsgWithdrawCoin.encode(request).finish();
    const promise = this.rpc.request(
      "ttdung.statechannel.statechannel.Msg",
      "WithdrawCoin",
      data
    );
    return promise.then((data) =>
      MsgWithdrawCoinResponse.decode(new Reader(data))
    );
  }

  SendCoinHashlock(
    request: MsgSendCoinHashlock
  ): Promise<MsgSendCoinHashlockResponse> {
    const data = MsgSendCoinHashlock.encode(request).finish();
    const promise = this.rpc.request(
      "ttdung.statechannel.statechannel.Msg",
      "SendCoinHashlock",
      data
    );
    return promise.then((data) =>
      MsgSendCoinHashlockResponse.decode(new Reader(data))
    );
  }

  WithdrawCoinHashlock(
    request: MsgWithdrawCoinHashlock
  ): Promise<MsgWithdrawCoinHashlockResponse> {
    const data = MsgWithdrawCoinHashlock.encode(request).finish();
    const promise = this.rpc.request(
      "ttdung.statechannel.statechannel.Msg",
      "WithdrawCoinHashlock",
      data
    );
    return promise.then((data) =>
      MsgWithdrawCoinHashlockResponse.decode(new Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
