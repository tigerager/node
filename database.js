const { createPool } = require('mysql');

const express  = require('express');

const app = express();

const pool = createPool({
    host: "localhost",
    user: "root",
    password: '',
    database: 'test',
    connectionLimit: 10
})

// pool.query("select * from tes", (err, result)=>{
//     if(err){
//         return console.log(err)
//     }
//     result.forEach((res) => {
//         console.log(res.name)
//     })
// })

pool.getConnection(function(err){
    if(err){
        console.log("Database connection has failed")
    };
    console.log("Database is connected sucessfully");

    app.listen(5000,()=>console.log("server is running on port 5000"))
});

app.use("/", function(req, res) {
        pool.query("select * from tes", (err,result)=>{
            if(err){
                console.log("error");
            }
            res.send(JSON.stringify(result));
        })
        
})

module.exports = pool;