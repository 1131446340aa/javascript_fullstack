let mysql = require('mysql')
let options = {
    host: "localhost",
    user: "root",
    password: "1131446340aa",
    database: "book"
}
let con = mysql.createConnection(options)

con.connect(err => {
    if (err) {
        console.log(err);
    }
})
let strsql = `create database mall;`
function query(sql) {
   return new Promise((reslove,reject)=>{
       con.query(sql,(err,res)=>{
           if(!err)
          
         {  reslove(res)}
       })
   })

}
query(strsql).then(res=>{
    console.log(res);
    
})
