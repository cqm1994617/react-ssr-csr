const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(baseConfig, {
  target: 'node',
  mode: 'production',
  entry: path.resolve(__dirname, '../src/server/app.js'),
  output: {
    path: path.resolve(__dirname, '../dist-server/server'),
    filename: 'bundle.js'
  },
  externals: [nodeExternals()],
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
    }]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})
