const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: './public/index.ejs',
});

const flowPlugin = new FlowWebpackPlugin({
  flowPath: require.main.require('flow-bin'),
});

module.exports = (env = {}) => {
  const { mode = 'development' } = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
  ];

  const getPlugins = () => {
    const plugins = [htmlPlugin];

    if (isDev) {
      plugins.push(flowPlugin);
    }

    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: 'main-[hash:8].css',
        }),
      );
    }

    return plugins;
  };

  const getJSLoaders = () => {
    const loaders = ['babel-loader'];

    if (isDev) {
      loaders.push('eslint-loader');
    }

    return loaders;
  };

  return {
    mode: isProd ? 'production' : isDev && 'development',

    entry: './src/index',

    output: {
      path: path.join(__dirname, '/dist'),
      filename: isProd ? 'main-[hash:8].js' : undefined,
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: getJSLoaders(),
        },

        // Loading CSS
        {
          test: /\.css$/,
          use: getStyleLoaders(),
        },

        // Loading SASS/SCSS
        {
          test: /\.(s[ca]ss)$/,
          use: [...getStyleLoaders(), 'sass-loader'],
        },

        // Loading images
        {
          test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name].[ext]',
              },
            },
          ],
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.json', '.jsx', '.css'],
    },

    plugins: getPlugins(),

    devServer: {
      open: true,
      historyApiFallback: true,
    },
  };
};
