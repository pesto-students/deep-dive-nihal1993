const http = require('http');
var url = require('url');
var fs = require('fs');


let users = [{ "id": 1, "name": "Nihal" }];
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  fs.readFile(filename, function (err, data) {
    if (err) {

      if (req.method.toLowerCase() === 'get') {
        let user = users.find(user => user.id == filename.split('/')[2]);
        if (user === undefined) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          return res.end("404 Not Found");
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(user.name);
          return res.end();
        }
      }

      if (req.method.toLowerCase() === 'post' || req.method.toLowerCase() === 'put') {
        if (q.pathname.split('/')[1] == 'add') {
          var qs = require('querystring');
                  var body = '';
                  req.on('data', function (data) {
                      body += data;
                      if (body.length > 1e6)
                          request.connection.destroy();
                  });
          
                  req.on('end', function () {
                      var post = qs.parse(body);
                      console.log(post.Name);
                      return res.end(post.Name);
                      // use post['blah'], etc.
                  });
        }
      }
    }else{
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    }
   
  });
}).listen(9999);

console.log('Listening on port 9999');