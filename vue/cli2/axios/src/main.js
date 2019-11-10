// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
const instancell = axios.create(
  {baseURL: 'http://123.207.32.32:8000',
    timeout: 5000}
)
instancell({url: '/home/multidata'}).then(res => {
  console.log(res)
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
