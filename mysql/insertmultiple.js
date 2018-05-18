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
        
       
        var sql="insert into friends(name,id,location) values ?"
        var records=[
            ['abc',3,'kkl'],
            ['def',4,'kkl'],
            ['ghi',5,'kkl']
        ]
        
        connection.query(sql,[records],function(err,suc){
            if(err){
                throw err
            }else{
                console.log("MULTIPLE DATA INSERTED SUCCESSFULLY")
            }
        })
    }
})