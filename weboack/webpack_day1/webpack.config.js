const path = require('path');
module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        publicPath: ""//公共路径设置
    },
    module: {
        //模块配置
        rules: [
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',//转base64,file-loader加强版
                        options:{
                            name:"[name]_[hash].[ext]",//名字
                            outputPath:"images/",
                            limit:2048
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}