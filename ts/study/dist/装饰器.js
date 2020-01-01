"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log2(parma) {
    return function (target, attr) {
        target[attr] = parma;
    };
}
var http = (function () {
    function http() {
    }
    http.prototype.setdata = function () {
        console.log(this.url);
    };
    __decorate([
        log2('http')
    ], http.prototype, "url", void 0);
    return http;
}());
var http1 = new http();
http1.setdata();
//# sourceMappingURL=装饰器.js.map