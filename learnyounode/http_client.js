http = require('http')

var url = process.argv[2];
var response = function(res) {
    res.setEncoding('utf8')
    res.on('data', console.log)
    res.on('error', console.error)
}

http.get(url, response)

