const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        index: `${__dirname}/src/layout/index/index.js`
    },
    output: {
        filename: "[name]/[name].js",
        path: `${__dirname}/dist`
    },
    devServer: {
        contentBase: './dist/index',
        hot: true,
        port: 9000,
        compress: true
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader","sass-loader"]
            })
        },{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader?limit=8192&name=img/[name].[hash].[ext]',
            }]
        },{
            test: /\.ejs$/,
            use: [{
                loader: 'underscore-template-loader'
            }]
        }]
    },
    plugins: [
        new ExtractTextPlugin('[name]/[name].css'),
        new HtmlWebpackPlugin({
            title: 'index',
            filename: 'index/index.html',
            template: `${__dirname}/src/layout/index/index.ejs`
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}