const path = require('path');
const dirPath = require('./base/dir-path');

module.exports = {
    proxy: { // proxy URLs to backend development server
        '/api': 'http://localhost:3000'
    },
    port: 9000,
    contentBase: dirPath.dist, // boolean | string | array, static file location
    compress: true, // enable gzip compression
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
}