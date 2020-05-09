const sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { host, user, password, port, database } = MYSQL_CONF
const { isProd ,isTest} = require('../utils/env')
const conf = {
    host,
    dialect: 'mysql'
} 
if(isTest){
    conf.logging = ()=>{

    }
}
if (isProd) {
    conf.pool = {
        max: 5,
        min: 0,
        ideal: 10000
        //线上
    }
}

const seq = new sequelize(database, user, password, conf)

module.exports = seq

