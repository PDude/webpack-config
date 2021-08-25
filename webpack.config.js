const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = 'development'
let target = 'web'

process.env.NODE_ENV === 'production' &&
  (mode = 'production') &&
  (target = 'browserslist')

module.exports = {
  mode,
  target,

  output: {
    assetModuleFilename: 'images/[hash][ext][query]'
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(svg|gif)$/i,
        type: 'asset/inline',
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024 // 30kb
          }
        }
      },
      {
        test: /\.webp$/i,
        type: 'asset'
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
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
