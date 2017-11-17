const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const dirPath = require('./base/dir-path');
const glob = require('glob').Glob;
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

let moduleExport = [];

//如果是生产模式，就使用extract-text-webpack-plugin
if (process.env.NODE_ENV == 'pro') {
    moduleExport.push(
        new ExtractTextPlugin("static/css/[name]-[contenthash:5].css")
    );
} else {

    //如果是开发模式，就使用热更新
    moduleExport.push(
        new webpack.HotModuleReplacementPlugin()
    )
}

//每次打包，先清除dist文件夹
moduleExport.push(
    new CleanWebpackPlugin(dirPath.dist, {
        root: dirPath.project
    })
)


//搜索pages文件夹下的文件名
const pageArr = new glob('*', {
    cwd: dirPath.pages,
    sync: true
}).found;

//生成index.html用于重定向
moduleExport.push(
    new htmlWebpackPlugin({
        template: './index.html',
        pages: pageArr,
        chunks: []
    })
)

//给每一个page生成一个htmlWebpackPlugin实例
pageArr.forEach((item, index) => {
    moduleExport.push(
        new htmlWebpackPlugin({
            filename: `${item}.html`,
            template: `${dirPath.pages}/${item}/html.js`,
            chunks: [`${item}`],
            minify: {
                caseSensitive: true,        //保留标签大小写，用于自定义标签
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                minifyJS: true,
                keepClosingSlash: true      //保留尾部的单斜杠
            }
        })
    )
});

moduleExport.push(
    new ProgressBarPlugin({
        width: 60,
        clear: false
    })
)

//压缩配置
/* minify: {
    caseSensitive: true,
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    removeComments: true,
    minifyJS: true
} */

//把jquery暴露为全局
/* moduleExport.push(
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
    })
) */


module.exports = moduleExport;