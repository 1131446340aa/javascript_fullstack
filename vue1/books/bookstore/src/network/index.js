
import Vue from 'vue'
import axios from 'axios'
const vue = new Vue
Vue.config.devtools = true
axios.defaults.timeout = 5000; // 默认5s超时
// axios.defaults.baseURL = 'http://localhost:3000';
let urls = "http://localhost:3001/books"

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
export function recommed(fn) {
  return fetchGet("/recommed").then(fn)
}
export function getBookInfo(fn, parma) {
  return fetchPost('/bookinfo', parma).then(fn)
}
export function hot_search(fn) {
  return fetchGet("/search").then(fn)
}
export function delreader(fn) {
  return fetchGet("/delreader").then(fn)
}
export function search_book(fn, parma) {
  return fetchPost('/sBook', parma).then(fn)
}
export function zhuche(fn, parma) {
  return fetchPost('/zhuche', parma).then(fn)
}
export function user(fn, parma) {
  return fetchPost('/user', parma).then(fn)
}
export function updateinfo(fn, parma) {
  return fetchPost('/updateuserinfo', parma).then(fn)
}
export function login(fn, parma) {
  return fetchPost('/login', parma).then(fn)
}
export function collection(fn, parma) {
  return fetchPost('/collection', parma).then(fn)
}
export function sqlcollection(fn, parma) {
  return fetchPost('/sqlcollection', parma).then(fn)
}
export function sqlHS(fn, parma) {
  return fetchPost('/sqlHS', parma).then(fn)
}
export function insertHS(fn, parma) {
  return fetchPost('/insertHS', parma).then(fn)
}
export function HS(fn, parma) {
  return fetchPost('/HS', parma).then(fn)
}
export function delHS(fn) {

  return fetchGet("/delHS").then(fn)
}
export function sqlCll(fn, parma) {
  return fetchPost('/sqlCll', parma).then(fn)
}
export function delCll(fn, parma) {
  return fetchPost('/delCll', parma).then(fn)
}
export function delsqlHS(fn, parma) {
  return fetchPost('/delsqlHS', parma).then(fn)
}
export function download(fn, parma) {
  return fetchPost("/download", parma).then(fn)
}
export function readHis(fn, parma) {
  return fetchPost("/readHis", parma).then(fn)
}
export function sqlreadHis(fn, parma) {
  return fetchPost("/sqlreadHis", parma).then(fn)
}
export function sqlALLreadHis(fn, parma) {
  return fetchPost("/sqlAllreadHis", parma).then(fn)
}
export function setUP(fn, parma) {
  return fetchPost("/setUP", parma).then(fn)
}
export function Progress(fn, parma) {
  return fetchPost("/progress", parma).then(fn)
}
export function sqlset(fn, parma) {
  return fetchPost("/sqlset", parma).then(fn)
}
export function sqlprogress(fn, parma) {
  return fetchPost("/sqlprogress", parma).then(fn)
}
// axios.get( "/api/down/6247d336028c4c667c03a1b8db4ae398/SoBooKs.cc%20-%20%E6%92%92%E9%87%8E.epub?cts=wt-f-D112A224A19A34F9a519&ctp=112A224A19A34&ctt=1582799042&limit=1&spd=54000&ctk=6247d336028c4c667c03a1b8db4ae398&chk=2216b0cca9796afbf57ace826c744f50-1336682", { responseType: "stream" })
//     .then(function (res) {
//       console.log(res);
//         res.data.pipe(ws)
//         ws.on('close', function () {       
//         })

//     })
//推荐歌单



