const path = require('path');
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
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/css')
  },
  devtool: 'source-map',
  plugins: [extractCSSPlugin],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: { sourceMap: true, minimize: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [require('autoprefixer')]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: ['./node_modules']
              }
            }
          }
        ]
      }
    ]
  }
};
