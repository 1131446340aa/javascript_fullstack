<template>
  <div id="app">
    <audio v-show="Songurl&&isplay" :src="Songurl" autoplay="true" :loop="playrules===2"></audio>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
import { fetchGet } from "../network/index";
import { mapGetters, mapActions } from "vuex";
import { mixin } from "./mixin/mixins";
export default {
  name: "App",
  mixins: [mixin],
  computed: {
    ...mapGetters(["seek"])
  },
  methods: {
    ...mapActions(["Duration", "CurrentTime", "Ended", "started", "ISSeek","ID"])
    // playing(){
    //   console.log(12);
    // }
  },
  watch: {
    isplay: newold => {
      let audio = document.querySelector("audio");

      if (newold) {
        audio.play();
      } else {
        audio.pause();
      }
    },
    ended: function() {
      if (this.ended) {
        this.nextone();        
      }
      console.log(this.ended);
      
    }
  },
  mounted() {
    let audio = document.querySelector("audio");
    let that = this;

    audio.onended = function() {
      that.Ended();
    };
    audio.ontimeupdate = function(e) {
      // if(e.target.duration<e.target.currentTime+.3){
      //   that.nextone()
      //   console.log(123);
        
      // }
      let Duration_m = Math.floor(e.target.duration / 60) + "";
      let Duration_s = Math.floor(e.target.duration % 60) + "";
      let endtimer =
        Duration_m.padStart(2, "0") + ":" + Duration_s.padStart(2, "0");
      that.Duration(endtimer);
      let currentTime_m = Math.floor(e.target.currentTime / 60) + "";
      let currentTime_s = Math.floor(e.target.currentTime % 60) + "";
      let starttimer =
        currentTime_m.padStart(2, "0") + ":" + currentTime_s.padStart(2, "0");
      that.CurrentTime(starttimer);
      let progress = (e.target.currentTime / e.target.duration) * 100;
      if (!that.seek) {
        that.Value(progress);
      }

      that.started();
      if (that.seek) {
        console.log(that.value);
        e.target.currentTime = (that.value * e.target.duration) / 100;
        that.ISSeek();
      }
      // that.Value(e.target.currentTime/e.target.duration*100)
      // console.log(that.value);
    };
  },
  created(){
    
  }
};
</script>

<style>
</style>
