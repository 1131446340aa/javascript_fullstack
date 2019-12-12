function api(url, func, param) {

    let host = 'http://china-4s.com/'
    wx.request({
      url: host + url,
      data: param,
      success: func
    })
  }
   function a(params) {
     console.log(13124325436356);
     
   }
  module.exports={api,a}
