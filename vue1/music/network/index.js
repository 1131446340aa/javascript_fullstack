import Vue from 'vue'
import axios from 'axios'
const vue = new Vue


// axios 配置
axios.defaults.timeout = 10000  // 限制最长请求时间
axios.defaults.baseURL = 'http://localhost:3000'  // 基础API地址
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error => {
        reject(error)
      }))
  })
}

