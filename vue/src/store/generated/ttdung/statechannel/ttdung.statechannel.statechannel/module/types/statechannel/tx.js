/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";
export const protobufPackage = "ttdung.statechannel.statechannel";
const baseMsgSendCoin = {
    creator: "",
    sender: "",
    receiver: "",
    unlockblockheight: 0,
};
export const MsgSendCoin = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendCoin };
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
                    message.unlockblockheight = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSendCoin };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromJSON(object.amount);
        }
        else {
            message.amount = undefined;
        }
        if (object.unlockblockheight !== undefined &&
            object.unlockblockheight !== null) {
            message.unlockblockheight = Number(object.unlockblockheight);
        }
        else {
            message.unlockblockheight = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.amount !== undefined &&
            (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.unlockblockheight !== undefined &&
            (obj.unlockblockheight = message.unlockblockheight);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSendCoin };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        if (object.unlockblockheight !== undefined &&
            object.unlockblockheight !== null) {
            message.unlockblockheight = object.unlockblockheight;
        }
        else {
            message.unlockblockheight = 0;
        }
        return message;
    },
};
const baseMsgSendCoinResponse = { index: "" };
export const MsgSendCoinResponse = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendCoinResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgSendCoinResponse };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSendCoinResponse };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseMsgWithdrawCoin = { index: "", receiver: "" };
export const MsgWithdrawCoin = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgWithdrawCoin };
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
    fromJSON(object) {
        const message = { ...baseMsgWithdrawCoin };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgWithdrawCoin };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = "";
        }
        return message;
    },
};
const baseMsgWithdrawCoinResponse = {};
export const MsgWithdrawCoinResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgWithdrawCoinResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgWithdrawCoinResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgWithdrawCoinResponse,
        };
        return message;
    },
};
const baseMsgSendCoinHashlock = {
    creator: "",
    from: "",
    to: "",
    secret: "",
};
export const MsgSendCoinHashlock = {
    encode(message, writer = Writer.create()) {
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
        if (message.secret !== "") {
            writer.uint32(42).string(message.secret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendCoinHashlock };
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
                    message.secret = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSendCoinHashlock };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = String(object.from);
        }
        else {
            message.from = "";
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = String(object.to);
        }
        else {
            message.to = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromJSON(object.amount);
        }
        else {
            message.amount = undefined;
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = String(object.secret);
        }
        else {
            message.secret = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.from !== undefined && (obj.from = message.from);
        message.to !== undefined && (obj.to = message.to);
        message.amount !== undefined &&
            (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.secret !== undefined && (obj.secret = message.secret);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSendCoinHashlock };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        else {
            message.from = "";
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        else {
            message.to = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = object.secret;
        }
        else {
            message.secret = "";
        }
        return message;
    },
};
const baseMsgSendCoinHashlockResponse = { Index: "" };
export const MsgSendCoinHashlockResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Index !== "") {
            writer.uint32(10).string(message.Index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSendCoinHashlockResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgSendCoinHashlockResponse,
        };
        if (object.Index !== undefined && object.Index !== null) {
            message.Index = String(object.Index);
        }
        else {
            message.Index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Index !== undefined && (obj.Index = message.Index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgSendCoinHashlockResponse,
        };
        if (object.Index !== undefined && object.Index !== null) {
            message.Index = object.Index;
        }
        else {
            message.Index = "";
        }
        return message;
    },
};
const baseMsgWithdrawCoinHashlock = {
    creator: "",
    to: "",
    index: "",
    secret: "",
};
export const MsgWithdrawCoinHashlock = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.to !== "") {
            writer.uint32(18).string(message.to);
        }
        if (message.index !== "") {
            writer.uint32(26).string(message.index);
        }
        if (message.secret !== "") {
            writer.uint32(34).string(message.secret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgWithdrawCoinHashlock,
        };
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
                    message.secret = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgWithdrawCoinHashlock,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = String(object.to);
        }
        else {
            message.to = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = String(object.secret);
        }
        else {
            message.secret = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.to !== undefined && (obj.to = message.to);
        message.index !== undefined && (obj.index = message.index);
        message.secret !== undefined && (obj.secret = message.secret);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgWithdrawCoinHashlock,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        else {
            message.to = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = object.secret;
        }
        else {
            message.secret = "";
        }
        return message;
    },
};
const baseMsgWithdrawCoinHashlockResponse = {};
export const MsgWithdrawCoinHashlockResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgWithdrawCoinHashlockResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgWithdrawCoinHashlockResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgWithdrawCoinHashlockResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    SendCoin(request) {
        const data = MsgSendCoin.encode(request).finish();
        const promise = this.rpc.request("ttdung.statechannel.statechannel.Msg", "SendCoin", data);
        return promise.then((data) => MsgSendCoinResponse.decode(new Reader(data)));
    }
    WithdrawCoin(request) {
        const data = MsgWithdrawCoin.encode(request).finish();
        const promise = this.rpc.request("ttdung.statechannel.statechannel.Msg", "WithdrawCoin", data);
        return promise.then((data) => MsgWithdrawCoinResponse.decode(new Reader(data)));
    }
    SendCoinHashlock(request) {
        const data = MsgSendCoinHashlock.encode(request).finish();
        const promise = this.rpc.request("ttdung.statechannel.statechannel.Msg", "SendCoinHashlock", data);
        return promise.then((data) => MsgSendCoinHashlockResponse.decode(new Reader(data)));
    }
    WithdrawCoinHashlock(request) {
        const data = MsgWithdrawCoinHashlock.encode(request).finish();
        const promise = this.rpc.request("ttdung.statechannel.statechannel.Msg", "WithdrawCoinHashlock", data);
        return promise.then((data) => MsgWithdrawCoinHashlockResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
