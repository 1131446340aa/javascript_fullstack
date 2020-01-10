import { fetchGet } from "../../network/index";
import { mapGetters, mapActions } from "vuex";
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
            'Songitem'
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
                this.currentIndex = this.index;
                this.run();
            }
        },

        api() {
            fetchGet("/song/detail", {
                ids: this.singsheet[this.index].id
            }).then(res => {
                console.log(res);
                this.songs = res.songs[0];
                this.Songitem(res.songs[0])
                fetchGet("/song/url", {
                    id: this.singsheet[this.index].id
                }).then(res => {
                    this.Playing();
                    //   this.sonngurl = res.data[0].url;
                    this.songurl(res.data[0].url);
                   
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
            "songitem"
        ])
    }
}
