const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index: `${__dirname}/src/layout/index/index.js`
    },
    output: {
        filename: "[name]/[name].js",
        path: `${__dirname}/dist`
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader']
        },{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader?limit=8192&name=img/[name].[ext]',
            }]
        },{
            test: /\.ejs$/,
            use: [{
                loader: 'underscore-template-loader',
                query: {
                    
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'index',
            filename: 'index.html',
            template: `${__dirname}/src/layout/index/layout.js`
        })
    ]
}