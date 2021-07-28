const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const helpers = require('./helpers')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            configFile: helpers.root('tsconfig.jest.json'),
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
})
