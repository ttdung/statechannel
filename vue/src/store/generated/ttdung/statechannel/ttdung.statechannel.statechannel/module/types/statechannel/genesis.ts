/* eslint-disable */
import { Params } from "../statechannel/params";
import { Timelock } from "../statechannel/timelock";
import { Hashlock } from "../statechannel/hashlock";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "ttdung.statechannel.statechannel";

/** GenesisState defines the statechannel module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  timelockList: Timelock[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  hashlockList: Hashlock[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.timelockList) {
      Timelock.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hashlockList) {
      Hashlock.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.timelockList = [];
    message.hashlockList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.timelockList.push(Timelock.decode(reader, reader.uint32()));
          break;
        case 3:
          message.hashlockList.push(Hashlock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.timelockList = [];
    message.hashlockList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.timelockList !== undefined && object.timelockList !== null) {
      for (const e of object.timelockList) {
        message.timelockList.push(Timelock.fromJSON(e));
      }
    }
    if (object.hashlockList !== undefined && object.hashlockList !== null) {
      for (const e of object.hashlockList) {
        message.hashlockList.push(Hashlock.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.timelockList) {
      obj.timelockList = message.timelockList.map((e) =>
        e ? Timelock.toJSON(e) : undefined
      );
    } else {
      obj.timelockList = [];
    }
    if (message.hashlockList) {
      obj.hashlockList = message.hashlockList.map((e) =>
        e ? Hashlock.toJSON(e) : undefined
      );
    } else {
      obj.hashlockList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.timelockList = [];
    message.hashlockList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.timelockList !== undefined && object.timelockList !== null) {
      for (const e of object.timelockList) {
        message.timelockList.push(Timelock.fromPartial(e));
      }
    }
    if (object.hashlockList !== undefined && object.hashlockList !== null) {
      for (const e of object.hashlockList) {
        message.hashlockList.push(Hashlock.fromPartial(e));
      }
    }
    return message;
  },
};

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
