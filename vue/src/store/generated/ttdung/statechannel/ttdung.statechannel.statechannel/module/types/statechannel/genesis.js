/* eslint-disable */
import { Params } from "../statechannel/params";
import { Timelock } from "../statechannel/timelock";
import { Hashlock } from "../statechannel/hashlock";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "ttdung.statechannel.statechannel";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.timelockList) {
            Timelock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.hashlockList) {
            Hashlock.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
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
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.timelockList = [];
        message.hashlockList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
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
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.timelockList) {
            obj.timelockList = message.timelockList.map((e) => e ? Timelock.toJSON(e) : undefined);
        }
        else {
            obj.timelockList = [];
        }
        if (message.hashlockList) {
            obj.hashlockList = message.hashlockList.map((e) => e ? Hashlock.toJSON(e) : undefined);
        }
        else {
            obj.hashlockList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.timelockList = [];
        message.hashlockList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
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
