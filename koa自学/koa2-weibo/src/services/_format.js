const {DEFAULT_PICTURE} = require ('../conf/constant')

function _formatPicture(obj) {
    if (!obj.picture) {
        obj.picture = DEFAULT_PICTURE
    }
    return obj
}
function _formatUser(list){
    if(!list) return
    if(list instanceof Array) {
        return list.map(_formatPicture)
    }
    
    return _formatPicture(list)
}

module.exports = { _formatUser }