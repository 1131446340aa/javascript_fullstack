<template>
  <div class="main">
    <div class="wrapper">
      <div class="video">
        <video
          :poster="videodetail.cover"
          autoplay="true"
          controls="controls"
          v-if="videodetail.brs"
          :src="videodetail.brs[480]"
          ref="video"
        ></video>
      </div>
      <div v-if="height!==0">
        <BScroll :top="height" :bottom="0">
          <div class="detail">
            <div class="title">{{videodetail.name}}</div>
            <div class="icon">
              <div class="item">
                <i class="iconfont icon-zan"></i>
                <div class="text">{{videodetail.subCount}}</div>
              </div>
              <div class="item">
                <i class="iconfont icon-add-folder"></i>
                <div class="text">{{videodetail.likeCount}}</div>
              </div>
              <div class="item">
                <i class="iconfont icon-pinglun"></i>
                <div class="text">{{videodetail.commentCount}}</div>
              </div>
              <div class="item">
                <i class="iconfont icon-fenxiang"></i>
                <div class="text">{{videodetail.shareCount}}</div>
              </div>
            </div>
            <div class="text">相关视频</div>
            <div class="mvs-wrapper">
              <div
                class="mvs-item"
                v-for="(item,index) in similiar"
                :key="index"
                @click="smiliarmv(index)"
              >
                <div class="image">
                  <img :src="item.cover" />
                </div>
                <div class="text">
                  <div class="name">{{item.name}}</div>
                  <div class="artist">by{{item.artistName}}</div>
                </div>
              </div>
            </div>
          </div>
        </BScroll>
      </div>
      <div class="daohang">
        <daohangblack :name="videodetail.name" color="#ffffff"></daohangblack>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchGet } from "../../network/index";
import { mapGetters, mapActions } from "vuex";
import BScroll from "./scroll";
import daohangblack from "./daohang_black";
export default {
  created() {
    this.getmv();
  },
  data() {
    return {
      videodetail: "",
      height: 0,
      similiar: [],
      id: 0
    };
  },
  mounted() {
   
  },
  watch: {
    similiar: function() {
      if (this.similiar) {
        let that = this;
        this.$nextTick(function() {
          //   setTimeout(function() {
          // let video = window.getComputedStyle(that.$refs.video).height;
          let video = that.$refs.video.offsetHeight;
          console.log(video);
          that.height = video;
          // document.querySelector(".detail").style.height =
          //   window.screen.height - that.height + "px";
          // console.log(that.height);

          // console.log(document.querySelector(".detail").style.height);
          //   });
        });
      }
    }
  },
  methods: {
  
    getmv() {
      let id;
      if (this.id !== 0) {
        id = this.id;
      } else {
        id = this.$route.query.mvid;
      }
      fetchGet("/mv/detail", {
        mvid: id
      })
        .then(res => {
          // console.log(res);
          this.videodetail = res.data;
        })
        .catch(res => {
          this.$notify("网络出错或链接过期");
        });
      fetchGet("/simi/mv", {
        mvid: id
      }).then(res => {
        console.log(res);
        this.similiar = res.mvs;
      });
    },
    smiliarmv(index) {
      this.id = this.similiar[index].id;
      this.getmv();
      //   console.log(1);
    }
  },
  components: {
    BScroll,
    daohangblack
  }
};
</script>

<style lang="stylus" scoped>
.detail
  margin 0 10px
.mvs-item
  display flex
  margin 7px 0px
  .image
    width 30vw
    border-radius 5px
    overflow hidden
    font-size 0
    img
      width 30vw
  .text
    flex 1
    margin 0 10px
    .name
      font-size 14px
      text-overflow ellipsis
      overflow hidden
      white-space nowrap
      max-width 65vw
    .artist
      font-size 10px
      color #606266
.daohang
  position fixed
  top 0
  height 50px
.text
  height 30px
  line-height 30px
  font-size 14px
.wrapper
  video
    width 100%
.title
  font-size 16px
  height 30px
  line-height 30px
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
.icon
  display flex
  height 45px
  line-height 30px
  .item
    flex 1
    text-align center
    .text
      font-size 10px
      height 15px
      line-height 15px
      color #606266
</style>