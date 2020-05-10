// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isactiveUser: false,
        isactivePwd: false,
        isactivePwd2: false,
        ispwdwarning: true,
        ispwdwarning2: true,
        isuserwarning: true,
        uservalue: "",
        pwdvalue: "",
        pwdvalue2: "",
        isSame: true
    },
    focus() {
        console.log(1);

        this.animate('#input1', [{ width: '0px', ease: 'ease-out' },
            { width: '50%', ease: 'ease-out' },
            { width: '100%', ease: 'ease-out' },
        ], 200)
        this.setData({
            isactiveUser: true,
            isuserwarning: true
        })
    },
    blur(e) {
        this.animate('#input1', [{ width: '100%', ease: 'ease-in' },
            { width: '50%', ease: 'ease-in' },
            { width: '0', ease: 'ease-in' },
        ], 200)
        this.setData({
            isactiveUser: false,
            uservalue: e.detail.value
        })
    },
    blurpwd(e) {
        this.animate('#input', [{ width: '100%', ease: 'ease-in' },
            { width: '50%', ease: 'ease-in' },
            { width: '0', ease: 'ease-in' },
        ], 200)
        this.setData({
            isactivePwd: false,
            pwdvalue: e.detail.value
        })
    },
    focuspwd() {
        this.animate('#input', [{ width: '0px', ease: 'ease-out' },
            { width: '50%', ease: 'ease-out' },
            { width: '100%', ease: 'ease-out' },
        ], 200)
        this.setData({
            isactivePwd: true,
            ispwdwarning: true,
            isSame: true
        })
    },
    blurpwd2(e) {
        this.animate('#input2', [{ width: '100%', ease: 'ease-in' },
            { width: '50%', ease: 'ease-in' },
            { width: '0', ease: 'ease-in' },
        ], 200)
        this.setData({
            isactivePwd2: false,
            pwdvalue2: e.detail.value
        })
    },
    focuspwd2() {
        this.animate('#input2', [{ width: '0px', ease: 'ease-out' },
            { width: '50%', ease: 'ease-out' },
            { width: '100%', ease: 'ease-out' },
        ], 200)
        this.setData({
            isactivePwd2: true,
            ispwdwarning2: true,
            isSame: true
        })
    },
    userinput(e) {
        console.log(e);

    },
    tologin() {
        wx.navigateTo({
            url: '../login/login',

        });
    },

    api(url, param) {
        wx.request({
            url: url,
            data: param,
            header: { 'content-type': 'application/json' },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
                console.log(result.data);
                if (result.data.code === "80003") {
                    wx.showToast({
                        title: '亲爱的小可爱，用户已存在！',
                        icon: 'none',
                        image: '',
                        duration: 1000,
                        mask: false,
                        success: (result) => {

                        },
                        fail: () => {},
                        complete: () => {}
                    });
                } else {
                    if (result.data.code !== "200") {
                        wx.showToast({
                            title: '小可爱，注册错误哦',
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
                            url: '../login/login',
                            success: (result) => {

                            },
                            fail: () => {},
                            complete: () => {}
                        });
                    }
                }

            },
            fail: () => {
                console.log(2);
            },
            complete: () => {}
        });
    },
    login_in() {


        if (!this.data.pwdvalue) {
            this.setData({
                ispwdwarning: false
            })
        }
        if (!this.data.uservalue) {
            this.setData({
                isuserwarning: false
            })
        }
        if (!this.data.pwdvalue2) {
            this.setData({
                ispwdwarning2: false
            })
        }

        if (this.data.uservalue && this.data.pwdvalue2 && this.data.pwdvalue && this.data.pwdvalue !== this.data.pwdvalue2) {
            this.setData({
                isSame: false
            })
        } else {
            if (this.data.pwdvalue && this.data.uservalue && this.data.pwdvalue2 && /^[a-zA-Z0-9]{6,16}$/.test(this.data.uservalue) === false) {
                this.animate('.user-warn', [{ left: '100%', opacity: 0, ease: 'ease-in' },
                    { left: '50%', opacity: 0.5, ease: 'ease-in' },
                    { left: '0', opacity: 1, ease: 'ease-in' },
                ], 200)
                this.animate('.user-warn', [{ left: '0', opacity: 1, ease: 'ease-in' },
                    { left: '0', opacity: 0.99, ease: 'ease-in' },
                    { left: '0', opacity: 0, ease: 'ease-in' },
                ], 2000)
            }
            if (this.data.pwdvalue && this.data.uservalue && this.data.pwdvalue2 && /^[a-zA-Z0-9]{6,16}$/.test(this.data.pwdvalue) === false) {
                this.animate('.pwd-warn', [{ left: '-100%', opacity: 0, ease: 'ease-in' },
                    { left: '-50%', opacity: 0.5, ease: 'ease-in' },
                    { left: '0', opacity: 1, ease: 'ease-in' },
                ], 200)
                this.animate('.pwd-warn', [{ left: '0', opacity: 1, ease: 'ease-in' },
                    { left: '0', opacity: 0.99, ease: 'ease-in' },
                    { left: '0', opacity: 0, ease: 'ease-in' },
                ], 2000)
            }
            if (/^[a-zA-Z0-9]{6,16}$/.test(this.data.uservalue) === true && /^[a-zA-Z0-9]{6,16}$/.test(this.data.pwdvalue) === true) {
                this.api('http://localhost:3001/users/register', {
                    uservalue: this.data.uservalue,
                    pwdvalue2: this.data.pwdvalue2
                })

            }


        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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