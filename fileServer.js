//Module inclusions
var fs = require("fs");
var http = require("http");
var path = require("path");

var listeningPort = 3000;
var validTypes = [
     ".html",
     ".css"
];

http.createServer(function(req, res){
     if(req.url === "/"){
          var indexPath = path.join(__dirname, "public", "index.html");
          var fileStream = fs.createReadStream(indexPath, "UTF-8");

          res.writeHead(200, {"Content-Type": "text/html"});

          fileStream.pipe(res);
     } /*else if () {
          //TODO: Later down the line, make a handler for supported file types
          var requestPath = path.join(__dirname, "public". req.url);
          res.writeHead
     }*/ else {
          res.writeHead(404, {"Content-Type": "text/plain"});
          res.end("404 File not fuck");
     }
}).listen(listeningPort);//testing


console.log(`File server running on port ${listeningPort}`);

//TODO: Later down the line, make a handler for supported file types;
//else if (validTypes.contains(req.url.substring(lastIndexOf("."))));
