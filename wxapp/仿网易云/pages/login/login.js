// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isactiveUser: false,
        isactivePwd: false,
        ispwdwarning: true,
        isuserwarning: true,
        uservalue: "",
        pwdvalue: ""
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
        })
    },
    userinput(e) {
        console.log(e);

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
        if (this.data.pwdvalue && this.data.uservalue) {
            wx.request({
                url: 'http://localhost:3001/users/login',
                data: {
                    uservalue: this.data.uservalue,
                    pwdvalue: this.data.pwdvalue
                },
                header: { 'content-type': 'application/json' },
                method: 'POST',
                dataType: 'json',
                responseType: 'text',
                success: (res) => {
                    console.log(res);
                    if (res.data.code === 200) {
                        wx.navigateTo({
                            url: '../index/index',
                            success: (result) => {

                            },
                            fail: () => {},
                            complete: () => {}
                        });

                    }
                    if (res.data.code === "404") {
                        wx.showToast({
                            title: '密码或用户名错误',
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
                fail: () => {},
                complete: () => {}
            });
        }
    },
    toregister() {
        wx.navigateTo({
            url: '../register/register',
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