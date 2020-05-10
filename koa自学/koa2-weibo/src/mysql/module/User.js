const seq = require('../seq')
const sequelize = require('sequelize')
const { STRING, DECIMAL } = require('../type.js')
const User = seq.define('user', {
    userName: {
        type: STRING,
        allowNull: false,
        unique: true,
        comment:'用户名'
    },
    password: {
        type: STRING,
        allowNull: false,
        comment:'密码'
    },
    nickName: {
        type: STRING,
        allowNull: false,
        comment:'昵称'
    },
    gender: {
        type: DECIMAL,
        allowNull: false,
        defaultValue:3,
        comment:'性别(1 男性, 2 女性, 3保密)'
    },
    picture:{
        type: STRING,
        allowNull: true,
        comment:'头像'
    },
    city:{
        type: STRING,
        allowNull: true,
        comment:'城市'
    }
})

module.exports = {User}