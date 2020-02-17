const axios = require('axios')
let httpurl = "https://www.doutula.com/article/detail/1314115"
const options = {
    proxy: {
        host: "183.196.170.247",
        port: 9000
    }
}
axios.get(httpurl,options).then(res => {
console.log(res.data);

})