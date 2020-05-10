// pages/index/search/search.js
let timer
const util = require('../../../utils/api')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hotkeys: [], //热门搜索项
        query: "", //关键字
        offset: -1, //页码
        songItem: [], //根据关键字搜索到的歌
        histiryItem: [], //历史记录
        loading: false
    },
    //防抖函数
    debounce(e) {
        // console.log(1);

        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => { this.searchbox(e) }, 300)
    },
    //搜索内容点击顺便去搜索音乐结果页面
    itemClick(e) {
        this.setData({
            query: e.currentTarget.dataset.query,
        })
        wx.navigateTo({
            url: './searchBox/searchBox?query=' + this.data.query,
            success: (result) => {
                wx.request({
                    url: 'http://localhost:3001/users/inserthistiryItem',
                    data: {
                        query: this.data.query
                    },
                    header: { 'content-type': 'application/json' },
                    method: 'POST',
                    dataType: 'json',
                    responseType: 'text',
                    success: (result) => {},
                    fail: () => {},
                    complete: () => {}
                });
            },
            fail: () => {},
            complete: () => {}
        });

        // console.log(this.data.histiryItem);
    },
    delete() {
        wx.request({
            url: 'http://localhost:3001/users/delete',
            data: {},
            header: { 'content-type': 'application/json' },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
                if (result.data.code === "200") {
                    wx.showToast({
                        title: '删除成功',
                        icon: 'none',
                        image: '',
                        duration: 1000,
                        mask: false,
                        success: (result) => {
                            this.historyAll()
                        },
                        fail: () => {},
                        complete: () => {}
                    });
                }

            },
            fail: () => {},
            complete: () => {}
        });
    },
    hotsearch(e) {
        this.setData({
            query: e.currentTarget.dataset.query
        })
        this.search(e.currentTarget.dataset.query, 0)
            //    this.searchbox(e.currentTarget.dataset.query)
    },
    historyItem(e) {
        this.setData({
            query: e.currentTarget.dataset.query
        })
        this.search(e.currentTarget.dataset.query, 0)
    },

    searchbox(e) {
        this.setData({
                query: e.detail,
                offset: 0
            })
            // console.log(this.data.query);
        if (this.data.query) { this.search(this.data.query, this.data.offset * 30) }

    },
    historyAll() {
        wx.request({

            url: 'http://localhost:3001/users/history',
            data: {},
            header: { 'content-type': 'application/json' },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
                // console.log(result.data);
                this.setData({
                    histiryItem: result.data.history.reverse()
                })
            },
            fail: () => {},
            complete: () => {}
        });
    },
    //搜索函数
    search(query, offset) {
        wx.request({
            url: 'http://localhost:3000/search',
            // url:'http://www.china-4s.com/search/suggest',
            data: {
                keywords: query,
                offset: offset
            },
            success: res => {
                // console.log(res.data.result.songs);
                this.setData({
                    songItem: [...res.data.result.songs],
                    loading: true
                })
            }
        })
    },
    watchBack1: function() {

        this.selectComponent("#music").onLoad()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        util.api('search/hot/detail', res => {
            // console.log(res.data.result);
            this.setData({
                hotkeys: res.data.result.hots
            })
        })

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
        getApp().watch(this.watchBack1)
        this.selectComponent("#music").onLoad()
        this.historyAll()
        this.setData({
            query: ''
        })
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