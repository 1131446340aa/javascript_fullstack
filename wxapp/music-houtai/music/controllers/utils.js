let getNowFormatData = function () {
    var date = new Date()
    var year = date.getFullYear()
    let month = date.getMonth() + 1
    let strDate = date.getDate()
    if (month >= 1 && month <= 9) {
        month = '0' + month
    }
    if (strDate >= 1 && strDate <= 9) {
        strDate = '0' + strDate
    }
    var currentdate = year + '年' + month + '月' + strDate + '日'
    return currentdate
}
module.exports = { getNowFormatData }