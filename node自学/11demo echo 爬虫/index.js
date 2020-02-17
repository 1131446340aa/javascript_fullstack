//目标:下载音乐
const axios = require('axios')
const fs = require('fs')
let getpage = async num => {
    let httpurl = 'http://www.app-echo.com/api/recommend/sound-day?page=' + num
    let res = await axios.get(httpurl)
    //    console.log( res.data);
     res.data.list.forEach( (item, i) => {
        title = item.sound.name
        function stripscript(s) {
            var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
            var rs = "";
            for (var i = 0; i < s.length; i++) {
                rs = rs + s.substr(i, 1).replace(pattern, '');
            }
            return rs;
        }
        title = stripscript(title)
        let mp3Url = item.sound.source
        console.log("正在下载:" + title);

         download(mp3Url, title)
    })
    process.on('uncaughtException', err => {
        console.log("下载错误");

    })
}
function download(url, title) {
    try {
        let ws = fs.createWriteStream('./mp3/' + title + ".mp3")
        axios.get(url, { responseType: "stream" }).then(
            res => {
                res.data.pipe(ws)
                res.data.on('close', () => {
                    console.log("下载完成" + title);

                    ws.close()
                })
                // console.log(res);
            }
        )
    }
    catch (e) {
        console.log("出错");

    }
}
for (let i = 1; i < 20; i++) {
    getpage(i)
}

