import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count: 1
}
const mutations = {
  add (state) {
    state.count++
  }
}
const getters = {
  count1: (state) => {
    let n = state.count + 13
    return n
  }
}
const actions = {
  addAction (content) {
    content.commit('add')
  }
}
export default new Vuex.Store({
  state, mutations, getters, actions
})
