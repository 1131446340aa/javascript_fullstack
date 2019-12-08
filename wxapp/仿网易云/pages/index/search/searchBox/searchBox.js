// pages/index/search/searchBox/searchBox.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: "",
    offset: -15,
    songItem: [],
    playList: [],
    loading: false
  },
  search(query, offset) {
    offset = offset + 15
    this.setData({
      offset: offset,
      loading:false
    })
    

    wx.request({
      url: 'http://localhost:3000/search',
      // url:'http://www.china-4s.com/search/suggest',
      data: {
        keywords: query,
        offset: offset,
        limit: 15
      },
      success: res => {
        getApp().globalData.playsongs=[...this.data.songItem, ...res.data.result.songs]
        console.log(app.globalData.playsongs);
        this.setData({
          songItem:app.globalData.playsongs,
          loading:true
        })
        console.log(this.data.loading); 
      }
    })
  },
  bindscrolltolower() {
    console.log(1);
    
    this.setData({
      loading:false
    })
    console.log(this.data.loading);
    
    this.search(this.data.query, this.data.offset)
  },
  playmusic(e) {
    let id = e.currentTarget.dataset.id
    // let model = encodeURIComponent(JSON.stringify(this.data.songItem))
    // let music = encodeURIComponent(JSON.stringify(this.data.songItem[id]))
    wx.navigateTo({
      url: '../../../music/music?id=' + id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      query: options.query
    })
    this.search(this.data.query, this.data.offset)

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