const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  return {
    context: path.resolve(__dirname, 'source'),

    entry: {
      app: ['.'],
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]-[hash:8].js',
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader',
          }),
        },
      ],
    },

    devtool: 'source-map',

    plugins: [
      new HtmlWebpackPlugin()
    ],
  };
};
