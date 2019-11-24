import Vue from 'vue'
import Vuex from 'vuex'
// import common from './common'
Vue.use(Vuex)
const state = {
  counter: 1
}
const getters = {
  add13: (state) => {
    let a = state.counter + 13
    return a
  }
}
const mutations = {
  add (state) {
    state.counter++
  }
}
const actions = {
  adddely (context) {
    context.commit('add')
  }
}
export default new Vuex.Store({
  state, getters, mutations, actions
}
)
