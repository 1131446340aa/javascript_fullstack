const { add, mul } = require('./src/js/aaa')
import {name} from "./src/js/info.js"
require('./src/css/demo1.css')
import Vue from 'vue'
import App from './src/vue/app.vue'
const app = new Vue({

    el:'#app',
    template:'<App></App>',
    components:{
        App
    }
   
})
console.log(add(20, 30));

console.log(mul(20, 30));
console.log(name);




 