var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:5001',
    'webpack/hot/only-dev-server',
    './Dom/index'
  ],
  output: {
    path: path.join(__dirname, 'DomDist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['react-hot-loader/babel', 'babel-plugin-transform-es2015-modules-commonjs']
      },
      include: [
        path.join(__dirname, 'Shared'),
        path.join(__dirname, 'Dom')
      ]
    }]
  }
};
