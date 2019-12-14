// pages/index/search/searchBox/searchBox.js
const util = require('../../../../utils/api')
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        query: "", //关键字
        offset: -15, //偏移量
        songItem: [], //歌单
        loading: false
    },
    search(query, offset) {
        offset = offset + 15
        this.setData({
            offset: offset,
            loading: false
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
                for (let i = 0; i < res.data.result.songs.length; i++) {
                    util.api('song/detail', res => {
                        this.setData({
                            songItem: [...this.data.songItem, ...res.data.songs]
                        })
                        console.log(this.data.songItem);

                    }, { ids: res.data.result.songs[i].id })
                }
                this.setData({
                    loading: true
                })


            }
        })
    },
    bindscrolltolower() {
        this.setData({
                loading: false
            })
            // console.log(this.data.loading);
        this.search(this.data.query, this.data.offset)
    },
    //去播放音乐界面，同时更新歌单
    playmusic(e) {
        let id = e.currentTarget.dataset.id
        getApp().globalData.playsongs = this.data.songItem
        wx.redirectTo({
            url: '../../../music/music?id=' + id,
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            query: options.query
        })
        this.search(this.data.query, this.data.offset)

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {},

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