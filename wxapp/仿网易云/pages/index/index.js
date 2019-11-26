// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 1,
    banner: []
  },

  currentchange(e) {
    //console.log(e.detail.current)
    this.setData({
      current: e.detail.current
    })
  },
  api(url) {
    console.log(1);

    let host = 'http://localhost:3000/'
    wx.request({
      url: host + url,
      success: res => {
        console.log(res.data);
        this.setData({
          banner: res.data.banners
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.api('banner')
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