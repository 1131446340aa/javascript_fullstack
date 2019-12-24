function one(){
    setTimeout(()=>{
        console.log(1);
    },3000)
    return 1
    
}
function two(){
    console.log(2);
    return 1
    
}
async function run(){
await one()
await two()
}
run()