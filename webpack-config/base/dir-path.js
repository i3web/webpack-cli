//提供部分文件的绝对路径，并且配置webpack的alias，使文件可以直接被require
const path = require('path');

let moduleExport = {
    project: path.resolve(),
    src: path.resolve('./src'),
    dist: path.resolve('./dist'),
    webpackConfig: path.resolve('./webpack-config'),
    pages: path.resolve('./src/pages'),
    publicSource: path.resolve('./src'),
    component: path.resolve('./src/component'),
    layout: path.resolve('./src/layout')
}

module.exports = moduleExport;