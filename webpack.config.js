const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/event_nite.jsx',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'env', "stage-2"]
        }
      }
    ]
  },
  devtool: 'source-maps'
};
