/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const FlowWebpackPlugin = require('flow-webpack-plugin');

const common = require('./webpack.config');

const flowPlugin = new FlowWebpackPlugin({
  flowPath: require.main.require('flow-bin'),
});

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'eslint-loader',
      },

      // Loading CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      // Loading SASS/SCSS
      {
        test: /\.(s[ca]ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [flowPlugin],
  devServer: {
    open: true,
    historyApiFallback: true,
  },
});
