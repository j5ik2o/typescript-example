const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const helpers = require('./helpers')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        enabled: true,
        configFile: helpers.root('tsconfig.json'),
      },
    }),
  ],
})
