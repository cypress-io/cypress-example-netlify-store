const fs = require('fs')
const pkg = require('./package.json')
delete pkg.dependencies
const txt = JSON.stringify(pkg, null, 2)
fs.writeFileSync('./package.json', txt + '\n', 'utf8')
console.log('updated package.json')
