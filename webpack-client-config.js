const path = require('path')
const rules = require('./webpack-rules')

module.exports = {
  entry: {
    index: path.join(__dirname, 'src', 'client.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public')
  },
  module: { rules },
  devtool: 'source-map'
}
