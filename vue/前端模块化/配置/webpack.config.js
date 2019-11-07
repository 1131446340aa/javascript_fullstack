const path = require('path')
module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "tets.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 60000000
            }
          }
        ]
      },  {
        test: /\.vue$/,
        use: ['vue-loader']
      }

    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }

}