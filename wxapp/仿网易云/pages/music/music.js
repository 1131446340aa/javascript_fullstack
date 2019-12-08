// pages/music/music.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playsongs:getApp().globalData.playsongs,
    singUrl: '',
    current: getApp().globalData.current,
    isPlay: false,
    playRules: 1,
    playSongsRules: [],
    currentTime: "00 : 00",
    duration: "00 : 00",
    endTimer: "0",
    starttime:0,
    isTouch: false,
    Width: 0,
    progress: 0,
    isShow: false,
    a: '',
    b: ''


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
        isTouch: true
      })
      if (this.data.progress < 0) {
        this.setData({
          progress: 0

        })
      }
      if (this.data.progress > 100) {
        this.setData({
          progress: 100
        })
      }
    })
  },
  touchstart(e) {
    this.move(e)
    this.setData({
      isTouch: false
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
        isTouch: false
      })
      console.log(this.data.isTouch);
      if (this.data.progress < 0) {
        this.setData({
          progress: 0
        })
      }
      if (this.data.progress > 100) {
        this.setData({
          progress: 100
        })
      }
      const backgroundAudioManager = wx.getBackgroundAudioManager()
      backgroundAudioManager.seek(Math.floor(this.data.progress * this.data.endTimer / 100))
    })

  },
  HiddenList() {
    this.setData({
      isShow: false
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
        current: Math.floor(Math.random() * (this.data.playsongs.length))
      })
      console.log(this.data.current);

    }

  },
  isPlay() {

    this.setData({
      isPlay: !this.data.isPlay
    })
    getApp().globalData.isplay = this.data.isPlay
    if (this.data.isPlay === true) {
      wx.playBackgroundAudio({
        dataUrl: this.data.singUrl,
        title: '',
        coverImgUrl: '',
        success: (result) => {

        },
        fail: () => { },
        complete: () => { }
      })
    }
    else {
      wx.pauseBackgroundAudio();

    }
  },
  last() {

    {
      let that = this

      this.setData({
        current: that.data.current - 1,
        isPlay: true
      })
      getApp().globalData.isplay = this.data.isPlay
      this.playrule()

      if (that.data.current < 0) {
        this.setData({
          current: this.data.playsongs.length - 1
        })
      }
      getApp().globalData.current=that.data.current
      this.api('song/url', res => {
        this.paramStore()
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
              setTimeout(() => { that.bindended() }, 2000)
            },
            fail: () => { },
            complete: () => { }
          });
          wx.hideToast();

        }
        this.playmusic()
      }, { id: that.data.playsongs[that.data.current].id })
    }
  },
  playCurrentSong(e) {
    console.log(1311);

    // this.playrule()
    {
      let that = this

      this.setData({
        isPlay: true,
        current: e.currentTarget.dataset.id
      })
      getApp().globalData.isplay = this.data.isPlay
      getApp().globalData.current=that.data.current
      this.api('song/url', res => {

        that.setData({
          singUrl: res.data.data[0].url,

        })
        this.paramStore()
        if (!that.data.singUrl) {
          let that = this
          wx.showToast({
            title: '歌曲暂未收录，播放下一首',
            icon: 'none',
            image: '',
            duration: 1500,
            mask: false,
            success: (result) => {
              setTimeout(() => { that.bindended() }, 2000)
            },
            fail: () => { },
            complete: () => { }
          });
          wx.hideToast();

        }
        this.playmusic()
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

    this.setData({
      current: that.data.current + 1, 
      isPlay: true
    })
    getApp().globalData.isplay = this.data.isPlay
    this.playrule()
    if (that.data.current === that.data.playsongs.length) {
      this.setData({
        current: 0
      })
    }
    getApp().globalData.current=that.data.current
    console.log( getApp().globalData.current);
    
    this.api('song/url', res => {

      that.setData({
        singUrl: res.data.data[0].url,

      })

      this.paramStore()
      if (!that.data.singUrl) {
        let that = this
        wx.showToast({
          title: '歌曲暂未收录，播放下一首',
          icon: 'none',
          image: '',
          duration: 1500,
          mask: false,
          success: (result) => {
            setTimeout(() => { that.bindended() }, 2000)
          },
          fail: () => { },
          complete: () => { }
        });
      }
      this.playmusic()
    }, { id: that.data.playsongs[that.data.current].id })
  },
  playmusic() {
    console.log(1);
   
      var backgroundAudioManager = wx.getBackgroundAudioManager()
  

    backgroundAudioManager.src !== this.data.singUrl 
      backgroundAudioManager.src = this.data.singUrl
      backgroundAudioManager.title = 1
      backgroundAudioManager.singer = 2
    

    backgroundAudioManager.onTimeUpdate(() => {
      let CurrentTimeMIn = (Array(2).join('0') + Math.floor(backgroundAudioManager.currentTime / 60)).slice(-2)
      let CurrentTimeSco = (Array(2).join('0') + Math.floor(backgroundAudioManager.currentTime - Math.floor(backgroundAudioManager.currentTime / 60) * 60)).slice(-2)

      let endTimeMIn = (Array(2).join('0') + Math.floor(backgroundAudioManager.duration / 60)).slice(-2)
      let endTimeSco = (Array(2).join('0') + Math.floor(backgroundAudioManager.duration - Math.floor(backgroundAudioManager.duration / 60) * 60)).slice(-2)

      this.setData({
        duration: endTimeMIn + " : " + endTimeSco,
        currentTime: CurrentTimeMIn + " : " + CurrentTimeSco,

        endTimer: backgroundAudioManager.duration,
        starttime:backgroundAudioManager.currentTime
      })

      if (this.data.isTouch === false) {
        this.setData({ progress: Math.floor(backgroundAudioManager.currentTime / backgroundAudioManager.duration * 100), })
      }
      console.log(backgroundAudioManager.src);
      console.log(this.data.singUrl);



    })
    backgroundAudioManager.onEnded(() => {
      if (this.data.playRules % 3 === 0) {
        this.setData({
          current: this.data.current - 1
        })

      }
      console.log(12312);

      this.bindended()
    })
  },
  paramStore() {
    // getApp().globalData.singauthor = this.data.playsongs[this.data.current].artists[0].name || this.data.playsongs[this.data.current].ar[0].name
    // getApp().globalData.singname = this.data.playsongs[this.data.current].name
    getApp().globalData.singdetail = this.data.playsongs[this.data.current]

    getApp().globalData.singname = app.globalData.singdetail.name
    console.log(app.globalData.singdetail.name);

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    if (getApp().globalData.id !== 1) {
      console.log(app.globalData.playsongs)
      var list = app.globalData.playsongs
      var music = list[options.id]
      let arr = [music, ...list]

      console.log(arr);

      let id = Math.floor(options.id) + 1
      arr.splice(id, 1)
      this.setData({
        playsongs: arr,
        playSongsRules: arr,
        isPlay: true
      })
      getApp().globalData.isplay = this.data.isPlay
      this.paramStore()
      console.log(getApp().globalData.id);
     getApp().globalData.playsongs=arr
     console.log(getApp().globalData.playsongs);
     
      this.api('song/url', res => {
        this.setData({
          singUrl: res.data.data[0].url,
          // current: this.data.current + 1
        })
        console.log(res.data);

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
              setTimeout(() => { that.bindended() }, 2000)
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

        this.playmusic()


      }
        , { id: this.data.playsongs[this.data.current].id })
    }




    else {
     
      getApp().globalData.id = 0
      this.setData({
        playsongs: getApp().globalData.playsongs,
        playSongsRules: getApp().globalData.playsongs,
        isPlay: true,
        current:getApp().globalData.current
      })
      getApp().globalData.isplay = this.data.isPlay
      
      console.log(getApp().globalData.playsongs);
      if (this.data.isTouch === false) {
       
        var backgroundAudioManager = wx.getBackgroundAudioManager();
        backgroundAudioManager.onTimeUpdate(() => {
          let CurrentTimeMIn = (Array(2).join('0') + Math.floor(backgroundAudioManager.currentTime / 60)).slice(-2)
          let CurrentTimeSco = (Array(2).join('0') + Math.floor(backgroundAudioManager.currentTime - Math.floor(backgroundAudioManager.currentTime / 60) * 60)).slice(-2)
    
          let endTimeMIn = (Array(2).join('0') + Math.floor(backgroundAudioManager.duration / 60)).slice(-2)
          let endTimeSco = (Array(2).join('0') + Math.floor(backgroundAudioManager.duration - Math.floor(backgroundAudioManager.duration / 60) * 60)).slice(-2)
    
          this.setData({
            duration: endTimeMIn + " : " + endTimeSco,
            currentTime: CurrentTimeMIn + " : " + CurrentTimeSco,
    
            endTimer: backgroundAudioManager.duration,
            starttime:backgroundAudioManager.currentTime
          })
          
          if (this.data.isTouch === false) {
            this.setData({ progress: Math.floor(backgroundAudioManager.currentTime / backgroundAudioManager.duration * 100), })
          }
          console.log(backgroundAudioManager.src);
          console.log(this.data.singUrl);
    
    
    
        })
      }
     
    }
  }
  ,

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