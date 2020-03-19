import Vue from 'vue'
import axios from 'axios'
const vue = new Vue
Vue.config.devtools = true
axios.defaults.timeout = 5000; // 默认5s超时
let baseURL = 'http://neverth.fun:8111/';

let baseURL1 = 'http://neverth.fun:8080//';

Vue.prototype.$axios = axios
// Vue.config.productionTip = false

function fetchPost(url, param) {
  return new Promise((resolve, reject) => {
    axios(baseURL + url, {
      data: param,
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        vue.$notify("网络出错或链接过期");
        reject(err)
      })
      .catch((error => {
        reject(error)
      }))
  })
}
function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(baseURL1 + url, {
      params: param
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        vue.$notify("网络出错或链接过期");
        reject(err)
      })
      .catch((error => {
        // console.log(this);

        reject(error)
      }))
  })
}
// export function fetchGet(url,param){
// return fetch('get',url,param)
// }

export function classTable(fn, param) {
  return fetchPost('kb/get', param).then(fn)
}
export function getgrade(fn, param) {
  return fetchPost('score/get', param).then(fn)
}
export function searchbook(fn, param) {
  return fetchGet(`atecut/restfulApi/library/book/${param.title}/${param.page}`).then(fn)
}