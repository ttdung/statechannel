// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendCoin } from "./types/statechannel/tx";
import { MsgWithdrawCoin } from "./types/statechannel/tx";
import { MsgSendCoinHashlock } from "./types/statechannel/tx";


const types = [
  ["/ttdung.statechannel.statechannel.MsgSendCoin", MsgSendCoin],
  ["/ttdung.statechannel.statechannel.MsgWithdrawCoin", MsgWithdrawCoin],
  ["/ttdung.statechannel.statechannel.MsgSendCoinHashlock", MsgSendCoinHashlock],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgSendCoin: (data: MsgSendCoin): EncodeObject => ({ typeUrl: "/ttdung.statechannel.statechannel.MsgSendCoin", value: MsgSendCoin.fromPartial( data ) }),
    msgWithdrawCoin: (data: MsgWithdrawCoin): EncodeObject => ({ typeUrl: "/ttdung.statechannel.statechannel.MsgWithdrawCoin", value: MsgWithdrawCoin.fromPartial( data ) }),
    msgSendCoinHashlock: (data: MsgSendCoinHashlock): EncodeObject => ({ typeUrl: "/ttdung.statechannel.statechannel.MsgSendCoinHashlock", value: MsgSendCoinHashlock.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
