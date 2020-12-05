const path = require('path')
const rules = require('./webpack-rules')

module.exports = {
  entry: {
    server: path.join(__dirname, 'src', 'server.js')
  },
  output: {
    filename: '[name].js',
    path: __dirname
  },
  target: 'node',
  module: { rules },
  devtool: 'source-map'
}
