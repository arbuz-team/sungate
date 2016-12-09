"use strict";

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './static/_sandbox.js',
  output: { 
    path: __dirname, 
    filename: './static/js/bundle.js'
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract(
          "style",
          "css?-url!sass" // &minimize
        )
      }

    ]
  },
  plugins: [
    new ExtractTextPlugin("./static/style/app.css")
  ]
};