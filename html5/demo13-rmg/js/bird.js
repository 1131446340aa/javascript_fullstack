var bird = {
  flyTimer: null,//小鸟飞行定时器
  wingTimer: null,//翅膀摆动定时器
  div: document.createElement('div'),
  showBird: function (parentObj) {
    // this.div.style.width = '40px'
    // this.div.style.height = '28px'
    //  this.div.style.backgroundImage = 'url(img/bird0.png)'
    //  this.div.style.backgroundRepeat = 'no-repeat'
    // this.div.style.position = 'absolute'
    // this.div.style.left = '50px'
    // this.div.style.top = '200px'
    // this.div.style.zIndex = '1'
    this.div.classList.add('bird')
    // this.div.setAttribute('class','bird')
    parentObj.appendChild(this.div)
  },
  fallSpend: 0,//控制小鸟下落的速度
  flyBird: function () {//控制小鸟飞行下落的函数
    bird.flyTimer = setInterval(fly, 40)
    function fly() {
      bird.div.style.top = bird.div.offsetTop + bird.fallSpend++ + 'px'
      if (bird.div.offsetTop <= 0) {
        bird.fallSpend = 2
      }
      if (bird.div.offsetTop >= 395) {
      bird.fallSpend = 0
        clearInterval(bird.flyTimer)
      }
      if (bird.fallSpend > 12) {
        bird.fallSpend = 12
      }
    }
  },
  wingWave: function () {
    var up = ["url(img/up_bird0.png)", "url(img/up_bird1.png)"]
    var down = ["url(img/down_bird0.png)", "url(img/down_bird1.png)"]
    var i = 0, j = 0
    bird.wingTimer = setInterval(wing, 120)
    function wing() {
      if (bird.fallSpend > 0) {
        bird.div.style.backgroundImage = down[i++]
        if (i == 2) {
          i = 0
        }
      }
      if (bird.fallSpend < 0) {
        bird.div.style.backgroundImage = up[j++]
        if (j == 2) { j = 0 }
      }
    }
  }
}
