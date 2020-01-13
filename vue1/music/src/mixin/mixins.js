import { fetchGet } from "../../network/index";
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

        api() {
            let id
           
            console.log( this.singsheet);
            console.log(this.index);
            
            if( this.singsheet[this.index].songs){
                id=this.singsheet[this.index].songs[0].id
                console.log(this.singsheet[this.index].songs[0].id);
            }
            else{
                id=this.singsheet[this.index].id
            }
            fetchGet("/song/detail", {
                ids: id
            }).then(res => {
                console.log(res);
                this.songs = res.songs[0];
                this.Songitem(res.songs[0])
                fetchGet("/song/url", {
                    id: id
                }).then(res => {
                    if(!res.data[0].url){
                        this.$notify({ type: "danger", message: "付费音乐，播放下一首", duration: 1000 });
                        setTimeout(this.nextone,1500)
                    }
                   else{
                    this.Playing();
                    //   this.sonngurl = res.data[0].url;
                    this.songurl(res.data[0].url);
                    fetchGet('/lyric',{
                        id:id
                    }).then(res=>{
                       
                    //    console.log( split_lrc(res.lrc.lyric));
                       this.SongLrc(split_lrc(res.lrc.lyric))
                       console.log( this.songlrc);
                       
                    })
                   }
                   
                });
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
