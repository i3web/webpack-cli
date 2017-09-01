const dirPath = require('./base/dir-path');
const path = require('path');

//output的一些设置
module.exports = {
    filename: 'static/js/[name].js',
    path: dirPath.dist
}