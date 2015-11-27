var fs = require('fs')

if(process.argv.length < 4) { process.exit(); }

var filename  = process.argv[2];
var extension = process.argv[3];

var printer = function(files) {
    files.forEach(function(file) {
        console.log(file)
    })
}

var extension_filter = function(value) {
    return value.endsWith('.' + extension);
}

fs.readdir(filename, function(err, data) {
    filtered_files = data.filter(extension_filter)
    printer(filtered_files)
})



