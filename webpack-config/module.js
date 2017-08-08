const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    rules: [{
        test: /\.scss$/,
        use: process.env.NODE_ENV == 'production' ? ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader?importLoaders=2","postcss-loader","sass-loader"] }) : ['style-loader','css-loader?importLoaders=2',"postcss-loader",'sass-loader']
    },{
        test: /\.(png|jpg|gif)$/,
        use: [{
            loader: 'url-loader',
            query: {
                publicPath: '.',
                name: "./img/[name].[hash:8].[ext]",
                limit: 10000
            }
        },{
            loader: 'image-webpack-loader'
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
