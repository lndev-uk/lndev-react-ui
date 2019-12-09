const path = require('path');
const rules = require('./webpack.rules.scss');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const extractCSSPlugin = new MiniCssExtractPlugin({
  filename: 'styles.css',
  chunkFilename: '[id].css',
  ignoreOrder: false
});

module.exports = {
  mode: 'production',
  entry: './src/scss/index.scss',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist/css')
  },
  devtool: 'source-map',
  plugins: [extractCSSPlugin],
  module: {
    rules: rules
  }
};
