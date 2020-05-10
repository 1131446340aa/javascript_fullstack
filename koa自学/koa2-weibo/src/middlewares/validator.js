const {  ErrorModel } = require('../modules/ResModule')
const {  jsonSchemaFileInfo } = require('../modules/ErrorInfo')
function genValidator(userValidate) {
    return async (ctx, next) => {
        const data = ctx.request.body
        const error = userValidate(data)
        if (error) {
            ctx.body= new ErrorModel(jsonSchemaFileInfo)
            return 
        }
        await next()
    }

}
module.exports = {
    genValidator
}