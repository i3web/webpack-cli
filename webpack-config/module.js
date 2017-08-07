const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    rules: [{
        test: /\.scss$/,
        use: process.env.NODE_ENV == 'production' ? ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader","sass-loader"] }) : ['style-loader','css-loader','sass-loader']
    },{
        test: /\.(png|jpg|gif)$/,
        use: [{
            loader: 'url-loader',
            query: {
                publicPath: '.',
                name: "./img/[name].[hash:5].[ext]",
                limit: 10000
            }
        }]
    },{
        test: /\.ejs$/,
        use: [{
            loader: 'underscore-template-loader'
        }]
    },{
        test:/\.js$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: {
                presets: ['env']
            }
        }]
    },{
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        use: ['file-loader?name=fonts/[name].[ext]']
    }]
}
