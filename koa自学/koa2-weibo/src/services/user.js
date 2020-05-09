const { User } = require('../mysql/module/index')

const { _formatUser } = require('./_format')
async function getUserInfo(userName, password) {
    const whereOPt = {
        userName
    }
    if (password) {
        whereOPt.password = password
    }
    const result = await User.findOne({
        attribute: ['userName', 'nickName', 'id', 'picture', 'city'],
        where: whereOPt
    })
    if (!result) {
        return result
    }
    return _formatUser(result.dataValues)
}

async function createUser({ userName, password, gender = 3, nickName }) {
    const result = await User.create({
        userName, password, gender, nickName: nickName ? nickName : userName
    })
    return result.dataValues
}

module.exports = {
    getUserInfo, createUser
}