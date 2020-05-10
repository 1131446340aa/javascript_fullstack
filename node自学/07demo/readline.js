var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// rl.question("今晚吃什么", (answer) => {
//     console.log(answer);
//     rl.close()
// })
function question(ctx) {
    return new Promise((reslove, reject) => {
        rl.question(ctx, (answer) => {
            reslove(answer)
        })
    })
}
let run = async () => {
    await question("侯悦淳:你在干嘛?")
    await question("侯悦淳:你有没有想我?")
    rl.close()
}
run()
rl.on('close', () => {
    process.exit(0)
})
