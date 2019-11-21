import Vue from 'vue'
import axios from 'axios'
const vue = new Vue()

// axios配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://localhost:3000'

// 判断返回状态,响应拦截
axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) {
    alert('网络异常')
    return Promise.reject(res)
  }
  return res
}, (error) => {
  alert('网络异常')
  return Promise.reject(error)
})

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
    .catch((error) => {
      reject(error)
    })
  })
}

export default {
  // 用户登录
  Login (params) {
    return fetchGet('/login', params)
  },
  // banners
  BannerList () {
    return fetchGet('/banner')
  },
  // 歌单
  DiscLists (params) {
    return fetchGet('/top/playlist', params)
  },
  HotSearchKey(){
    return fetchGet('/search/hot')
  }
}