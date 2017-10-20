const path = require('path');
const dirPath = require('./base/dir-path');
const os = require('os');
const host = os.networkInterfaces()["本地连接"][1].address;

module.exports = {
    proxy: { // proxy URLs to backend development server
        '/api': 'http://localhost:3000'
    },
    open: true,
    port: 9000,
    contentBase: dirPath.dist, // boolean | string | array, static file location
    compress: true, // enable gzip compression
    hot: true,
    host: host
}