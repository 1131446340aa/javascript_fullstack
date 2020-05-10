//为什么要依赖收集
//就是要render精确的找到那一个dom结构需要替换
new Vue({
    template: `<div>
                <span>{{text1}}</span>
                <span>{{text2}}</span>
              </div>`,
    data: {
        text1: 'text1',
        text2: 'text2',
        text3: 'text3'
    }
})
this.text3 = "lalala"