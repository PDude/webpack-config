let mode = 'development'
let target = 'web'

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

process.env.NODE_ENV === 'production' &&
  (mode = 'production') &&
  (target = 'browserslist')

module.exports = {
  mode,
  target,

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [new MiniCssExtractPlugin()],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  }
}
