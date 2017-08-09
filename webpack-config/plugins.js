const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob').Glob;
const CleanWebpackPlugin = require('clean-webpack-plugin');
let moduleExport = [];

moduleExport = [
    new webpack.HotModuleReplacementPlugin()        //热更新
];

const page = new glob('*',{           //找到layout文件夹下所有的js文件
    cwd: path.resolve('./src/layout'),
    sync: true
}).found

page.forEach(function(item, index){             //根据golb查询到的文件，动态生成html，
    let htmlPlugin = new HtmlWebpackPlugin({
        title: `${item}`,
        filename: `${item}/index.html`,
        template: path.resolve(`./src/layout/${item}/${item}.ejs`),       //注意每个layout文件夹下的ejs模板文件名只能为index.ejs
        chunks: [`${item}`]                                             //只添加相应的chunk
    })
    moduleExport.push( htmlPlugin );
});

moduleExport.push(new webpack.DefinePlugin({            //获取到NODE_ENV的值，并暴露为全局变量
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }))

moduleExport.push( new CleanWebpackPlugin(['dist'], {       //每次打包前清理掉dist目录
      root: path.resolve( './' ),
      verbose: true,
      dry: false
}) )

if( process.env.NODE_ENV === 'production' ){                                //如果是生产环境，就分离出css
    moduleExport.push( new ExtractTextPlugin('[name]/[name].css') );
}

module.exports = moduleExport;