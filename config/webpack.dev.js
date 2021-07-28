const helpers = require('./helpers')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    library: 'ac_[name]',
    libraryTarget: 'var',
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
