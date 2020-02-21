
import Vue from 'vue'
import axios from 'axios'
const vue = new Vue

Vue.config.devtools = true
axios.defaults.timeout = 5000; // 默认5s超时
// axios.defaults.baseURL = 'http://localhost:3000';
let urls = "http://localhost:3001/books"
// axios.defaults.withCredentials = true;// 请求带上cookie
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.interceptors.request.use(function (config) { // 这里的config包含每次请求的内容
//   if (config.params && config.params.auth && !logined) {
//     // 需要登录验证的url 需带params.auth=true
//     router.push({
//       name: 'login'
//     });
//     return Promise.reject({
//       "msg": '需先登录'
//     });
//   }
//   return config;
// }, function (err) {
//   return Promise.reject(err);
// });

// axios.interceptors.response.use((res) => {
//   if (res.data.code === 301) {
//     console.log('未登录')
//   } else if (res.data.code !== 200) {
//     console.log('返回数据不正常')
//   }
//   return res
// }, (error) => {
//   // console.log('promise error:' + error)
//   return Promise.reject(error)
// })
Vue.prototype.$http = axios
// Vue.config.productionTip = false
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(urls + url, {
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
export function fetchPost(url, param) {
  return new Promise((resolve, reject) => {
    axios.post(urls + url, {
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

/*接口地址 */
// 轮播图
export function booksrore(fn) {
 
  // console.log(this);
  
  return fetchGet("/bookstore").then(fn)
}
export function getBookInfo(fn,parma){
  return fetchPost('/bookinfo',parma).then(fn)
}
//推荐歌单



