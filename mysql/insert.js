var mysqldb=require('mysql')
var connection= mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'fromnode'
})

connection.connect(function(err){
    if(err){
        throw err
    }else{
        console.log("SUCCESSFULLY CONNECT TO DATABASE")
        
       
        var sql="insert into friends(name,id,location) values('karthi',2,'chennai')"
        
        connection.query(sql,function(err,suc){
            if(err){
                throw err
            }else{
                console.log("DATA INSERTED SUCCESSFULLY")
            }
        })
    }
})