const helpers = require('./helpers')

module.exports = {
  entry: {
    app: helpers.root('src/main.ts'),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: helpers.root('dist'),
    clean: true,
  },
}
