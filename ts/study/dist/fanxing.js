"use strict";
var mysql = (function () {
    function mysql() {
    }
    mysql.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    mysql.prototype.update = function (info, id) {
        return true;
    };
    mysql.prototype.delete = function (id) {
        return true;
    };
    mysql.prototype.get = function (id) {
        return [];
    };
    return mysql;
}());
var USER = (function () {
    function USER() {
    }
    return USER;
}());
var u = new USER();
u.username = "lisi";
u.password = '123456';
var omysql = new mysql();
omysql.add(u);
//# sourceMappingURL=fanxing.js.map