//Module inclusions
var fs = require("fs");
var http = require("http");
var path = require("path");

var listeningPort = 3000;
var validTypes = [
     ".html",
     ".css",
     ".png"
];
var fileStream;
//var indexPath;

http.createServer(function(req, res){
     if(req.url === "/"){
          var indexPath = path.join(__dirname, "public", "index.html");
          fileStream = fs.createReadStream(indexPath, "UTF-8");
          res.writeHead(200, {"Content-Type": "text/html"});
          fileStream.pipe(res);
     } else if (validTypes.includes(req.url.substring(req.url.lastIndexOf(".")))){
          //TODO: Later down the line, make a handler for supported file types
               //Completed on 6/6/18
          var requestPath = path.join(__dirname, "public", req.url);

          switch ((req.url.substring(req.url.lastIndexOf(".")))) {
               case ".html":
                    fileStream = fs.createReadStream(requestPath, "UTF-8");
                    res.writeHead(200, {"Content-Type": "text/html"});
                    fileStream.pipe(res);
                    break;
               case ".css":
                    fileStream = fs.createReadStream(requestPath, "UTF-8");
                    res.writeHead(200, {"Content-Type": "text/css"});
                    fileStream.pipe(res);
                    break;
               case ".png":
                    fileStream = fs.createReadStream(requestPath);
                    res.writeHead(200, {"Content-Type": "image/png"});
                    fileStream.pipe(res);
                    break;
               default:
                    break;
          }
     } else {
          res.writeHead(404, {"Content-Type": "text/plain"});
          res.end("404 File not fuck");
     }
}).listen(listeningPort);

console.log(`File server running on port ${listeningPort}`);

//TODO: Later down the line, make a handler for supported file types;
//else if (validTypes.contains(req.url.substring(lastIndexOf("."))));

//var fileStream = fs.createReadStream(indexPath, "UTF-8");
