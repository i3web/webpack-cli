const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dirPath = require('./base/dir-path');

module.exports = {
    rules: [
        {
            test: /\.scss$/,
            use: process.env.NODE_ENV == 'pro'
            ? ExtractTextPlugin.extract({ fallback: "style-loader", use: [
                  "css-loader?importLoaders=2&&sourceMap",
                  "postcss-loader?sourceMap",
                  'resolve-url-loader?sourceMap',
                  "sass-loader?sourceMap"
                ]
              })
            : ['style-loader?sourceMap', 'css-loader?importLoaders=2&&sourceMap', "postcss-loader?sourceMap", 'resolve-url-loader?sourceMap', 'sass-loader?sourceMap']
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'underscore-template-loader'
                }
            ]
        },
        {
            test: /\.htm$/,
            use: [
                {
                    loader: 'raw-loader'
                }
            ]
        },
        {
            test: /\.(gif|png|jpe?g|svg|webp)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        name: 'static/img/[name]-[hash:6].[ext]',
                        limit: 1024
                    }
                }
            ]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                      presets: ['env']
                    }
                }
            ]
        },
        {
            test: /\.(ttf|eot|svg|woff)$/,
            loader: "file-loader",
            options: {
                name: 'static/font/[name]-[hash:5].[ext]'
            }
        }
    ]
}