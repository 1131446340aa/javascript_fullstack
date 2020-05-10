import Vue from 'vue'
import axios from 'axios'
import { Notify } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Notify);
const vue = new Vue
Vue.config.devtools = true
axios.defaults.timeout = 5000; // 默认5s超时
let baseURL = 'http://neverth.fun:8111/';

let baseURL1 = 'http://neverth.fun:8080/';
let baseURL2 = 'http://39.99.254.180:8001/';

Vue.prototype.$axios = axios
// Vue.config.productionTip = false


function fetch(baseurl,url,obj) {
  return new Promise((resolve, reject) => {
    axios(baseurl + url,obj )
      .then(response => {
        resolve(response.data)
      }, err => {
        Notify({ type: 'warning', message: '网络错误' });
        Toast.loading({
          message: '加载中...',
        });
        reject(err)
      })
      .catch((error => {
        reject(error)
      }))
  })
}

function fetchPost(url, param) {
  return(fetch(baseURL1,url,{
    data: param,
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  }))
}
function fetchPost1(url, param) {
  return(fetch(baseURL2,url,{
    data: param,
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  }))
}
function fetchGet(url, param) {
  return (fetch(baseURL1,url,{
    params: param,
    method:'get'
  }))
}
function fetchGet1(url, param) {
  return (fetch(baseURL2,url,{
    params: param,
    method:'get'
  }))
}
function fetchDelete(url,param){
  return (fetch(baseURL2,url,{
    data: param,
    method:'delete',
    headers: { 'Content-Type': 'application/json' }
  }))
}
// export function fetchGet(url,param){
// return fetch('get',url,param)
// }

export function classTable(fn, param, fn1) {
  return fetchPost('kb/get', param).then(fn).catch(fn1)
}
export function getgrade(fn, param,fn1) {
  return fetchPost('score/get', param).then(fn).catch(fn1)
}
export function searchbook(fn, param) {
  return fetchGet(`atecut/restfulApi/library/book/${param.title}/${param.page}`).then(fn)
}

export function bookinfo(fn, param) {
  return fetchGet(`atecut/restfulApi/douBan/bookIsbn/${param}`).then(fn)
}
export function getBookDetailBymarcNo(fn, param) {
  return fetchGet(`atecut/restfulApi/library/bookDetail/${param}`).then(fn)
}
export function finduser(fn, fn1 = () => { }) {
  return fetchGet1('user/findAll').then(fn).catch(fn1)
}
export function addUser(fn, param) {
  return fetchPost1('user/login', param).then(fn)
}
export function getProduct(fn, current, fn1 = () => {
}) {
  return fetchGet1(`mall/product/pageProduct/${current}/10`).then(fn).catch(fn1)
}
export function getProductinfo(fn, id, fn1 = () => { }) {
  return fetchGet1(`mall/product/getProductInfo/${id}`).then(fn).catch(fn1)
}
export function getUserinfo(fn, id, fn1 = () => { }) {
  return fetchGet1(`user/getUser/${id}`).then(fn).catch(fn1)
}
export function getproductComment(fn, id, fn1 = () => { }) {
  return fetchGet1(`product/comment/getProductCommentByProductId/${id}`).then(fn).catch(fn1)
}
export function addcomment(fn, param, fn1 = () => { }) {
  return fetchPost1('product/comment/addProductComment', param).then(fn).catch(fn1)
}
export function updateuserinfo(fn, parma, fn1 = () => { }) {
  return fetchPost1('user/updateUser', parma).then(fn).catch(fn1)
}
export function addproduct(fn, param, fn1 = () => { }) {
  return fetchPost1('mall/product/addProductInfo', param).then(fn).catch(fn1)
}
export function updatepicre(fn, param, fn1 = () => { }) {
  return fetchPost1('oss/fileoss', param).then(fn).catch(fn1)
}
// export function addcollection(fn, param, fn1 = () => { }) {
//   return fetchPost1('product/Like/addProductLike', param).then(fn).catch(fn1)
// }
export function addThumbs(fn, param, fn1 = () => { }) {
  return fetchPost1('product/like/addProductLike', param).then(fn).catch(fn1)
}
export function allThumbs(fn, id, fn1 = () => { }) {
  return fetchGet1(`product/like/getProductLikeByProductId/${id}`).then(fn).catch(fn1)
}
export function collectUser(fn, param, fn1 = () => { }) {
  return fetchPost1('follow/addFollow', param).then(fn).catch(fn1)
}
export function myfrieds(fn, id, fn1 = () => { }) {
  return fetchGet1(`follow/findMyFollow/${id}`).then(fn).catch(fn1)
}
export function cancleThumbs(fn, param, fn1 = () => { }) {
  return fetchPost1('product/like/cancelProductLike', param).then(fn).catch(fn1)
}
export function collectionProduct(fn, param, fn1 = () => { }) {
  return fetchPost1('product/collect/addProductCollect', param).then(fn).catch(fn1)
}
export function collectAll(fn, id, fn1 = () => { }) {
  return fetchGet1(`product/collect/getCollectByUserId/${id}`).then(fn).catch(fn1)
}

