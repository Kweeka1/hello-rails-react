const path    = require("path")
const webpack = require("webpack")
require('dotenv').config()

module.exports = {
  mode: process.env.RAILS_ENV || 'development',
  devtool: 'source-map',
  entry: {
    application: './app/javascript/application.js',
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    path: path.resolve(__dirname, 'app/assets/builds'),
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
