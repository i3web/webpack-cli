module.exports = {
    entry: require(`./webpack-config/entry.js`),
    output: require('./webpack-config/output.js'),
    devServer: require('./webpack-config/devServer.js'),
    module: require('./webpack-config/module.js'),
    plugins: require('./webpack-config/plugins.js')
}