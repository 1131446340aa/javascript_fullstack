// app.js中
//app.js
App({
  onLaunch: function () {
    // let that = this
    // // 在这里用定时器模拟网络请求的过程
    // setTimeout(function(){
    //   that.globalData.nam = 'pxh'
    // },3000) 
  },
  // 这里这么写，是要在其他界面监听，而不是在app.js中监听，而且这个监听方法，需要一个回调方法。
  watch: function (method) {
    var obj = this.globalData;
    Object.defineProperty(obj, "singdetail", {
      configurable: true,
      enumerable: true,
      set: function (value) {
        this._name = value;
        console.log('是否会被执行2')
        method(value);
      },
      get: function () {
        // 可以在这里打印一些东西，然后在其他界面调用getApp().globalData.name的时候，这里就会执行。
        return this._name
      }
    })
  },
  globalData: {
    userInfo: null,
    _name: 'msr',
    playsongs: [],
    isplay: false,
    singdetail: {},
    id: 0,
    current: 0,
    endtimer: 0,
    starttimer: 0,
    progress: 0,
    duration: 0,
    playRules:1


  }
})

