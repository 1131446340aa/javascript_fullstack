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
    query: function(sql, values) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function(err, connection) {
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

// 读取所有 users 表数据, 测试数据连接
let getAllusers = function() {
        let _sql = `select * from users;`
        return allServies.query(_sql)
    }
    //用户登录需要的方法
    // 用户登录
let userLogin = function(username, userpwd) {
        let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
        return allServies.query(_sql)
    }
    //查找用户
let findUser = function(username) {
        let _sql = `select * from users where username="${username}";`
        return allServies.query(_sql)
    }
    //用户注册

let insertUser = function(value) {
    let _sql = `insert into users set username=?,userpwd=?;`
    return allServies.query(_sql, value)
}
let historySearch = function(historySearch) {
    let _sql = `select * from historysearch where historySearch="${historySearch}";`
    return allServies.query(_sql)
}
let inserthistiryItem = function(historySearch) {
    let _sql = `insert into historysearch set historySearch=?;`
    return allServies.query(_sql, historySearch)
}
let deleteHistory = function(historySearch) {

    let _sql = `delete from historysearch where historySearch=?;`
    return allServies.query(_sql, historySearch)
}
let deleteAll = function() {

    let _sql = `delete from historysearch;`
    return allServies.query(_sql)
}
let historyAll = function() {

    let _sql = `select * from historysearch;`
    return allServies.query(_sql)
}

module.exports = {
    getAllusers,
    userLogin,
    findUser,
    insertUser,
    inserthistiryItem,
    historySearch,
    deleteHistory,
    deleteAll,
    historyAll

}