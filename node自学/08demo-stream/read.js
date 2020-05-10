let fs = require("fs")
let rs = fs.createReadStream('hello.txt', {
    flags: 'r',
    encoding: "utf-8"
})

rs.on("open", () => {
    console.log(1);

})

rs.on('close', () => {
    console.log(2);

})
rs.on("data", chunk => {

    console.log(chunk);
})
