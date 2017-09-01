const dirPath = require('./base/dir-path');
const glob = require('glob').Glob;

//搜索pages文件夹下的文件名
const pageArr = new glob('*', {
    cwd: dirPath.pages,
    sync: true
}).found;

let moduleExport = {};

//设置入口，每一个入口对应一个数组：['app.js', 'app.scss']，这样就把js和css都打包了
pageArr.forEach(function(item, index) {
    moduleExport[item] = [`${dirPath.pages}/${item}/${item}.js`, `${dirPath.pages}/${item}/${item}.scss`];
});

module.exports = moduleExport;