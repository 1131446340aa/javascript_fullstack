// pages/musictabbar/musictabbar.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        singname: "",
        authorname: "",
        pic: "",
        isplay: app.globalData.isplay

    },
    musicPlay() {
        console.log(1);
        if (app.globalData.isplay === true) {
            wx.pauseBackgroundAudio();
            getApp().globalData.isplay = false
            this.setData({
                isplay: false
            })
        } else {

            var backAudioManager = wx.getBackgroundAudioManager();
            backAudioManager.play()


            if (app.globalData.singdetail.name) {
                getApp().globalData.isplay = true
                this.setData({
                    isplay: true
                })
            }
        }
    },

    playmusic() {
        if (app.globalData.singdetail.name) {
            getApp().globalData.id = 1
            console.log(1);

            wx.navigateTo({
                url: '/pages/music/music',
                success: (result) => {

                },
                fail: () => {},
                complete: () => {}
            });
        } else {
            wx.showToast({
                title: '尊敬的小可爱，您还未选取播放音乐',
                icon: 'none',
                image: '',
                duration: 1500,
                mask: false,
                success: (result) => {

                },
                fail: () => {},
                complete: () => {}
            });
        }


    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(123);

        console.log(app.globalData.singdetail.name);

        if (!app.globalData.singdetail.al && !app.globalData.singdetail.artists) {
            console.log(1);
            this.setData({
                singname: '暂无播放歌曲',
                authorname: '暂无播放歌手',
                pic: './images/bg.png',
                isplay: app.globalData.isplay
            })
        }
        if (app.globalData.singdetail.artists) {
            this.setData({
                singname: app.globalData.singdetail.name,
                authorname: app.globalData.singdetail.artists[0].name,
                pic: app.globalData.singdetail.artists[0].img1v1Url,
                isplay: app.globalData.isplay
            })
        }
        if (app.globalData.singdetail.al) {
            this.setData({
                singname: app.globalData.singdetail.name,
                authorname: app.globalData.singdetail.ar[0].name,
                pic: app.globalData.singdetail.al.picUrl,
                isplay: app.globalData.isplay
            })
        }

        var backAudioManager1 = wx.getBackgroundAudioManager();
        // backAudioManager.onTimeUpdate(()=>{
        //   console.log(1);
        //   // this.triggerEvent('callFather')
        // })
        //  backAudioManager1.onEnded(()=>{
        //    console.log(1);

        //  })



    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})