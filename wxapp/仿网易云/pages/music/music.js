// pages/music/music.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    playsongs: [],
    singUrl: '',
    current: 0,
    isPlay: true,
    playRules: 1,
    playSongsRules: [],
    CurrentTime: "00 : 00",
    endTime: "00 : 00",
    endTimer: "0",
    isTouch:false,
    Width: 0,
    progress: 0,
    isShow: false,
    actions: [
      { name: '选项' },
      { name: '选项' },
      { name: '选项', subname: '描述信息' },
      { name: '选项' },
      { name: '选项' },
      { name: '选项', subname: '描述信息' }
    ],

  },
  api(url, func, param) {
    let host = 'http://www.china-4s.com/'
    wx.request({
      url: host + url,
      data: param,
      success: func
    })
  },
  move(e) {

    let selQuery = wx.createSelectorQuery();
    selQuery.select('.progress-bar').boundingClientRect()
    selQuery.exec(res => {
      let offset = res[0].left
      let Width = res[0].width
      this.setData({
        progress: ((e.touches[0].clientX - offset) / Width) * 100,
        Width: Width,
        isTouch:true
      })
      if(this.data.progress<0){
        this.setData({
          progress:0
         
        })
      }
      if(this.data.progress>100){
        this.setData({
          progress:100
        })
      }
    })
  },
  touchstart(e) {
    this.move(e)
    this.setData({
      isTouch:false
    })
    console.log(this.data.isTouch);
  },
  touchmove(e) {
    this.move(e)
    console.log(this.data.isTouch);
  },
  touchend(e) {
    let selQuery = wx.createSelectorQuery();
    selQuery.select('.progress-bar').boundingClientRect()
    selQuery.exec(res => {
      let offset = res[0].left
      let Width = res[0].width
      this.setData({
        progress: ((e.changedTouches[0].clientX - offset) / Width) * 100,
        isTouch:false
      })
      console.log(this.data.isTouch);
      if(this.data.progress<0){
        this.setData({
          progress:0
        })
      }
      if(this.data.progress>100){
        this.setData({
          progress:100
        })
      }
      var audioContext = wx.createAudioContext('myAudio', this);
      audioContext.seek(Math.floor(this.data.endTimer * this.data.progress / 100))
    })

  },
  HiddenList() {
    this.setData({
      isShow: false
    })
  },
  bindtimeupdate(e) {
    let that = this
    var CurrentTime = e.detail.currentTime
    let CurrentTimeMIn = (Array(2).join('0') + Math.floor(CurrentTime / 60)).slice(-2)
    let CurrentTimeSco = (Array(2).join('0') + Math.floor(CurrentTime - Math.floor(CurrentTime / 60) * 60)).slice(-2)
    var endTime = e.detail.duration
    let endTimeMIn = (Array(2).join('0') + Math.floor(endTime / 60)).slice(-2)
    let endTimeSco = (Array(2).join('0') + Math.floor(endTime - Math.floor(endTime / 60) * 60)).slice(-2)
    let progress = Math.floor((CurrentTime / endTime) * 100)
    // let progress=endTime+1
    console.log(this.data.isTouch);
    if(!this.data.isTouch){
      this.setData({
        progress: progress
      })
    }
    this.setData({
      endTime: endTimeMIn + " : " + endTimeSco,
      CurrentTime: CurrentTimeMIn + " : " + CurrentTimeSco,
     
      endTimer: endTime
    })
  },
  playRules() {
    this.setData({
      playRules: this.data.playRules + 1
    })
  },
  input(value) {
    console.log(value);
    console.log(1);

  },
  playrule() {
    if ((this.data.playRules % 3) === 1) {
      this.setData({
        playsongs: [...this.data.playSongsRules]
      })
    }
    if ((this.data.playRules % 3) === 2) {
      this.setData({
        playsongs: this.data.playSongsRules.sort(() => { return Math.random() - 0.5 })
      })
    }
  },
  isPlay() {
    var audioContext = wx.createAudioContext('myAudio', this);
    this.setData({
      isPlay: !this.data.isPlay
    })
    if (this.data.isPlay === true) {
      audioContext.play()
    }
    else {
      audioContext.pause()
    }
  },
  last() {
    this.playrule()
    {
      let that = this

      this.setData({
        current: that.data.current - 1,
        isPlay: true
      })


      if (that.data.current < 0) {
        this.setData({
          current: this.data.playsongs.length - 1
        })
      }

      this.api('song/url', res => {

        that.setData({
          singUrl: res.data.data[0].url,

        })

        if (!that.data.singUrl) {
          let that = this
          wx.showToast({
            title: '歌曲暂未收录，播放下一首',
            icon: 'none',
            image: '',
            duration: 1500,
            mask: false,
            success: (result) => {
              setTimeout(that.bindended(), 2000)
            },
            fail: () => { },
            complete: () => { }
          });
          wx.hideToast();

        }
        var audioContext = wx.createAudioContext('myAudio', this);
        audioContext.play()
      }, { id: that.data.playsongs[that.data.current].id })
    }
  },
  playCurrentSong(e) {
    console.log(1311);

    this.playrule()
    {
      let that = this

      this.setData({
        isPlay: true,
        current: e.currentTarget.dataset.id
      })
      this.api('song/url', res => {

        that.setData({
          singUrl: res.data.data[0].url,

        })

        if (!that.data.singUrl) {
          let that = this
          wx.showToast({
            title: '歌曲暂未收录，播放下一首',
            icon: 'none',
            image: '',
            duration: 1500,
            mask: false,
            success: (result) => {
              setTimeout(that.bindended(), 2000)
            },
            fail: () => { },
            complete: () => { }
          });
          wx.hideToast();

        }
        var audioContext = wx.createAudioContext('myAudio', this);
        audioContext.play()
      }, { id: that.data.playsongs[that.data.current].id })
    }
  },
  playList() {
    console.log(1);

    this.setData({
      isShow: true
    })
  },
  bindended() {

    let that = this
    this.playrule()
    this.setData({
      current: that.data.current + 1,
      isPlay: true
    })
    if (that.data.current === that.data.playsongs.length) {
      this.setData({
        current: 0
      })
    }

    this.api('song/url', res => {

      that.setData({
        singUrl: res.data.data[0].url,

      })

      if (!that.data.singUrl) {
        let that = this
        wx.showToast({
          title: '歌曲暂未收录，播放下一首',
          icon: 'none',
          image: '',
          duration: 1500,
          mask: false,
          success: (result) => {
            setTimeout(that.bindended(), 2000)
          },
          fail: () => { },
          complete: () => { }
        });
      }
      var audioContext = wx.createAudioContext('myAudio', this);
      audioContext.play()
    }, { id: that.data.playsongs[that.data.current].id })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = JSON.parse(decodeURIComponent((options.model)))
    var music = JSON.parse(decodeURIComponent((options.music)))
    let arr = [music, ...list]
    let id = Math.floor(options.id) + 1
    arr.splice(id, 1)
    this.setData({
      playsongs: arr,
      playSongsRules: arr
    })
    this.api('song/url', res => {
      this.setData({
        singUrl: res.data.data[0].url,
        // current: this.data.current + 1
      })
      console.log(this.data.singUrl);

      if (!this.data.singUrl) {
        let that = this
        wx.showToast({
          title: '歌曲暂未收录，播放下一首',
          icon: 'none',
          image: '',
          duration: 1500,
          mask: false,
          success: (result) => {
            setTimeout(that.bindended(), 2000)
          },
          fail: () => { },
          complete: () => { }
        });
        // this.bindended()
      }
      if (this.data.current === this.data.playsongs.length) {
        this.setData({
          current: 0
        })
      }
      var audioContext = wx.createAudioContext('myAudio', this);
      audioContext.play()
    }, { id: this.data.playsongs[this.data.current].id })

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