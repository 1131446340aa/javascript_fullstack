import {song_detail, song_url, song_lrc } from "../../network/index";
import { mapGetters, mapActions } from "vuex";
import split_lrc from '../../config/split_lrc'
export const mixin = {
    data() {
        return {
            songs: [],
            currentIndex: "",
            isshow: false,
            values: 0,
            touching: false
        }
    },
    methods: {
        ...mapActions([
            "playRules",
            "isPlay",
            "songurl",
            "Index",
            "Playing",
            "Seek",
            "Value",
            'Songitem',
            "SongLrc"
        ]),
        nextone() {
            if (this.playrules === 0) {
                this.currentIndex = this.index;
                this.currentIndex++;
                this.run();
                this.Playing();
            }
            this.suiji_and_danqu();
        },
        run() {
            if (this.currentIndex === this.singsheet) {
                this.currentIndex = 0;
            }
            this.Index(this.currentIndex);
            this.api();
        },
        playing() {
            this.isPlay();
        },
        suiji_and_danqu() {
            if (this.playrules === 1) {
                this.currentIndex = this.index;
                this.currentIndex = Math.floor(Math.random() * this.singsheet.length);
                this.run();
            }
            if (this.playrules === 2) {
                // console.log(12);
                // this.currentIndex = this.index;
                this.currentIndex = this.index;
                this.currentIndex++;
                this.run();
                this.Playing();
                // console.log(this.seek);
                // this.run();
                // console.log(1);

            }
        },
        music() {
            if (localStorage.songitem) {
                let arr = JSON.parse(localStorage.songitem)
                arr.forEach((item, index) => {
                    if (item.id === this.songitem.id) {
                        arr.splice(index, 1)
                        arr = [this.songitem, ...arr]
                    }
                    else {
                        if (index === arr.length - 1) {
                            arr = [this.songitem, ...arr]
                        }
                    }
                })
                localStorage.songitem = JSON.stringify(arr)

                //不知何故各种数组对象去重方法都会有问题，手写的对象没问题，不知道为什么传过来的对象不能去重，故此用这种取巧方法
                //       var obj = {};
                //      arr = arr.reduce(function(item, next) {
                //        obj[next.key] ? '' : obj[next.key] = true && item.push(next);
                //       return item;
                //     }, []);
                // console.log(arr);

                // console.log(arr);
                // let Arr = arr.map(item => JSON.stringify(item))
                // console.log(Arr.indexOf(JSON.stringify(this.songitem)));

                // if(Arr.indexOf(JSON.stringify(this.songitem))===(-1)){
                //     console.log(1);

                //     arr=[this.songitem, ...arr]
                // }
                // else{
                //   console.log( JSON.parse([...new Set([JSON.stringify(this.songitem),...Arr])]));

                // }

                // console.log(Arr);
                // console.log([...new Set(["1","1","2"])]);

                // Arr = [...new Set(Arr)]
                // console.log(Arr);
                // let array=Arr.map(item=>JSON.parse(item))
                // console.log(array);

                // //    console.log(arr);

                // console.log(JSON.parse(localStorage.songitem));
            }
            else {
                localStorage.songitem = JSON.stringify([this.songitem])
            }
        },
        api() {
            let id
            if (this.index < 0) {
                this.Index(this.singsheet.length - 1)
            }
            if (this.index === this.singsheet.length) {
                this.Index(0)
            }
            if (this.singsheet[this.index].songs) {
                id = this.singsheet[this.index].songs[0].id
                // console.log(this.singsheet[this.index].songs[0].id);

            }
            else {
                id = this.singsheet[this.index].id
            }

            // console.log(id);

            song_detail(id, res => {
                if (res.songs[0]) {//歌曲
                    this.songs = res.songs[0];
                    this.Songitem(res.songs[0])
                    song_url(id, res => {
                        if (!res.data[0].url) {
                            this.$notify({ type: "danger", message: "付费音乐，播放下一首", duration: 1000 });
                            setTimeout(this.nextone, 1500)
                        }
                        else {
                            this.music()
                            this.Playing();
                            this.songurl(res.data[0].url);
                            song_lrc(id, res => {
                                //    console.log( split_lrc(res.lrc.lyric));
                                if (res.lrc) { this.SongLrc(split_lrc(res.lrc.lyric)) }
                                else { this.SongLrc(split_lrc("")) }
                                //    console.log( this.songlrc);
                            })
                        }
                    });
                }
                else {
                    // 电台

                    song_url(
                        this.singsheet[this.index].mainSong.id,
                        res => {
                            this.songs = this.singsheet[this.index]
                            this.Songitem(this.singsheet[this.index])
                            // console.log(res.data[0].url);
                            if (!res.data[0].url) {
                                this.$notify({ type: "danger", message: "付费电台，播放下一首", duration: 1000 });
                                setTimeout(this.nextone, 1500)
                            }
                            else {
                                this.music()
                                this.Playing();
                                this.songurl(res.data[0].url);
                                song_lrc(
                                    this.singsheet[this.index].mainSong.id,
                                    res => {
                                        if (res.lrc) { this.SongLrc(split_lrc(res.lrc.lyric)) }
                                        else { this.SongLrc(split_lrc("")) }
                                    }
                                )
                            }
                        }
                    )
                }
            });
        },
    },
    computed: {
        ...mapGetters([
            "singsheet",
            "playrules",
            "isplay",
            "Songurl",
            "index",
            "currentTime",
            "duration",
            "value",
            "ended",
            "songitem",
            "songlrc",
            "seek"
        ])
    }
}
