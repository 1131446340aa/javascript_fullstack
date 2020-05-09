const { getUserInfo, createUser } = require('../services/user')
const { repeatUserName, registerUserNameExistInfo, registerFailInfo, loginFailInfo } = require('../modules/ErrorInfo')
const { SuccessfulModel, ErrorModel } = require('../modules/ResModule.js')
const doCrypto = require('../utils/cryp')
async function isExist(userName) {
    const userInfo = await getUserInfo(userName)

    if (userInfo) {
        return new SuccessfulModel(userInfo)
    } else {
        return new ErrorModel(repeatUserName)
    }
}

async function register({ userName, password, gender }) {
    const userInfo = await getUserInfo(userName)
    if (userInfo) {
        return new ErrorModel(registerUserNameExistInfo)
    } else {
        try {
            await createUser({ userName, password: doCrypto(password), gender })
            return new SuccessfulModel()
        }
        catch (e) {
            console.error(e.message, e.stack)
            return new ErrorModel(registerFailInfo)
        }
    }
}

async function login(ctx, userName, password) {

    const userInfo = await getUserInfo(userName, doCrypto(password))
    if (!userInfo) {
        return new ErrorModel(loginFailInfo)
    }
    if (!ctx.session.userInfo) {
        ctx.session.userInfo = userInfo
    }

    return new SuccessfulModel()
    
}

module.exports = { isExist, register, login }