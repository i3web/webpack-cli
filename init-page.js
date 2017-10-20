const fs = require('fs');
const path = require('path')

createFile();
/* fs.watch('./src/pages', (eventType, filename) => {
    console.log('eventType：' + eventType + ';filename: ' + filename);
    createFile();
}) */

function createFile() {
    let pageArr = fs.readdirSync('./src/pages');
    
    pageArr.forEach((item, index) => {
        let isExist = Boolean(fs.readdirSync(`./src/pages/${item}`)[0]);
        if(!isExist) {
            fs.writeFileSync(`./src/pages/${item}/html.js`, `let html = require('./${item}.html');\nlet htmlStr = html();\nmodule.exports = htmlStr;`);
            fs.writeFileSync(`./src/pages/${item}/${item}.js`, '');
            fs.writeFileSync(`./src/pages/${item}/${item}.html`, '');
            fs.writeFileSync(`./src/pages/${item}/${item}.scss`, '');
        }
    })
}