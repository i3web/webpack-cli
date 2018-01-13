const path = require("path");
const dirPath = require("./base/dir-path");
const os = require("os");
const host = os.networkInterfaces()["WLAN 2"][1].address;

module.exports = {
    proxy: {
        // proxy URLs to backend development server
        "/api": "http://localhost:3000"
    },
    open: true,
    port: 9000,
    contentBase: dirPath.dist, // boolean | string | array, static file location
    compress: true, // enable gzip compression
    hot: true,
    host: host,
    proxy: {
        "**": {
            target: "http://www.xxx.com",
            secure: false,
            changeOrigin: true,
            pathRewrite: { "^/api": "" }
        }
    }
};
