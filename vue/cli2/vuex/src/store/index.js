import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const A = { state: {
  counter: 1000
},
mutations: {
  add (state) {
    state.counter++
  },
  add5 (state, five) {
    state.counter += five
  }
},
getters: {
  add1 (state) {
    return state.counter + state.counter
  }
},
actions: {
  aadd5 (context, five) {
    setTimeout(() => { context.commit('add5', five) }, 1000)
  }
}}
const store = new Vuex.Store({

  modules: {
    a: A
  }

})
export default store
