var arrow_l = document.querySelector('.arrow-l')
var arrow_r = document.querySelector('.arrow-r')
var main = document.querySelector('.main')
let images = ['./image/1.png', './image/2.png', './image/3.png']
main.addEventListener('mouseenter',function(){
    arrow_l.style.display="block"
    arrow_r.style.display="block"
    clearInterval(timer1)
})
arrow_l.addEventListener('mouseenter',function(){
    arrow_l.style.display="block"
    arrow_r.style.display="block"
    clearInterval(timer1)
})
arrow_l.addEventListener('click',function(){
    autoMoveLeft()
})
arrow_r.addEventListener('click',function(){
    autoMoveRight()
})
arrow_r.addEventListener('mouseenter',function(){
    arrow_l.style.display="block"
    arrow_r.style.display="block"
    clearInterval(timer1)
    
})
main.addEventListener('mouseleave',function(){
    arrow_l.style.display="none"
    arrow_r.style.display="none"
    timer1 = setInterval(autoMoveLeft, 2000)
})
for (let i = 0; i < images.length; i++) {
    let img = document.createElement('img')
    img.src = images[i]
    img.style.left = 400 * i + "px"
    main.appendChild(img)
}
let imgUrl = document.querySelectorAll('img')
let timer1 = setInterval(autoMoveLeft, 2000)
function autoMoveLeft() {
    let timer = setInterval(moveLeft, 50);

    function moveLeft() {
        let j = 0

        for (j = 0; j < images.length; j++) {
            imgUrl[j].style.left = imgUrl[j].offsetLeft - 50 + "px"

        }
        if (imgUrl[images.length - 1].offsetLeft == 0) {
            for (let x = 0; x < images.length - 1; x++) {
                imgUrl[x].style.left = 400 * (x + 1) + "px"
            }
        }
        if (imgUrl[images.length - 1].offsetLeft == -400) {
            imgUrl[images.length - 1].style.left = 400 * (j - 1) + "px"
        }
        if (imgUrl[images.length - 1].offsetLeft % 400 == 0) {
            clearInterval(timer)
        }
    }
}
function autoMoveRight() {
    let timer2 = setInterval(moveRight, 50);

    function moveRight() {
        let j = 0
if (imgUrl[0].offsetLeft == 0) {
            for (let x = 1; x < images.length ; x++) {
                imgUrl[x].style.left = 400 * (-(images.length-x)) + "px"
            }
        }
        for (j = 0; j < images.length; j++) {
            imgUrl[j].style.left = imgUrl[j].offsetLeft + 50 + "px"

        }
        
        if (imgUrl[0].offsetLeft == 400) {
            imgUrl[0].style.left = 400 * (-(j - 1)) + "px"
        }
        if (imgUrl[0].offsetLeft % 400 == 0) {
            clearInterval(timer2)
        }
    }
}























