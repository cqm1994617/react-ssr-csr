const path = require('path')

const config = {
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/client/index.js')],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'static/js/[name].[contenthash].js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: [".js", ".json"]
  },
  optimization: {
    splitChunks: {}
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/assets/images/[name].[hash].[ext]'
            },
          },
        ],
      }
    ]
  }
}

module.exports = config