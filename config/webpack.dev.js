const helpers = require('./helpers')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig, {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    port: 3000,
    open: true,
    inline: true,
    hot: true,
    publicPath: '/',
    contentBase: helpers.root('dist'),
    historyApiFallback: {
      index: '/',
    },
  },
})
