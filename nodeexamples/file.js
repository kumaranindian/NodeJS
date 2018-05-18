var httpvar=require('http')
var filevar=require('fs')
var server= httpvar.createServer(fileServer).listen(8888)


function fileServer(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("I am working with file fs module")


    filevar.readFile('india.html',function(err,data){
        if(err){
            console.log("Error reading file: "+err)
        }else{
            res.write("<br>")
            res.write(data)

            // writing to the new file

            filevar.writeFile("filewrite.html",data,function(err){
                console.log(err)
            })
            res.end()
        }
       
       
    }) 
} 
