let fs = require('fs')
let {  fsRead,fsWrite} = require('../06demo-fs/index')
fs.readdir("../06demo-fs", (err, files) => {
    if (err) {
        console.log(err);

    }
    else {
     files.forEach(async item=>{
         let file= await  fsRead('../06demo-fs/'+item)
        fsWrite('alltext',file)
       })
    }
})
fs.rmdir('deletedir',()=>{
    console.log("cg");
})