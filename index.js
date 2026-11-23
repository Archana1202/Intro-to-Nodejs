console.log("Hello World");
var http = require('http');
var url = require('url');
var fs = require('fs');

const server = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    console.log(q.pathname);
    var filename = "." + q.pathname;
    if (filename == './')
    {
        filename = './indexa';
    }
    filename = filename + '.html';
    fs.readFile(filename, function(err,data) {
    if (err){
      res.writeHead(404, { 'Content-Type': 'text/html' });  
      return res.end("404 not found");
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //var q = url.parse(req.url, true).query;
    //var dates = q.year;
    //res.write(dates);
    res.write(data);
    console.log("... incoming" + req.url);
    return res.end();
    })
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

