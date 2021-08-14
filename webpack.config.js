let mode = 'development'
const path = require('path')

process.env.NODE_ENV === 'production' && (mode = 'production')

module.exports = {
  mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  }
}
