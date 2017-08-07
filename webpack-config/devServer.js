const path = require('path');

module.exports = {
    contentBase: path.resolve('./dist/index'),
    port: 9000,
    hot: true,
    compress: true,
    open: true
}