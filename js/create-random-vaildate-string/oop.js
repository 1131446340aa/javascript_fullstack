const width = 200, height = 50
class Gcode {
    //抽象
    constructor(el) {
        this.$el = document.getElementById(el);
        this.ctx = this.$el.getContext('2d')
        
        this.$el.width = width
        this.$el.height = height
        this.drawText()
        this.drawLine()
        let that = this
        this.$el.addEventListener('click', function () {
            that.ctx.clearRect(0, 0, width, height);
            that.drawText()
            that.drawLine()

        })


    }
    drawLine() {
        for (let i = 0; i < 6; i++) {
            let beginx = Math.random() * width
            let beginy = Math.random() * height
            let endx = Math.random() * width
            let endy = Math.random() * height

            this.ctx.beginPath()
            this.ctx.moveTo(beginx, beginy)
            this.ctx.lineTo(endx, endy)
            this.ctx.strokeStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
            this.ctx.stroke()
        }
    }
    drawText() {
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
        for (let i = 0; i < res.length; i++) {
            this.ctx.font = '40px Helvetica'
            this.ctx.fillStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
            this.ctx.textBaseLine = 'middle'
            let prewidth = width / 4 - 20
            this.ctx.fillText(res[i], Math.random() * prewidth + i * width / 4, height / 1.3)
        }

    }
}
//实例
var obj = new Gcode('screen')
var obj1 = new Gcode('screen1')
var obj2 = new Gcode('screen2') 