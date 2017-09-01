const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
            test: /\.(gif|png|jpe?g|svg|webp)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        name: 'static/img/[name]-[hash:6].[ext]',
                        limit: 8192
                    }
                },
                {
                    loader: 'image-webpack-loader',
                    options: require('./base/image-loader')
                }
            ]
        },
        {
            test: /\.html$/,
            use: ['underscore-template-loader']
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
        }
    ]
}