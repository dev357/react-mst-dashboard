const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePath = __dirname;
const isDev = process.env.NODE_ENV !== 'production';
console.log('isDev:', isDev);

const config = {
  devtool: isDev ? 'cheap-module-eval-source-map' : 'none',
  mode: isDev ? 'development' : 'production',
  context: path.join(basePath, 'src'),
  entry: { app: './index.jsx' },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      'src', // so we can do import 'components/Link' instead of '../../../components/Link'
      'node_modules',
    ],
  },

  output: {
    path: path.join(basePath, 'build'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve('src'),
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env',
              {
                modules: false,
                targets: {
                  browsers: [
                    'last 2 chrome versions',
                    'last 2 firefox versions',
                    'last 2 edge versions',
                  ],
                },
              },
            ],
            'stage-0',
            'react',
          ],
          plugins: ['transform-decorators-legacy'],
        },
      },
    ],
  },

  devServer: {
    port: 3000,
    host: '0.0.0.0',
    overlay: true,
    hot: true,
    // hotOnly: true,
    historyApiFallback: true,
    useLocalIp: true,
    allowedHosts: ['risto.lakrito.local'],
    stats: {
      modules: false,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
