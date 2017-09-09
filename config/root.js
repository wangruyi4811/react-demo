const currentDir = __dirname
const fs = require('fs')
const path = require('path')
console.log(currentDir.replace(path.basename(currentDir),''))

