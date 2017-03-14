const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        }
      ]
    },

    devtool: 'source-map',

    plugins: [
      new HtmlWebpackPlugin()
    ],
  };
};
