var http=require('http')
var url=require('url')
var server=http.createServer(queryParamServer).listen(8888)

function queryParamServer(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("I am working with url qyuery parameter")

    var myQuery= url.parse(req.url,true).query
    var queryText1=myQuery.name1
    console.log(queryText1)
    console.log(myQuery.host)
    console.log(myQuery.pathname)
    
    var queryText2=myQuery.loc 
    res.write("<br>")
    res.write(queryText1 + "   "+queryText2)
    res.end();
}