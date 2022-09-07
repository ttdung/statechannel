import { txClient, queryClient, MissingWalletError } from './module'
// @ts-ignore
import { SpVuexError } from '@starport/vuex'

import { Hashlock } from "./module/types/statechannel/hashlock"
import { Params } from "./module/types/statechannel/params"
import { Timelock } from "./module/types/statechannel/timelock"


export { Hashlock, Params, Timelock };

async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
				Params: {},
				Timelock: {},
				TimelockAll: {},
				Hashlock: {},
				HashlockAll: {},
				
				_Structure: {
						Hashlock: getStructure(Hashlock.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						Timelock: getStructure(Timelock.fromPartial({})),
						
		},
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(subscription)
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(subscription)
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getTimelock: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Timelock[JSON.stringify(params)] ?? {}
		},
				getTimelockAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.TimelockAll[JSON.stringify(params)] ?? {}
		},
				getHashlock: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Hashlock[JSON.stringify(params)] ?? {}
		},
				getHashlockAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.HashlockAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: ttdung.statechannel.statechannel initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					await dispatch(subscription.action, subscription.payload)
				}catch(e) {
					throw new SpVuexError('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryParams', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryTimelock({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryTimelock( key.index)).data
				
					
				commit('QUERY', { query: 'Timelock', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTimelock', payload: { options: { all }, params: {...key},query }})
				return getters['getTimelock']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryTimelock', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryTimelockAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryTimelockAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await queryClient.queryTimelockAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'TimelockAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTimelockAll', payload: { options: { all }, params: {...key},query }})
				return getters['getTimelockAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryTimelockAll', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryHashlock({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryHashlock( key.index)).data
				
					
				commit('QUERY', { query: 'Hashlock', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryHashlock', payload: { options: { all }, params: {...key},query }})
				return getters['getHashlock']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryHashlock', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryHashlockAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryHashlockAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await queryClient.queryHashlockAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'HashlockAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryHashlockAll', payload: { options: { all }, params: {...key},query }})
				return getters['getHashlockAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryHashlockAll', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgWithdrawCoinHashlock({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdrawCoinHashlock(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgWithdrawCoinHashlock:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgWithdrawCoinHashlock:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdrawCoin({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdrawCoin(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgWithdrawCoin:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgWithdrawCoin:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendCoin({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendCoin(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgSendCoin:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgSendCoin:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendCoinHashlock({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendCoinHashlock(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgSendCoinHashlock:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgSendCoinHashlock:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgWithdrawCoinHashlock({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdrawCoinHashlock(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgWithdrawCoinHashlock:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgWithdrawCoinHashlock:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgWithdrawCoin({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgWithdrawCoin(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgWithdrawCoin:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgWithdrawCoin:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgSendCoin({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendCoin(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgSendCoin:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgSendCoin:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgSendCoinHashlock({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendCoinHashlock(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgSendCoinHashlock:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgSendCoinHashlock:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		
	}
}
