var httpvariable =require('http')
var myserver=httpvariable.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write("hello from node server")
    response.end();
})
myserver.listen(8888)