
import Vue from 'vue'
import axios from 'axios'
const vue = new Vue

Vue.config.devtools = true
axios.defaults.timeout = 5000; // 默认5s超时
// axios.defaults.baseURL = 'http://localhost:3000';
let urls = "http://localhost:3000"
let othurl = 'http://musicapi.leanapp.cn'
axios.defaults.withCredentials = true;// 请求带上cookie
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function (config) { // 这里的config包含每次请求的内容
  if (config.params && config.params.auth && !logined) {
    // 需要登录验证的url 需带params.auth=true
    router.push({
      name: 'login'
    });
    return Promise.reject({
      "msg": '需先登录'
    });
  }
  return config;
}, function (err) {
  return Promise.reject(err);
});

axios.interceptors.response.use((res) => {
  if (res.data.code === 301) {
    console.log('未登录')
  } else if (res.data.code !== 200) {
    console.log('返回数据不正常')
  }
  return res
}, (error) => {
  console.log('promise error:' + error)
  return Promise.reject(error)
})
Vue.prototype.$http = axios
Vue.config.productionTip = false
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


/*接口地址 */
// 轮播图
export function banner(fn) {
 
  console.log(this);
  
  return fetchGet("/banner").then(fn)
}
//推荐歌单
export function personalized(fn) {
  return fetchGet("/personalized").then(fn)
}
//用户歌单
export function user_playlist(fn) {
  let timestamp = Date.parse(new Date());
  return fetchGet("/user/playlist", {
    uid: localStorage.id,
    timestamp: timestamp
  }).then(fn)
}
//电台推荐
export function dj_recommend(fn) {
  return fetchGet("/dj/recommend").then(fn)
}
//电台今日优选
export function today_perfered(fn) {
  return fetchGet("/dj/today/perfered").then(fn)
}
//视频
export function mv_all(offset, fn) {
  return fetchGet("/mv/all", { limit: 300, offset: offset }).then(fn)
}
//热门搜索
export function hot_search(fn) {
  return fetchGet("/search/hot/detail").then(fn)
}
//搜索
export function search(keywords, fn, offset) {
  return fetchGet("/search", {
    keywords: keywords,
    offset: offset 
  }).then(fn)
}
//歌曲详情
export function song_detail(ids, fn) {
  return fetchGet("/song/detail", {
    ids: ids
  }).then(fn)
}
//歌曲地址
export function song_url(id, fn) {
  return fetchGet("/song/url", {
    id: id
  }).then(fn)
}
//歌曲歌词
export function song_lrc(id, fn) {
  return fetchGet("/lyric", {
    id: id
  }).then(fn)
}
//喜欢歌单
export function likelist(fn) {
  return fetchGet("/likelist", { uid: parseFloat(localStorage.id) })
    .then(fn)
}
//电台详情
export function dj_detail(rid, fn) {
  return fetchGet("/dj/detail", { rid: rid })
    .then(fn)
}
//电台详情列表
export function dj_program(rid, offset, fn) {
  return fetchGet("/dj/program", {
    rid: rid,
    limit: 40,
    offset: offset
  })
    .then(fn)
}
//手机号登录
export function login_cellphone(phone, password, fn) {
  return fetchGet("/login/cellphone", {
    phone: phone,
    password: password
  })
    .then(fn).catch(res => {
      vue.$toast({ message: "密码错误", position: "bottom" });
    });
}
//喜欢音乐
export function like_music(id, like, fn) {
  return fetchGet("/like", {
    id: id,
    like: like
  })
    .then(fn).catch(res => {
      vue.$toast({ message: "您还未登录", position: "bottom" });
    });
}
//榜单列表
export function top_list(idx, fn) {
  return fetchGet("/top/list", {
    idx: idx
  }).then(fn)
}
// 榜单列表详情
export function toplist_detail(fn) {
  return fetchGet("/toplist/detail").then(fn)
}
//歌单详情
export function playlist_detail(id, fn) {
  return fetchGet("/playlist/detail", {
    id: id,
    // timestamp: timestamp
  }).then(fn)
}
//收藏歌单 
export function playlist_subscribe(id,t, fn) {
  return fetchGet("/playlist/subscribe", {
    id: id,
    t:t
  }).then(fn)
}
// 推荐歌曲
export function recommend_songs(fn) {
  return  fetchGet("/recommend/songs").then(fn)
}
//mv详情
export function mv_detail(mvid, fn) {
  return fetchGet("/mv/detail", {
    mvid: mvid
  }).then(fn)
}
//相似mv
export function mv_simi(mvid, fn) {
  return fetchGet("/simi/mv", {
    mvid: mvid
  }).then(fn)
}
//歌单类别
export function top_playlist(cat,offset, fn) {
  return fetchGet("/top/playlist", {
    cat: cat,
    limit: 21,
    offset: offset
  }).then(fn)
}


