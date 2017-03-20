'use strict';

const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  context: `${__dirname}/app`,
  entry: './entry.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/app/build`
  },
  plugins: [
    new HTMLPlugin({
      template: `${__dirname}/app.index.html`
    })
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
};
