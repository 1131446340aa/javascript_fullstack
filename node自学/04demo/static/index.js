var lottery = document.querySelector('.lottery');
var ali = lottery.querySelectorAll('li');
var prize = document.querySelector('.prize');
var arr = ['刘诗诗', '范冰冰', '杨紫', '赵丽颖', '迪丽热巴', '郑爽', '杨幂', '关晓彤'];
var i = 0;
var count = 0;
var totalcount = 9;
var speed = 500;
var minspeed = 500;
var timer;
var isclick = true;
var index = 3;
ali[ali.length - 1].onclick = function () {
    if (isclick = true) {
        count = 0;
        run();
        isclick = false;

    }

}
function run() {
    speed -= 50;
    if (speed <= 10) {
        speed = 10
    }
    for (var j = 0; j < ali.length; j++) {
        ali[j].classList.remove('active');
    }
    i++;
    if (i >= ali.length - 1) {
        i = 0;
        count++;
    }
    prize.innerHTML = "你抽中了" + arr[i];
    ali[i].classList.add('active');
    if (count >= totalcount && ((i + 1) == index)) {

        clearInterval(timer);
        isclick = true;
    }
    else {
        timer = setTimeout(run, speed);

        if (count >= totalcount - 1 || speed <= 50) {
            speed += 100;


        }
    }
}
