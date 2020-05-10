// pages/singsheet/singsheet.j
let util = require('../../utils/api')
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: "",
        playlistDetail: {},
        songItem: [],
        isloading: false,
        iscollection: false
    },
    //去播放界面同时更新歌单
    playmusic(e) {
        let id = e.currentTarget.dataset.id
        getApp().globalData.playsongs = this.data.songItem
        wx.navigateTo({
            url: '../music/music?id=' + id
        })
    },
    collectionsheetdetail() {
        if (getApp().globalData.user) {
            wx.request({
                url: 'http://localhost:3001/users/collectionsheetdetail',
                data: {
                    username: getApp().globalData.user
                },
                header: { 'content-type': 'application/json' },
                method: 'POSt',
                dataType: 'json',
                responseType: 'text',
                success: (result) => {
                    console.log(result);
                    getApp().globalData.collectionsheet = result.data.data

                },
                fail: () => {},
                complete: () => {}
            });
        }
    },
    collectsheet() {
        if (getApp().globalData.user) {
            if (this.data.iscollection === false) {
                wx.request({
                    url: 'http://localhost:3001/users/singsheet',
                    data: {
                        id: this.data.id,
                        name: this.data.playlistDetail.name,
                        nickname: this.data.playlistDetail.creator.nickname,
                        pic: this.data.playlistDetail.coverImgUrl,
                        user: getApp().globalData.user
                    },
                    header: { 'content-type': 'application/json' },
                    method: 'POST',
                    dataType: 'json',
                    responseType: 'text',
                    success: (result) => {
                        console.log(result);
                        this.setData({
                            iscollection: true
                        })
                        this.collectionsheetdetail()
                        wx.showToast({
                            title: '小可爱，收藏成功了',
                            icon: 'none',
                            image: '',
                            duration: 1500,
                            mask: false,
                            success: (result) => {

                            },
                            fail: () => {},
                            complete: () => {}
                        });


                    },
                    fail: () => {},
                    complete: () => {}
                });
            }
            if (this.data.iscollection === true) {
                wx.request({
                    url: 'http://localhost:3001/users/deletecollectionsheet',
                    data: {
                        id: this.data.id,
                        user: getApp().globalData.user
                    },
                    header: { 'content-type': 'application/json' },
                    method: 'POST',
                    dataType: 'json',
                    responseType: 'text',
                    success: (result) => {
                        console.log(result);
                        this.setData({
                            iscollection: false
                        })
                        this.collectionsheetdetail()
                        wx.showToast({
                            title: '成功取消收藏',
                            icon: 'none',
                            image: '',
                            duration: 1500,
                            mask: false,
                            success: (result) => {

                            },
                            fail: () => {},
                            complete: () => {}
                        });

                    },
                    fail: () => {},
                    complete: () => {}
                });
            }
        } else {
            wx.showToast({
                title: '亲爱的小可爱，你还未登陆',
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
    iscollection() {
        if (getApp().globalData.collectionsheet) {
            for (var item of getApp().globalData.collectionsheet) {
                console.log(item.id);

                if (item.id === this.data.id && item.username === getApp().globalData.user) {
                    this.setData({
                        iscollection: true
                    })
                    return;
                }
            }
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            id: options.id
        })
        this.iscollection()
        console.log(this.data.id);

        util.api('playlist/detail', res => {
            console.log(res.data.playlist.subscribers);

            this.setData({
                playlistDetail: res.data.playlist,
                songItem: [...res.data.playlist.tracks],
                isloading: true
            })
        }, { id: options.id })

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