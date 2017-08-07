const path = require('path');
const glob = require('glob').Glob;
let moduleExport = {};

const file = new glob('*', {
    cwd: path.resolve('./src/layout'),
    sync: true
}).found;


file.forEach(function(item, index){
    moduleExport[item] = path.resolve(`./src/layout/${ item }/${ item }.js`)
})

module.exports = moduleExport;