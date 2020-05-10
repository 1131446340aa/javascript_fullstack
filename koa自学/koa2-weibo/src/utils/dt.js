/**
 * @description 时间相关的工具函数
 * @author 双越老师
 */

const { format } = require('date-fns')

/**
 * 格式化时间，如 09.05 23:02
 * @param {string} str 时间字符串
 */
function timeFormat(str) {
    return format(new Date(str), 'MM.dd HH:mm')
}

module.exports = {
    timeFormat
}
