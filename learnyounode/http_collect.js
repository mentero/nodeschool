http = require('http')

var url = process.argv[2];
var response = function(res) {
    var raw_data = []

    res.setEncoding('utf8')
    res.on('data', function(data) { raw_data.push(data); })
    res.on('error', console.error)
    res.on('end', function() {
        result_data = raw_data.join('');

        console.log(result_data.length);
        console.log(result_data);
    })
}

http.get(url, response)

