const helpers = require('./helpers')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: helpers.root('dist'),
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    chunkFilename: '[id].[chunkhash].chunk.js',
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        enabled: true,
        configFile: helpers.root('tsconfig.release.json'),
      },
    }),
  ],
})
