// pages/index/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotkeys:[]
  },
  api(url, func) {

    let host = 'http://www.china-4s.com/'
    wx.request({
      url: host + url,
      success: func
    })
  },
  search(query,offset){
    wx.request({
      url:'http://localhost:3000/search',
      data:{
        keywords:query,
        offset:offset
      },
      success:res=>{
        console.log(res.data);
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.api('search/hot/detail', res => {
       console.log(res.data);
      this.setData({
        hotkeys:res.data
      })
    })
    this.search('许嵩',30)
    
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