export function canclecollectionProduct(fn, param, fn1 = () => { }) {
  return fetchPost1('product/collect/cancelProductCollect', param).then(fn).catch(fn1)
}
export function searchproduct(fn, id, fn1 = () => { }) {
  return fetchPost1(`mall/product/search/${id}`).then(fn).catch(fn1)
}
export function canclecollectUser(fn, param, fn1 = () => { }) {
  return fetchPost1('follow/cancelFollow', param).then(fn).catch(fn1)
}
export function getLife(fn, current, fn1 = () => { }) {
  return fetchGet1(`express/content/pageExpressContent/${current}/6`).then(fn).catch(fn1)
}
export function getExpressinfo(fn, id, fn1 = () => { }) {
  return fetchGet1(`express/content/getExpressContent/${id}`).then(fn).catch(fn1)
}
export function expressIslike(fn, param, fn1 = () => { }) {
  return fetchPost1('express/like/judgeExpressLike', param).then(fn).catch(fn1)
}
export function addexpresslike(fn, param, fn1 = () => { }) {
  return fetchPost1('express/like/addExpressLike', param).then(fn).catch(fn1)
}
export function getexpresscomment(fn, id, fn1 = () => { }) {
  return fetchGet1(`express/comment/getExpressCommentByExpressId/${id}`).then(fn).catch(fn1)
}
export function addexpress(fn, param, fn1 = () => { }) {
  return fetchPost1('express/content/addExpressContent', param).then(fn).catch(fn1)
}
export function addexpresscomment(fn, param, fn1 = () => { }) {
  return fetchPost1('express/comment/addExpressComment', param).then(fn).catch(fn1)
}
export function queryexpress(fn, id, fn1 = () => { }) {
  return fetchGet1(`express/content/getExpressContentByUserId/${id}`).then(fn).catch(fn1)
}
export function cancelzan(fn, param, fn1 = () => { }) {
  return fetchPost1('express/like/cancelExpressLike', param).then(fn).catch(fn1)
}
export function collectexpress(fn, param, fn1 = () => { }) {
  return fetchPost1('Express/collect/addExpressCollect', param).then(fn).catch(fn1)
}
export function querycollect(fn, param, fn1 = () => { }) {
  return fetchPost1('Express/collect/judgeExpressCollect', param).then(fn).catch(fn1)
}
export function canclecollect(fn, param, fn1 = () => { }) {
  return fetchPost1('Express/collect/cancelExpressCollect', param).then(fn).catch(fn1)
}
export function querycollectexpressbyid(fn, id, fn1 = () => { }) {
  return fetchGet1(`Express/collect/getCollectByUserId/${id}`).then(fn).catch(fn1)
}
export function querymall(fn, id, fn1 = () => { }) {
  return fetchGet1(`mall/product/getProductInfo/${id}`).then(fn).catch(fn1)
}