var ls = require('./filtered_ls_module')

var filepath  = process.argv[2];
var extension = process.argv[3];

var printer = function(err, files) {
    files.forEach(function(file) {
        console.log(file)
    })
}

ls(filepath, extension, printer)
