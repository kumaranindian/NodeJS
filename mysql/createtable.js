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
        
        var sql="create table friends (name varchar(32),id int(8), location varchar(200))"

        connection.query(sql,function(err,suc){
            if(err){
                throw err
            }else{
                console.log("TABLE CREATED SUCCESSFULLY")
            }
        })

     
        }
})