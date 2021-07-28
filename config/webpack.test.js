const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
})
