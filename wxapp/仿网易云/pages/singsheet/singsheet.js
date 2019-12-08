// pages/singsheet/singsheet.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    playlistDetail:{},
    songItem:[],
    isloading:false
  },
  api(url, func, param) {

    let host = 'http://www.china-4s.com'
    wx.request({
      url: host + url,
      data: param,
      success: func
    })
  },
  playmusic(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../music/music?id=' + id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    console.log(this.data.id);
    
    this.api('/playlist/detail', res => {
      console.log(res.data.playlist.subscribers);
      getApp().globalData.playsongs=[...res.data.playlist.tracks]
      this.setData({
        playlistDetail:res.data.playlist,
        songItem: app.globalData.playsongs,
        isloading:true
      })
    }, { id: options.id })

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