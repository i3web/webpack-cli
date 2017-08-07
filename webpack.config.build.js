module.exports = {
    entry: require(`./webpack-config/entry.js`),
    output: require('./webpack-config/output.js'),
    module: require('./webpack-config/module.js'),
    plugins: require('./webpack-config/build/plugins.build.js')
}