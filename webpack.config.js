// @ts-nocheck
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

let mode = 'development'
let target = 'web'

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({ template: './src/index.html' })
]

process.env.NODE_ENV === 'production'
  ? (mode = 'production') && (target = 'browserslist')
  : plugins.push(new ReactRefreshWebpackPlugin())

module.exports = {
  mode,
  target,

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
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

  plugins,

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    hot: true
  }
}
