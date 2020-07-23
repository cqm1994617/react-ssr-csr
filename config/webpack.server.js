const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const pathConfig = require('../path.config')

module.exports = merge(baseConfig, {
  target: 'node',
  mode: 'production',
  entry: path.resolve(__dirname, '../src/server/app.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  externals: [
    nodeExternals({
      allowlist: /\.(css|less|sass|scss)$/
    })
  ],
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      use: [
        'isomorphic-style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        'postcss-loader'
      ]
    }, {
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: pathConfig.publicPath,
            name: 'static/file/images/[name].[hash].[ext]'
          },
        },
      ],
    }]
  }
})
