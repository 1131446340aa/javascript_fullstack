const canvas = document.querySelector('#screen')
const ctx = canvas.getContext('2d')
const width = 200, height = 50
ctx.width = width + "px"
ctx.height = height + "px"
function drawLine() {
    for (let i = 0; i < 6; i++) {
        let beginx = Math.random() * width
        let beginy = Math.random() * height
        let endx = Math.random() * width
        let endy = Math.random() * height

        ctx.beginPath()
        ctx.moveTo(beginx, beginy)
        ctx.lineTo(endx, endy)
        ctx.strokeStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
        ctx.stroke()
    }
}
drawLine()
function drawText() {
    let sourceTect = ['a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'o', 'p',
        'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z',
        '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let res = []
    for (let i = 0; i < 4; i++) {
        const idx = Math.floor(Math.random() * sourceTect.length)
        res.push(sourceTect[idx])
        sourceTect.splice(idx, 1)
        
    }
    console.log(res)
    for(let i=0;i<res.length;i++)
    {
ctx.font='40px Helvetica'
ctx.fillStyle=`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
ctx.textBaseLine='middle'
let prewidth=width/4-20
ctx.fillText(res[i],Math.random()*prewidth+i*width/4,height/1.3)
    }

}
drawText()
canvas.addEventListener('click',function(){
    ctx.clearRect(0,0,width,height)
    drawText()
    drawLine()
})