const http = require("http")
http.createServer(function(req,res){
    req.write("Hello men")
    res.end();
}).listen(8080)