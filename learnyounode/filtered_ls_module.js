var fs = require('fs')

var ls = function(filepath, extension, callback) {
    fs.readdir(filepath, function(err, data) {
        if(err) { return callback(err) }

        var extension_filter = function(value) {
            return value.endsWith('.' + extension);
        }

        filtered_files = data.filter(extension_filter)
        callback(null, filtered_files)
    })
}

module.exports = ls;



