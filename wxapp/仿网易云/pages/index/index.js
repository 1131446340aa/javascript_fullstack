// pages/index/index.js
var util = require('./../../utils/api.js')
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: "1", //当前是第几页
        banner: [], //轮播图
        recommendSongs: [], //热门推荐歌单
        album: [], //新碟歌单
        videoDetail: [], //视频详情
        offset: -1, //视频页码
        singSheet_offset: 0, //歌单页面页码
        singSheet_playlist: [], //歌单页面的歌单
        indexloading: false, //检查轮播图是否加载完毕，由于此页面轮播图数据较大，所以检查
        mvloading: false, //mv是否加载
        singlistloading: false, //歌单页面是否加载
    },
    // 滑页面
    toloading() {
        wx.navigateTo({
            url: '../login/login',
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });
    },
    currentchange(e) {
        this.setData({
            current: e.detail.current
        })
    },
    //点页面
    navBarClick(e) {

        this.setData({ current: e.currentTarget.dataset.id })
    },
    history() {
        wx.navigateTo({
            url: '../playhistory/playhistory',
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });

    },
    //执行播放mv
    mv() {
        let that = this
        that.setData({
            offset: that.data.offset + 1
        })
        util.api('top/mv/all', res => {
            let middle = res.data.data
            that.setData({
                videoDetail: [...that.data.videoDetail, ...middle],
                mvloading: true
            })
        }, {
            limit: 6,
            offset: that.data.offset * 6
        })

    },
    //当视频拖到底部执行
    bindscrolltolower() {
        this.setData({
            mvloading: false
        })
        this.mv()
    },
    //去搜索页面
    search() {
        wx.navigateTo({
            url: './search/search'
        })
    },
    //歌单页面滚到底部触发
    bindscrolltolower1() {
        this.setData({
            singlistloading: true,
            singSheet_offset: this.data.singSheet_offset + 15
        })
        util.api('top/playlist', res => {


            this.setData({
                    singSheet_playlist: [...this.data.singSheet_playlist, ...res.data.playlists],
                    singlistloading: false

                })
                // console.log(res.data.playlists);
        }, {
            limit: 15,
            offset: this.data.singSheet_offset
        })
    },
    //去MV播放页面
    mvClick(e) {
        wx.navigateTo({
            url: './movie/movie?id=' + e.currentTarget.dataset.id
        })
    },
    //去歌单详情页
    recommendSongs(e) {
        wx.navigateTo({
            url: '../singsheet/singsheet?id=' + e.currentTarget.dataset.id
        })
    },
    collectionsheet() {
        if (!getApp().globalData.user) {
            wx.showToast({
                title: '亲爱的小可爱，您还未登录',
                icon: 'none',
                image: '',
                duration: 1500,
                mask: false,
                success: (result) => {

                },
                fail: () => {},
                complete: () => {}
            });
        } else {
            if (getApp().globalData.collectionsheet.length === 0) {
                wx.showToast({
                    title: '您还没有收藏歌单，快去收藏吧',
                    icon: 'none',
                    image: '',
                    duration: 1500,
                    mask: false,
                    success: (result) => {

                    },
                    fail: () => {},
                    complete: () => {}
                });
            } else {
                wx.navigateTo({
                    url: '../collectionsheet/collectionsheet',
                    success: (result) => {

                    },
                    fail: () => {},
                    complete: () => {}
                });
            }
        }
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
                    // console.log(result);
                    getApp().globalData.collectionsheet = result.data.data

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
        if (options.uservalue) {
            getApp().globalData.user = options.uservalue
        }
        this.collectionsheetdetail()
        let that = this
            //轮播图
        util.api('banner', res => {
                that.setData({
                    banner: res.data.banners,
                    indexloading: true

                })
            })
            //推荐
        util.api('personalized', res => {
                that.setData({
                        //随机选取前六项
                        recommendSongs: res.data.result.sort(() => { return Math.random() - 0.5 }).slice(0, 6)
                    })
                    // console.log(res.data.result);

            })
            //新碟
        util.api('album/newest', res => {
            that.setData({
                album: res.data.albums.sort(() => { return Math.random() - 0.5 }).slice(0, 3)
            })
        })
        this.mv()
            // 歌单
        util.api('top/playlist', res => {
            this.setData({
                    singSheet_playlist: res.data.playlists,
                    singlistloading: true

                })
                // console.log(res.data.playlists);
        }, {
            limit: 15,
            offset: this.data.singSheet_offset
        })

    },

    watchBack: function() {

        this.selectComponent("#music").onLoad()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        this.selectComponent("#music").onLoad()
        getApp().watch(this.watchBack)
            // console.log(getApp().globalData.playsongs);
    },
})