//原生js轮播图的实现
var arrow_l = document.querySelector('.arrow-l')
var arrow_r = document.querySelector('.arrow-r')
var main = document.querySelector('.main')
let images = ['./image/1.png', './image/2.png', './image/3.png','./image/1.png','./image/1.png', './image/2.png', './image/3.png','./image/1.png']
let ul = document.querySelector('ul')
for (let n = 0; n < images.length; n++) {
    //动态生成小圆圈，让其与图片数量相等
    let li = document.createElement('li')
    ul.appendChild(li)
}
var sel_li = document.querySelectorAll('li')
sel_li[0].classList.add('current')
main.addEventListener('mouseenter', function () { 
    //当鼠标经过图片，移除定时器，同时显示上一张和下一张按钮
    arrow_l.style.display = "block"
    arrow_r.style.display = "block"
    clearInterval(timer1)
})

arrow_l.addEventListener('click', function () {
    autoMoveLeft()
})
arrow_r.addEventListener('click', function () {


    autoMoveRight()
})
main.addEventListener('mouseleave', function () {
    //当鼠标离开让定时器运行
    arrow_l.style.display = "none"
    arrow_r.style.display = "none"
    timer1 = setInterval(autoMoveLeft, 2000)
})
for (let i = 0; i < images.length; i++) {
    //动态生成img可以随意增减轮播图的图片数量
    let img = new Image()
    img.src = images[i]
    img.style.left = 400 * i + "px"//让生成的每一张图片紧紧连在一起
    main.appendChild(img)
}
let imgUrl = document.querySelectorAll('img')
let timer1 = setInterval(autoMoveLeft, 2000)//两s自动换一张图片
function autoMoveLeft() {
    let timer = setInterval(moveLeft, 50);//每50毫秒图片换完

    function moveLeft() {
        time()
       

        if (imgUrl[images.length - 1].offsetLeft % 400 == 0) {//当任意一张图片(意思就是图片的下标任意)走完本身长度的n倍时，移除定时器
            clearInterval(timer)
        }
    }
}
function autoMoveRight() {
    let timer = setInterval(moveRight, 50);

    function moveRight() {
        let j = 0
        let x = 0

        for (x = 0; x < images.length; x++) {//原理类似time函数
            if (imgUrl[x].offsetLeft == 400 * (images.length - 1)) {
                if (x + 1 == images.length) { sel_li[0].classList.remove('current') }
                else { sel_li[x + 1].classList.remove('current') }

                sel_li[x].classList.add('current')
                imgUrl[x].style.left = -400 + "px"
            }

        }
        for (j = 0; j < images.length; j++) {
            imgUrl[j].style.left = imgUrl[j].offsetLeft + 50 + "px"

        }

        if (imgUrl[images.length - 1].offsetLeft % 400 == 0) {
            clearInterval(timer)
        }
    }
}
function time() {
    let j = 0
    let x = 0

    for (j = 0; j < images.length; j++) {
        imgUrl[j].style.left = imgUrl[j].offsetLeft - 50 + "px"//调用一次定时器，每张图片左移50px

    }
    for (x = 0; x < images.length; x++) {
        if (imgUrl[x].offsetLeft == -400) {//当当前展示图片走完400px时，将小图片的红色背景色移除，给下一张图片添加红色背景色
            sel_li[x].classList.remove('current')
            if (x == images.length - 1) { sel_li[0].classList.add('current') }//如果当前图片为最后一张，则给第一张图片增加背景色
            else {
                sel_li[x + 1].classList.add('current')
            }
            imgUrl[x].style.left = 400 * (images.length - 1) + "px"//把这张图片移到轮播图的最末尾，保证轮播图首尾相连
        }
    }
}
for (let m = 0; m < images.length; m++) {

    sel_li[m].addEventListener('click', function () {
       
        if(imgUrl[m].offsetLeft==0)//如果点击的小圆圈和展示图相对应，则不做任何操作

        {return}
        else{ let timer2 = setInterval(() => {
            time()

            if (imgUrl[m].offsetLeft == 0//让当前小圆圈所代表的图片最左边贴近父容器，则表示显示小圆圈所代表的图片

            ) {
                clearInterval(timer2)
            }
        }, 1)}//1毫秒保证图片迅速切完
       



    })
}























