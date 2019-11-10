import Vue from 'vue'
import Router from 'vue-router'
// import axios from 'axios'

Vue.use(Router)
const router = new Router({

  routes: [

  ]
})

export default router
// 基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
//   // method: 'post'
// }).then(
//   (res) => {
//     console.log(res)
//   }
// )
// axios({
//   // url: 'http://123.207.32.32:8000/home/data?type=sell&page=3'
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 3
//   }
//   // method: 'post'
// }).then(
//   (res) => {
//     console.log(res)
//   }
// )
//
// 并发请求
// 全局
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
// axios.all([axios({url: '/home/multidata'}), axios({url: '/home/data?type=sell&page=3'})]
// ).then(res => {
//   console.log(res)
// })
// const instancell = axios.create(
//   {baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000}
// )
// instancell({url: '/home/multidata'}).then(res => {
//   console.log(res)
// })
