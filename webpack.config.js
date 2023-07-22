const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist/',
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
