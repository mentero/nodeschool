var fs = require('fs')

if(process.argv.length < 3) { process.exit(); }

var file = fs.readFileSync(process.argv[2], 'utf8')
var length = file.match(/\n/g).length

console.log(length)

