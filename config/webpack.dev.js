const helpers = require('./helpers')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(commonConfig, {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',
  entry: ['react-hot-loader/patch', 'webpack/hot/only-dev-server', helpers.root('src/App.tsx')],
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
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  ],
})
