
import Vue from 'vue'
import axios from 'axios'
const vue = new Vue
axios.defaults.timeout = 10000  // 限制最长请求时间
// axios.defaults.baseURL = '/api'  // 基础API地址
axios.defaults.withCredentials = true;// 请求带上cookie
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) {

    return Promise.reject(res)
  }
  return res
}, (error) => {

  return Promise.reject(error)
})
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
      .then(response => {
        resolve(response)
      }, err => {
     
        reject(err)
      })
      .catch((error => {
        // console.log(this); 
        reject(error)
      }))
  })
}


/*接口地址 */productcontent
export function productlist(fn) {
  return fetchGet("/api/productlist").then().catch(fn)
}
export function productcontent(fn,id) {
  return fetchGet("/api/productcontent",{
    id
  }).then().catch(fn)
}


