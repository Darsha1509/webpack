/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const autoprefixer = require('autoprefixer');

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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  overrideBrowserslist: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                }),
              ],
            },
          },
        ],
      },

      // Loading SASS/SCSS
      {
        test: /\.(s[ca]ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  overrideBrowserslist: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                }),
              ],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [miniCssPlugin, new CompressionPlugin()],
});
