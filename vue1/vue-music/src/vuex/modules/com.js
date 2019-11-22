import * as types from '../types'
const state = {
  showSidebar: false,
  searchHistory: ['123', '456']
}
//方法
const mutations = {
  [types.COM_SHOW_SIDE_BAR](state, status) {
    state.showSidebar = status
  },
  [types.COM_SAVE_SEARCH_HISTORY](state, status) {
    state.searchHistory = status
  },
  [types.COM_DELETE_SEARCH_HISTORY](state,index){
    state.searchHistory.splice(index,1)
  },
[types.COM_CLEER_SEARCH_HISTORY](state){
  state.searchHistory=[]
}
}
//异步
const actions = {
  setShowSidebar({ commit }, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  saveSearchHistory({ commit, state }, query) {
    let searchHistory = [query, ...state.searchHistory.slice()]
    searchHistory = [...new Set(searchHistory)]
    commit(types.COM_SAVE_SEARCH_HISTORY, searchHistory)
  },
  deleteSearchHistory({ commit }, index){
    commit(types.COM_DELETE_SEARCH_HISTORY,index)
  },
  Alldelete({ commit }){
    commit(types.COM_CLEER_SEARCH_HISTORY)
  }
}
//计算属性
const getters = {
  showSidebar: state => state.showSidebar,
  searchHistory: state => state.searchHistory
}

export default {
  state,
  getters,
  mutations,
  actions
}