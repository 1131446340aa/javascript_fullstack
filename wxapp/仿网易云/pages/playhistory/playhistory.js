// pages/playhistory/playhistory.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        songItem: []
    },
    historysheet() {
        wx.request({
            url: 'http://localhost:3001/users/play',
            data: {},
            header: { 'content-type': 'application/json' },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
                console.log(result.data);
                this.setData({
                    songItem: result.data.data
                })

            },
            fail: () => {},
            complete: () => {}
        });
    },
    playmusic(e) {
        let id = e.currentTarget.dataset.id
        getApp().globalData.playsongs = this.data.songItem
        wx.navigateTo({
            url: '../music/music?id=' + id
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.historysheet()
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