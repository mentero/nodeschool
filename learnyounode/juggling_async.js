var http = require('http')

var call_http(url, callback) {
    var response = function(res) {
        var raw_data = []

        res.setEncoding('utf8')
        res.on('data', function(data) { raw_data.push(data); })
        res.on('error', console.error)
        res.on('end', function() { callback(raw_data.join('')); })
    }

    http.get(url, response)
}
