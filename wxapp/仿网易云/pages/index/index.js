// pages/index/index.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: "1",
    banner: [],
    recommendSongs: [],
    album: [],
    videoDetail: [],
    offset: -1,
    video: [],
    artists: [],
    offset1: 0,
    singSheet_offset: 0,
    singSheet_playlist: [],
    indexloading:false,
    mvloading:false,
    singlistloading:false,
  },

  currentchange(e) {
    this.setData({
      current: e.detail.current
    })
  },
  api(url, func, param) {

    let host = 'http://www.china-4s.com/'
    wx.request({
      url: host + url,
      data: param,
      success: func
    })
  },
  navBarClick(e) {

    this.setData(
      { current: e.currentTarget.dataset.id })
    console.log(this.data.current == "2");

  },
  mv() {
    let that = this
    that.setData({
      offset: that.data.offset + 1
    })
    wx.request({
      url: "http://china-4s.com/top/mv/all?limit=6" + "&offset=" + that.data.offset * 6,
      success: res => {
        let middle = res.data.data
        that.setData({
          videoDetail: [...that.data.videoDetail, ...middle],
          mvloading:true
        })
      }
    })
  },
  bindscrolltolower() {
    this.setData({
      mvloading:false
    })
    this.mv()
  },
  play(e) {
    this.setData({ currentplay: e.currentTarget.dataset.id })
  },
  search() {
    wx.navigateTo({
      url: './search/search'
    })
  },
  bindscrolltolower1() {
    this.setData({singlistloading:true})
    this.api('top/playlist', res => {


      this.setData({
        singSheet_playlist: [...this.data.singSheet_playlist, ...res.data.playlists],
        singSheet_offset: this.data.singSheet_offset + 15,
        singlistloading:false

      })
      console.log(res.data.playlists);
    }, {
      limit: 15,
      offset: this.data.singSheet_offset
    })
  },
  mvClick(e) {
    wx.navigateTo({
      url: './movie/movie?id=' + e.currentTarget.dataset.id
    })
  },
  recommendSongs(e) {
    wx.navigateTo({
      url: '../singsheet/singsheet?id=' + e.currentTarget.dataset.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.api('banner', res => {
      that.setData({
        banner: res.data.banners,
        indexloading:true
      
      })
    })
    this.api('personalized', res => {
      that.setData({
        recommendSongs: res.data.result.sort(() => { return Math.random() - 0.5 }).slice(0, 6)
      })
      console.log(res.data.result);

    })
    this.api('album/newest', res => {
      that.setData({
        album: res.data.albums.sort(() => { return Math.random() - 0.5 }).slice(0, 3)
      })
    })
    this.mv()
    this.api('top/artists', (res) => {
      this.setData({
        artists: res.data.artists,
        offset1: this.data.offset1 + 10
      })
    }, {
      offset: this.data.offset1,
      limit: 10
    })
    this.api('top/playlist', res => {


      this.setData({
        singSheet_playlist: res.data.playlists,
        singlistloading:true

      })
      console.log(res.data.playlists);
    }, {
      limit: 15,
      offset: this.data.singSheet_offset
    })
  
  },
  
  watchBack: function (name){
    console.log(22222);
    console.log('this.name==' + name)
    this.selectComponent("#music").onLoad()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.selectComponent("#music").onLoad()
    getApp().watch(this.watchBack)
    console.log(getApp().globalData.playsongs);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})