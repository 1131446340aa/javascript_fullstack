// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 2,
    banner: [],
    recommendSongs: [],
    album: [],
    videoDetail: [],
    offset: -1,
    video: [],
    artists: []
  },

  currentchange(e) {
    //console.log(e.detail.current)
    this.setData({
      current: e.detail.current
    })
  },
 
  api(url, func) {
    console.log(1);

    let host = 'http://www.china-4s.com/'
    wx.request({
      url: host + url,
      success: func
    })
  },
  navBarClick(e) {
    this.setData(
      { current: e.currentTarget.dataset.id }
    )


  },
  mv() {


    let that = this
    that.setData({
      offset: that.data.offset+1
    })
    console.log(that.data.offset);
    wx.request({

      url: "http://china-4s.com/top/mv/all?limit=10" + "&offset=" + that.data.offset * 10,
      success: res => {
        // console.log(that.data.offset);

        // console.log(res.data.data);
        let middle = res.data.data
        that.setData({
          videoDetail: [...that.data.videoDetail, ...middle]
        })
        let self = that
        // console.log(self.data.videoDetail);

        for (let i = 0; i < middle.length; i++) {
          // console.log(self.data.videoDetail[i].name);
          // console.log(self.data.videoDetail[i].id);
          wx.request({
            url: 'http://china-4s.com/mv/url' + "?id=" + middle[i].id,
            success: res => {
              self.setData({
                video: [...self.data.video, res.data]
              })
              // console.log(self.data.videoDetail[i].id);
              
            }
          })
        }
      }
    })
  },
  bindscrolltolower() {
    this.mv()
  },
  play(e) {

    // console.log(e.currentTarget.dataset.id);
    this.setData({ currentplay: e.currentTarget.dataset.id })

  },
  search(e){
    console.log(e);
    
    wx.navigateTo({
      url: './search/search'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.api('banner', res => {
      // console.log(res.data);
      that.setData({
        banner: res.data.banners
      })
    })
    this.api('personalized', res => {
      // console.log(res.data);
      that.setData({
        recommendSongs: res.data.result.sort(() => { return Math.random() - 0.5 }).slice(0, 6)
      })
    })
    this.api('album/newest', res => {
      // console.log(res.data);
      that.setData({
        album: res.data.albums.sort(() => { return Math.random() - 0.5 }).slice(0, 3)
      })
    })
    
    this.mv()
    this.api('top/artists', res => {
      console.log(res.data.artists);
      that.setData({
        artists:res.data.artists
      })
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