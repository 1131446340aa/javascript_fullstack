import * as types from '../types'
const state = {
  singsheet: [],
  playrules: 0,
  isplay: false,
  songurl: "",
  index: "",
  currentTime: '00:00',
  duration: '00:00',
  value: 0,
  ended: "false",
  seek: false,//进度条点击
  songitem: "",
  songlrc: "",
  playlist: "",//虚化背景图
  id: "",
  pageindex:1
}
//方法
const mutations = {
  [types.SAVESINGSHEET](state, addsingsheet) {

    state.singsheet = addsingsheet
  },
  playrules(state, rules) {
    state.playrules = rules
  },
  
  isplay(state, isPLay) {
    state.isplay = isPLay
  },
  songurl(state, songurl) {
    state.songurl = songurl
  },
  index(state, index) {
    state.index = index
  },
  currentTime(state, currentTime) {
    state.currentTime = currentTime
  },
  pageindex(state, pageindex) {
    state.pageindex = pageindex
  },
  duration(state, duration) {
    state.duration = duration
  },
  value(state, value) {
    state.value = value
  },
  ended(state, ended) {
    state.ended = ended
  },
  seek(state, seek) {
    state.seek = seek
  },
  songitem(state, songitem) {
    state.songitem = songitem
  },
  songlrc(state, songlrc) {
    state.songlrc = songlrc
  },
  playlist(state, playlist) {
    state.playlist = playlist
  },
  id(state, id) {
    state.id = id
  },
}
//异步
const actions = {
  saveSingsheet({ commit, state }, addsingsheet) {
    let singsheet = [...addsingsheet]
    commit(types.SAVESINGSHEET, singsheet)
  },
  playRules({ commit, state }) {
    let rules = (state.playrules + 1) % 3
    commit('playrules', rules)
  },
  isPlay({ commit, state }) {
    let isplay = !state.isplay
    commit('isplay', isplay)
  },
  Playing({ commit, state }) {

    commit('isplay', true)
  },
  pause({ commit, state }) {
    commit('isplay', false)
  },
  Seek({ commit, state }) {

    commit('seek', true)
  },
  ISSeek({ commit, state }) {

    commit('seek', false)
  },
  songurl({ commit, state }, songurl) {
    let songUrl = songurl
    commit('songurl', songUrl)
  },
  ID({ commit, state }, ID) {
    commit('id', ID)
  },
  Pageindex({ commit, state }, Pageindex) {
    commit('pageindex', Pageindex)
  },
  SongLrc({ commit, state }, SongLrc) {
    commit('songlrc', SongLrc)
  },
  playList({ commit, state }, playList) {
    commit('playlist', playList)
  },
  Index({ commit, state }, index) {
    let Index = index
    commit('index', Index)
  },
  CurrentTime({ commit, state }, index) {
    commit('currentTime', index)
  },
  Duration({ commit, state }, Duration) {
    commit('duration', Duration)
  },
  Value({ commit, state }, Value) {
    commit('value', Value)
  },
  Ended({ commit, state }) {

    commit('ended', true)
  },
  started({ commit, state }) {

    commit('ended', false)
  },
  Songitem({ commit, state }, Songitem) {
    commit('songitem', Songitem)
  },
}
//计算属性
const getters = {
  singsheet: state => state.singsheet,
  playrules: state => state.playrules,
  isplay: state => state.isplay,
  Songurl: state => state.songurl,
  index: state => state.index,
  currentTime: state => state.currentTime,
  duration: state => state.duration,
  value: state => state.value,
  ended: state => state.ended,
  seek: state => state.seek,
  songitem: state => state.songitem,
  songlrc: state => state.songlrc,
  playlist: state => state.playlist,
  id: state => state.id,
  pageindex:state=>state.pageindex
}

export default {
  state,
  getters,
  mutations,
  actions
}