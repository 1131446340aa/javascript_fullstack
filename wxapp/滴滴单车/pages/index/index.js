// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:116.416405,//经度
    latitude:39.887897,//维度
    scale:18,
    markers:[],

  },
  toCreateMakers(longitude,latitude){
    let markers=[
      {
        "id":1,
        "iconPath":"/images/map-bicycle.png",
        "latitude":latitude,
        "longitude":longitude,
        "width":52.5,
        "height":30,
        "callout":{}

      }
    ]
    this.setData({
      markers

    })

  }
,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
wx.showLoading({
  //微信赋予小程序可以调用的API
  title: '获取坐标中',
 
});
wx.getLocation({
  type: 'gcj02',
  altitude: false,
  success: (res)=>{
    let {latitude,longitude}=res
    this.toCreateMakers(longitude,latitude)
    this.setData({
      longitude,latitude
    },()=>{wx.hideLoading();
      })
  },
  fail: ()=>{},
  complete: ()=>{}
});
  

  },
  toScan(){
    return wx.scanCode({

      success: (result) => {
        wx.showModal({
          title: 'scan',
          content:JSON.stringify(result)
       
         
        })
          
        
      }
    
    });
      
  },
  toVisit(e){},
  toUser(){},
  toMsg(){},
  toReset(){
    this.mapCtx.moveToLocation();
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //地图上下文环境
    this.mapCtx= wx.createMapContext('myMap');
      

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})