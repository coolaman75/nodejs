var http = require('http');
var map = require('C:\\Users\\Amaan\\AppData\\Roaming\\npm\\node_modules\\through2-map');
var server = http.createServer(function(req,res){
  if(req.method!== 'POST')
  return res.end('send me a POST\n');
  req.pipe(map(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(res);
});
server.listen(process.argv[2]);
