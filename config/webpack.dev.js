const helpers = require('./helpers')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const webpack = require('webpack')

process.env.NODE_ENV = 'development'

module.exports = merge(commonConfig, {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',
  entry: ['react-hot-loader/patch', helpers.root('src/App.tsx')],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
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
