var mysql = require('mysql')
var config = require('./defaultConfig')

// 创建线程池
var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT
})

// 统一连接数据库的方法
let allServies = {
    query: function (sql, values) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, values, (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release()
                    })

                }
            })
        })
    }
}

let novel_select = function () {
    let _sql1 = `select * from book_info3 where saw>3000 union select * from book_info4 where saw>3000 union select * from book_info5 where saw>3000 union select * from book_info6 where saw>3000;`
    // let _sql=[_sql1,_sql2,_sql3,_sql4]
    return allServies.query(_sql1)
}
let history_select = function () {
    let _sql1 = `select * from book_info1 where saw>2500 union select * from book_info2 where saw>2500; `
    // let _sql=[_sql1,_sql2,_sql3,_sql4]
    return allServies.query(_sql1)
}
let cglz_select = function () {
    let _sql1 = `select * from book_info7 where saw>1500  `
    // let _sql=[_sql1,_sql2,_sql3,_sql4]
    return allServies.query(_sql1)
}
let hightStar_select = function () {
    let _sql1 = `select * from book_info3 where star>4.8 union select * from book_info4 where star>4.8 union select * from book_info5 where star>4.8 union select * from book_info6 where star>4.8 union select * from book_info7 where star>4.8 union select * from book_info1 where star>4.8 union select * from book_info2 where star>4.8  `
    // let _sql=[_sql1,_sql2,_sql3,_sql4]
    return allServies.query(_sql1)
}
let renwen = function () {
    let _sql1 = `select * from book_info8 where catogry='renwen'`
    // let _sql=[_sql1,_sql2,_sql3,_sql4]
    return allServies.query(_sql1)
}
let shenghuo = function () {
    let _sql1 = `select * from book_info8 where catogry='shenghuo' `
    // let _sql=[_sql1,_sql2,_sql3,_sql4]
    return allServies.query(_sql1)
}
let querybookinfo = function (id) {
    let _sql1 = `select * from book_info3 where book_ids=${id} union select * from book_info4 where book_ids=${id} union select * from book_info5 where book_ids=${id} union select * from book_info6 where book_ids=${id} union select * from book_info7 where book_ids=${id} union select * from book_info1 where book_ids=${id} union select * from book_info2 where book_ids=${id} union select * from book_info8 where book_ids=${id}  `
    // let _sql=[_sql1,_sql2,_sql3,_sql4]
    return allServies.query(_sql1)
}
let hot_search = function () {
    let _sql1 = `select * from hot_search`
    // let _sql=[_sql1,_sql2,_sql3,_sql4]
    return allServies.query(_sql1)
}
let search_book = function (title) {
    let _sql1 = `select * from book_info3 where title like '%${title}%' union select * from book_info4 where title like '%${title}%' union select * from book_info5 where title like '%${title}%' union select * from book_info6 where title like '%${title}%' union select * from book_info7 where title like '%${title}%' union select * from book_info1 where title like '%${title}%' union select * from book_info2 where title like '%${title}%'  `
    // let _sql=[_sql1,_sql2,_sql3,_sql4]
    return allServies.query(_sql1, title)
}
let zhuche = function (user, pass) {
    let _sql = `insert into users (username,password,nickname,sex,img) values (${user},'${pass}','力豪书屋','男','https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4090061760,3566002114&fm=26&gp=0.jpg');`
    return allServies.query(_sql, user, pass)
}
let sqluser = function (username) {
    let _sql = `select * from users where username=${username};`
    return allServies.query(_sql, username)
}
let login = function (username, password) {
    let _sql = `select * from users where username=${username} AND password='${password}';`
    return allServies.query(_sql, username, password)
}
let updateinfo = function (username, nickname, qianming, sex) {
    let _sql = `update users set nickname="${nickname}",qianming="${qianming}",sex="${sex}" where username="${username}";`
    return allServies.query(_sql, username, nickname, qianming, sex)
}
let collection = function (user, bookinfo) {
    let _sql = `insert into collection (user,author,title,img,book_ids) values (${user},'${bookinfo.author}','${bookinfo.title}','${bookinfo.img}',${bookinfo.book_ids});`
    return allServies.query(_sql, user, bookinfo)
}
let sqlcollection = function (username) {
    let _sql = `select * from collection where user=${username};`
    return allServies.query(_sql, username)
}
let sqlCll = function (username, bookid) {
    let _sql = `select * from collection where user=${username} AND book_ids=${bookid};`
    return allServies.query(_sql, username,bookid)
}
let delCll = function (username, bookid) {
    let _sql = `delete from collection where user=${username} AND book_ids=${bookid};`
    return allServies.query(_sql, username,bookid)
}
let historySearch = function (user) {
    let _sql = `select * from historysearch where user='${user}' order by date desc;`
    return allServies.query(_sql, user)
}
let insertHS = function (user, text) {
    let _sql = `REPLACE into historysearch (user,text) values (${user},'${text}');`
    return allServies.query(_sql, user, text)
}
// let sqlHS = function (user, text) {
//     let _sql = `select * from historysearch where text='${text}' AND user='${user}' order by id desc;`
//     return allServies.query(_sql, user, text)
// }
// let delsqlHS = function (user, text) {
//     let _sql = `delete from historysearch where text='${text}' AND user='${user}';`
//     return allServies.query(_sql, user, text)
// }
let delHS = function () {
    let _sql = `delete from historysearch;`
    return allServies.query(_sql)
}
let delreader = function () {
    let _sql = `delete from history_reader;`
    return allServies.query(_sql)
}
let insertReadHis=function (user,bookinfo) {
    let _sql = `REPLACE into history_reader (user_id,book_ids,title,author,img) values (${user},'${bookinfo.book_ids}','${bookinfo.title}','${bookinfo.author}','${bookinfo.img}');`
    return allServies.query(_sql,user,bookinfo)
}

let sqlALLReadHis=function (user) {
    let _sql = `select * from  history_reader where user_id='${user}';`
    return allServies.query(_sql,user)
}
let sqlday_book=function () {
    let _sql = `select * from  day_book;`
    return allServies.query(_sql)
}
let fengxiang=function () {
    let _sql = `select * from  fengxiang;`
    return allServies.query(_sql)
}
let recommed=function () {
    let _sql = `select * from  recommed;`
    return allServies.query(_sql)
}
let insertSetUp=function (user,fontsize,bgcolor) {
    let _sql = `REPLACE  into user_set_up (user,fontsize,bgcolor) values (${user},'${fontsize}','${bgcolor}');`
    return allServies.query(_sql,user,fontsize,bgcolor)
}
let bookprogress=function (user,bookid,progress) {
    let _sql = `REPLACE  into book_progress (user,book_id,progress) values (${user},'${bookid}','${progress}');`
    return allServies.query(_sql,user,bookid,progress)
}
let sqlsetUP=function (user) {
    let _sql = `select * from  user_set_up where user=${user};`
    return allServies.query(_sql,user)
}
let sqlpregress=function (user,bookid) {
    let _sql = `select * from  book_progress where user=${user} and book_id='${bookid}';`
    return allServies.query(_sql,user,bookid)
}
module.exports = {
    novel_select, history_select, cglz_select, hightStar_select, querybookinfo,
    hot_search, search_book, zhuche, sqluser, updateinfo, login, collection, sqlcollection,
     historySearch, insertHS, delHS,sqlCll,delCll,insertReadHis,delreader,
     sqlALLReadHis,sqlday_book,fengxiang,recommed,renwen,shenghuo,insertSetUp,sqlsetUP,bookprogress,sqlpregress
}