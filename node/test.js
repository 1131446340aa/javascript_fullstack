var fs = require('fs');
let a = { a: 3 }
let b = JSON.stringify(a)

fs.writeFile("output.txt", b, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("File saved successfully!");
});