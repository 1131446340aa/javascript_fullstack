// pages/index/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:[]
  },
  api(url, func, param) {
    let host = 'http://www.china-4s.com/'
    wx.request({
      url: host + url,
      data: param,
      success: func
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    this.api('mv/url', (res) => {
      console.log(res.data.data.url);
      this.setData({
        movie: res.data.data.url,
      })
    }, {
      id:options.id
    })
  
    
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