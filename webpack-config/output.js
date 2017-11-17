const dirPath = require('./base/dir-path');
const path = require('path');

//output的一些设置
module.exports = {
    filename: process.env.NODE_ENV == 'pro'
              ? 'static/js/[name]-[chunkhash:5].js'
              : 'static/js/[name]-[hash:5].js',
    path: dirPath.dist,
    publicPath: process.env.NODE_ENV == 'pro' ? 'http://www.kenxuewang.com/' : ''
}