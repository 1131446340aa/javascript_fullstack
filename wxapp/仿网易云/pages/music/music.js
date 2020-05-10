// pages/music/music.js
const util = require('../../utils/api')
const lrc = require('../../utils/splitlrc')
let i = 0
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        playsongs: getApp().globalData.playsongs, //歌单
        singUrl: '', //歌曲地址
        current: getApp().globalData.current, //当前歌所在歌单的第几项
        isPlay: getApp().globalData.isplay, //是否在播放
        playRules: 1, //播放规则
        playSongsRules: [],
        currentTime: "00 : 00", //当前歌曲播放时间
        duration: "00 : 00", //当前歌曲最长时间
        endTimer: "0",
        starttime: 0,
        isTouch: false, //是否在移动进度条
        Width: 0, //总宽度
        progress: 0, //进度条当前进度
        isShow: false, //歌单是否显示
        width: '',
        isclick: false,
        animation: '',
        lrctext: [],
        lrctime: [],
        time_id: 0,
        list_id: 0
    },
    lrc() {
        var reqTask = wx.request({
            url: 'http://localhost:3000/lyric?id=' + this.data.playsongs[this.data.current].id,
            success: (result) => {
                if (result.data.lrc.lyric) {
                    getApp().globalData.lrctext = lrc.toLrc(result.data.lrc.lyric).arrtext
                    getApp().globalData.lrctime = lrc.toLrc(result.data.lrc.lyric).arrdatatime
                } else {
                    getApp().globalData.lrctext = ""
                    getApp().globalData.lrctime = ""
                }
                this.setData({
                    lrctext: getApp().globalData.lrctext,
                    lrctime: getApp().globalData.lrctime
                })



            },
            fail: () => {},
            complete: () => {}
        });
    },

    touchstart(e) {
        // console.log(e);

        this.setData({
            isTouch: true,

        })
    },
    touchend(e) {
        // console.log(e.detail);
        // console.log(this.data.endTimer);


        const backgroundAudioManager = wx.getBackgroundAudioManager()
        backgroundAudioManager.seek(Math.floor(e.detail.value * this.data.endTimer / 100))
            // this.setData({

        //     progress: e.detail.value
        // })
        this.setData({
            isTouch: false,
            progress: e.detail.value

        })
    },
    //歌单是否显示
    HiddenList() {
        this.setData({
            isShow: false
        })
    },
    //播放规则
    playRules() {
        this.setData({
            playRules: this.data.playRules + 1
        })
        getApp().globalData.playRules = this.data.playRules
    },
    playrule() {
        if ((this.data.playRules % 3) === 1) {
            this.setData({
                playsongs: [...this.data.playSongsRules]
            })
            getApp().globalData.playRules = this.data.playRules
        }
        if ((this.data.playRules % 3) === 2) {
            this.setData({
                current: Math.floor(Math.random() * (this.data.playsongs.length))
            })


        }

    },
    //是否播放
    isPlay() {
        // this.rotate()
        this.setData({
            isPlay: !this.data.isPlay
        })
        getApp().globalData.isplay = this.data.isPlay
        if (this.data.isPlay === true) {
            wx.playBackgroundAudio({
                dataUrl: this.data.singUrl,
                title: '',
                coverImgUrl: ''
            })
        } else {
            wx.pauseBackgroundAudio();

        }
    },
    play_music() {
        let that = this
        if (that.data.current < 0) {
            this.setData({
                current: this.data.playsongs.length - 1
            })
        }
        if (that.data.current === this.data.playsongs.length) {
            this.setData({
                current: 0
            })
        }



        if (!this.data.playsongs[this.data.current].authorname) {
            wx.request({
                url: 'http://localhost:3001/users/historyplay',
                data: {
                    song_name: this.data.playsongs[this.data.current].name,
                    author_name: this.data.playsongs[this.data.current].ar[0].name,
                    id: this.data.playsongs[this.data.current].id,
                    picUrl: this.data.playsongs[this.data.current].al.picUrl
                },
                header: { 'content-type': 'application/json' },
                method: 'POST',
                dataType: 'json',
                responseType: 'text',
                success: (result) => {


                },
                fail: () => {},
                complete: () => {}
            });
        }



        getApp().globalData.current = that.data.current
        util.api('song/url', res => {
            this.paramStore()
            that.setData({
                singUrl: res.data.data[0].url,

            })

            if (!that.data.singUrl) {
                wx.showToast({
                    title: '歌曲暂未收录，播放下一首',
                    icon: 'none',
                    image: '',
                    duration: 1500,
                    mask: false,
                    success: (result) => {
                        setTimeout(() => { that.bindended() }, 3000)
                    },
                    fail: () => {},
                    complete: () => {}
                });
            }
            this.playmusic()

            this.lrc()
        }, { id: that.data.playsongs[that.data.current].id })
    },
    last() {
        let that = this
        this.setData({
            current: that.data.current - 1,
            isPlay: true,
            isclick: true
        })
        getApp().globalData.isplay = this.data.isPlay
        this.playrule()
        this.play_music()
    },
    playCurrentSong(e) {
        this.setData({
            isPlay: true,
            current: e.currentTarget.dataset.id
        })
        this.play_music()
    },
    playList() {


        this.setData({
            isShow: true
        })
    },
    bindended() {

        let that = this

        this.setData({
            current: that.data.current + 1,
            isPlay: true,
            isclick: true
        })
        getApp().globalData.isplay = this.data.isPlay
        this.playrule()
        this.play_music()
    },
    playmusic() {


        var backgroundAudioManager = wx.getBackgroundAudioManager()



        // backgroundAudioManager.src !== this.data.singUrl
        backgroundAudioManager.src = this.data.singUrl
        backgroundAudioManager.title = 1
        backgroundAudioManager.singer = 2
        this.musiccontrol(backgroundAudioManager)



    },
    musiccontrol(backgroundAudioManager) {
        let last_time = 0;
        let that = this

        that.setData({
            time_id: 0,
            list_id: 0


        })

        backgroundAudioManager.onTimeUpdate(() => {
            let now_time = Date.parse(new Date())
            if ((now_time - last_time) >= 800 || this.data.isclick === true || this.data.isTouch === true) {

                // console.log(Math.floor(backgroundAudioManager.currentTime));
                for (let i = 0; i < getApp().globalData.lrctime.length; i++) {
                    if (getApp().globalData.lrctime[i] == Math.floor(backgroundAudioManager.currentTime)) {
                        {
                            const query = wx.createSelectorQuery()
                            query.select(".line")
                                .boundingClientRect(function(rect) {
                                    that.setData({
                                        time_id: i,
                                        list_id: i

                                    })
                                    if (that.data.list_id <= 6) {
                                        that.setData({

                                            list_id: 0

                                        })

                                    } else {
                                        that.setData({

                                            list_id: that.data.list_id - 6

                                        })

                                    }
                                })
                                .exec();
                        }
                    }
                }
                last_time = now_time
                let CurrentTimeMIn = (Array(2).join('0') + Math.floor(backgroundAudioManager.currentTime / 60)).slice(-2)
                let CurrentTimeSco = (Array(2).join('0') + Math.floor(backgroundAudioManager.currentTime - Math.floor(backgroundAudioManager.currentTime / 60) * 60)).slice(-2)
                if (!endTimeMIn) {
                    var endTimeMIn = (Array(2).join('0') + Math.floor(backgroundAudioManager.duration / 60)).slice(-2)
                    var endTimeSco = (Array(2).join('0') + Math.floor(backgroundAudioManager.duration - Math.floor(backgroundAudioManager.duration / 60) * 60)).slice(-2)
                }
                this.setData({
                    duration: endTimeMIn + " : " + endTimeSco,
                    currentTime: CurrentTimeMIn + " : " + CurrentTimeSco,
                    endTimer: backgroundAudioManager.duration,
                    starttime: backgroundAudioManager.currentTime,
                    isclick: false
                })
                getApp().globalData.progress = this.data.progress
                getApp().globalData.endtimer = this.data.duration
                getApp().globalData.starttimer = this.data.currentTime
                getApp().globalData.duration = this.data.endTimer
                if (this.data.isTouch === false) {
                    this.setData({ progress: Math.floor(backgroundAudioManager.currentTime / backgroundAudioManager.duration * 100), })
                }
                // console.log(this.data.progress);

                // console.log(1);
            }
        })
        backgroundAudioManager.onEnded(() => {
            if (this.data.playRules % 3 === 0) {
                this.setData({
                    current: this.data.current - 1
                })

            }
            this.bindended()
        })
    },
    paramStore() {
        getApp().globalData.singdetail = this.data.playsongs[this.data.current]
        getApp().globalData.singname = app.globalData.singdetail.name

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

        this.setData({
            playRules: getApp().globalData.playRules
        })
        if (getApp().globalData.id === 0) {
            var list = app.globalData.playsongs
            this.setData({
                playsongs: list,
                playSongsRules: list,
                isPlay: true,
                current: Math.floor(options.id)
            })
            getApp().globalData.isplay = this.data.isPlay
            this.paramStore()
            getApp().globalData.playsongs = list
            this.play_music()
                // this.lrc()
                // console.log(this.data.lrctext);



        }
        if (getApp().globalData.id === 1) {

            getApp().globalData.id = 0
            this.setData({
                playsongs: getApp().globalData.playsongs,
                playSongsRules: getApp().globalData.playsongs,
                isPlay: getApp().globalData.isplay,
                current: getApp().globalData.current
            })

            getApp().globalData.isplay = this.data.isPlay
            this.paramStore()


            if (getApp().globalData.isplay === false) {
                this.setData({
                    duration: getApp().globalData.endtimer,
                    currentTime: getApp().globalData.starttimer,
                    endTimer: getApp().globalData.duration,

                    progress: getApp().globalData.progress,
                })
            }
            if (this.data.isTouch === false) {

                var backgroundAudioManager = wx.getBackgroundAudioManager();
                this.musiccontrol(backgroundAudioManager)
            }
            this.setData({
                lrctext: getApp().globalData.lrctext,
                lrctime: getApp().globalData.lrctime
            })

        }
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