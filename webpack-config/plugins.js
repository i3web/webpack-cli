const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const dirPath = require('./base/dir-path');
const glob = require('glob').Glob;
const webpack = require('webpack');

let moduleExport = [];

//如果是生产模式，就使用extract-text-webpack-plugin
if (process.env.NODE_ENV == 'pro') {
    moduleExport.push(
        new ExtractTextPlugin("static/css/[name].css")
    );
} else {

    //如果是开发模式，就使用热更新
    moduleExport.push(
        new webpack.HotModuleReplacementPlugin()
    )
}


//生成index.html用于重定向
moduleExport.push(
    new htmlWebpackPlugin({
        template: './index.html',
        chunks: []
    })
)

//搜索pages文件夹下的文件名
const pageArr = new glob('*', {
    cwd: dirPath.pages,
    sync: true
}).found;

//给每一个page生成一个htmlWebpackPlugin实例
pageArr.forEach((item, index) => {
    moduleExport.push(
        new htmlWebpackPlugin({
            filename: `${item}.html`,
            template: `${dirPath.pages}/${item}/${item}.html`,
            chunks: [`${item}`]
        })
    )
});

// console.log(moduleExport);
module.exports = moduleExport;