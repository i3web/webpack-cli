//提供部分文件的绝对路径，并且配置webpack的alias，使文件可以直接被require
const path = require('path');

let moduleExport = {
    src: path.resolve('./src'),
    dist: path.resolve('./dist'),
    webpackConfig: path.resolve('./webpack-config'),
    pages: path.resolve('./src/pages'),
    publicSource: path.resolve('./src/public-resource'),
    component: path.resolve('./src/public-resource/component'),
    layout: path.resolve('./src/public-resource/layout')
}

module.exports = moduleExport;