var http = require('http');
var fs = require('fs');
var static = require('node-static');
var file = new static.Server('./');

http.createServer(function(req, res) {
  req.on('end', function() {
    file.serve(req, res, function(e) {
      if(e && (e.status == 404)) {
        fs.createReadStream('index.html').pipe(res);
      }
    });
  }).resume();
}).listen(8080);
