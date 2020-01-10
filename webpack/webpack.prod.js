/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const common = require('./webpack.config');

const miniCssPlugin = new MiniCssExtractPlugin({
  filename: 'main-[hash:8].css',
});

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      // Loading CSS
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      // Loading SASS/SCSS
      {
        test: /\.(s[ca]ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [miniCssPlugin, new CompressionPlugin()],
});
