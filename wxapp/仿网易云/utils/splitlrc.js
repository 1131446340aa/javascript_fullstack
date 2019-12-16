function toLrc(Str) {
    var lrc = []
    var arrtext = []
    var arrtime = []
    var arrdatatime = []
    lrc = Str.split("\n")
    var reg = /^\[+[0-2][0-4]:[0-5][0-9]\.[0-9]{2,}\]/
        // console.log(lrc);
    for (let i = 0; i < lrc.length - 1; i++) {
        // if (item.match(reg)[0]) { arrtime.push(item.match(reg)[0]) }
        if (lrc[i].match(reg) && lrc[i].split(reg)) {
            arrtime.push(lrc[i].match(reg)[0])
            arrtext.push(lrc[i].split(reg).join("").trim())
        }
        // console.log(item.match(reg));

    }
    for (var item of arrtime) {
        arrdatatime.push(parseInt(item.slice(1, item.length - 1).split(':')[0] * 60) + parseInt(item.slice(1, item.length - 1).split(':')[1]))

    }
    return {
        arrtext: arrtext,
        arrdatatime: arrdatatime
    }
}
module.exports = {
        toLrc
    }
    // console.log(toLrc("[by:Trap_Girl]\n[00:09.41]Ay, ah, ay\n[00:16.01]Say, ay, ah\n[00:22.05]Ay\n[00:25.51]Ay, ay\n[00:32.32]Say, ay, ah\n[00:38.68]Ay\n[00:40.54]Ay\n[00:43.30]Love can be so hard\n[00:45.88]It's gonna be so helpless\n[00:49.29]Say love can be so hard\n[00:54.76]Gonna be it\n[00:56.91]Love can be so hard\n[01:03.18]It's gonna be so helpless\n[01:06.32]Say love can be so hard\n[01:11.25]Gonna be it\n[01:13.48]Ay, ay, ay\n[01:28.45]Ay, ah, ay\n[01:38.21]Ay, ah, ay\n[01:46.93]Ay, say, ay\n[01:55.25]Ah, ay\n[01:58.50]Love can be so hard\n[02:01.63]Say Say love can be so hard\n[02:09.64]It's gonna be so helpless\n[02:12.85]Say love can be so hard\n[02:17.83]Gonna be it\n[02:20.30]Say love can be so hard\n[02:26.61]It's gonna be so helpless\n[02:29.50]Say love can be so hard\n[02:34.71]Gonna be it\n[02:37.50]Say love can he so hard\n[02:43.30]I'm learning other side\n[02:48.08]Say Love can be so hard\n[02:51.62]It's gonna be so helpless\n[02:54.88]Say love can be so hard\n[02:59.72]Gonna be it\n[03:02.02]Say love gonna be so hard\n[03:08.42]It\n[03:09.97]No matter what they say\n[03:12.77]Ay, say, say, ah, ay, ah\n[03:25.55]Ay, say, ay, say\n[03:36.60]Ay, ah, ay\n"));