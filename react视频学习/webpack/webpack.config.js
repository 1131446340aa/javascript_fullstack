const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//创建一个插件实例
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})
module.exports = {
    mode: 'production',
    plugins: [htmlPlugin],
    module: {
        rules: [{
            test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},
        ]
    }
    //在webpack4.x中默认打包的入口路径为src->index.js
}