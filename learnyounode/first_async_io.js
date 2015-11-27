var fs = require('fs')

if(process.argv.length < 3) { process.exit(); }

fs.readFile(process.argv[2], 'utf8', function(err, file) {
    var length = file.toString().match(/\n/g).length
    console.log(length)
})

