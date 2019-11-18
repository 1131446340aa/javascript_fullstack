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
  count: (state) => {
    state.count += 100
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
