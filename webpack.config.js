const path = require('path');

module.exports = {
    context: __dirname,
    entry: require('./webpack-config/entry'),
    output: require('./webpack-config/output'),
    module: require('./webpack-config/module'),
    plugins: require('./webpack-config/plugins'),
    devtool: "source-map",
    devServer: require('./webpack-config/devServer')
}