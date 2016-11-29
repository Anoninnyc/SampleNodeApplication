var webpack = require('webpack');
var config = {
  context: __dirname + '/FrontEnd',
  entry: {
    app: './app.js'
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
}

module.exports = config;
