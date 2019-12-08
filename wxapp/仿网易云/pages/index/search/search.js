// pages/index/search/search.js
let timer
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hotkeys: [],
        query: "",
        offset: -1,
        songItem: [],
        histiryItem:[],
        loading:false
    },
    debounce(e) {
        console.log(1);
        
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => { this.searchbox(e) }, 300)
    },
    itemClick(e){
        this.setData({
            query:e.currentTarget.dataset.query,
            histiryItem:[...new Set([e.currentTarget.dataset.query,...this.data.histiryItem])]
        })
        wx.navigateTo({
            url: './searchBox/searchBox?query='+this.data.query
          })
        console.log(this.data.histiryItem);
        
    },
    hotsearch(e){
        this.setData({
            query:e.currentTarget.dataset.query
        })
        this.search(e.currentTarget.dataset.query,0)
    //    this.searchbox(e.currentTarget.dataset.query)
    },
    historyItem(e){ this.setData({
        query:e.currentTarget.dataset.query
    })
    this.search(e.currentTarget.dataset.query,0)},
    api(url, func) {

        let host = 'http://www.china-4s.com/'
        wx.request({
            url: host + url,
            success: func
        })
    },
    searchbox(e) {
        this.setData({
            query: e.detail,
            offset: 0
        })
        console.log(this.data.query);
        if (this.data.query) { this.search(this.data.query, this.data.offset * 30) }

    },
    search(query, offset) {
        wx.request({
            url: 'http://localhost:3000/search',
            // url:'http://www.china-4s.com/search/suggest',
            data: {
                keywords: query,
                offset: offset
            },
            success: res => {
                console.log(res.data.result.songs);
                this.setData({ songItem: [...res.data.result.songs],
                    loading:true })
            }
        })
    },
    watchBack1: function (){
    
        this.selectComponent("#music").onLoad()
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.api('search/hot/detail', res => {
            console.log(res.data.result);
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