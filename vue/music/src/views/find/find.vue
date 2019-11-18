<template>
  <div class="find">
    <div class="loading" v-show="loader">
      <div class="loader">
        <div class="face">
          <div class="circle"></div>
        </div>
        <div class="face">
          <div class="circle"></div>
        </div>
      </div>
      <div class="music">music</div>
    </div>
    <div v-show="!loader">
      <div class="Rotation-char">
        <van-swipe :autoplay="3000" indicator-color="red">
          <van-swipe-item v-for="(item, index) in rotationChar" :key="index">
            <div class="banners-item">
              <img :src="item.imageUrl" alt />
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <van-grid :border="false" :column-num="5">
        <van-grid-item class="van-grid-item" v-for="(item, index) in navBarTextImg" :key="index">
          <div class="imgs">
            <img :src="item" alt />
          </div>
          {{navBarText[index]}}
        </van-grid-item>
      </van-grid>
      <div class="line"></div>
      <div class="nav-detail">
        <h2 class="left">推荐歌单</h2>
        <div class="right">歌单广场</div>
      </div>
      <van-grid :border="false" :column-num="3" class="a">
        <van-grid-item v-for="(item, index) in RecommendSongs" :key="index" class="personalized">
          <div class="img">
            <img :src="item.picUrl" alt />
          </div>
          <div class="text">{{item.name}}</div>
        </van-grid-item>
      </van-grid>
      <div class="nav-detail">
        <div class="two">
          <h2 class="left">新碟</h2>
          <div class="newsing">新歌</div>
        </div>
        <div class="right">更多新碟</div>
      </div>
      <van-grid :border="false" :column-num="3">
        <van-grid-item v-for="(item, index) in albums" :key="index" class="personalized">
          <div class="img">
            <img :src="item.picUrl" alt />
          </div>
          <div class="text">{{item.name}}</div>
        </van-grid-item>
      </van-grid>
      <div class="boldLine"></div>
      <div class="nav-detail">
        <div class="left-text">云村精选</div>
        <div class="right-item">
          <div class="icon">
            <van-icon name="replay" />
          </div>
          <div class="right-text">获取新内容</div>
        </div>
      </div>
      <div class="movie-wrapper" v-for="(item, index) in mvItem" :key="index">
        <div class="movie-item">
          <video
            :src="item.data.url"
            controls="controls"
            :poster="firstMovie[index].cover"
            @play="isplaying(index)"
          ></video>
        </div>
        <div class="movie-bottom">
          <div class="movie-text">{{firstMovie[index].briefDesc}}</div>
          <div class="user-img"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  RotationChar,
  personalized,
  albumNewest,
  first,
  mvUrl
} from "../../../src/network/home";
export default {
  methods: {
    RotationChar() {
      RotationChar().then(res => {
        console.log(res);

        this.rotationChar = res.banners;
        this.loader = false;
      });
    },
    personalized() {
      personalized().then(res => {
        this.RecommendSongs = res.result
          .sort(() => Math.random() - 0.5)
          .filter((item, index) => index < 6);
        console.log(this.RecommendSongs);
      });
    },
    albumNewest() {
      albumNewest().then(res => {
        this.albums = res.albums.filter((item, index) => index < 3);
      });
    },
    first(limit) {
      let that = this;
      first(limit)
        .then(res => {
          this.firstMovie = res.data;
          console.log(this.firstMovie);
        })
        .then(function mvUrl(id) {
          console.log();
          for (let i = 0; i < that.firstMovie.length; i++) {
            mvUrl(that.firstMovie[i].id).then(res => {
              that.mvItem.push(res);
            });
          }
          console.log(that.mvItem);
        });
    },
    isplaying(index) {
      let videos = document.querySelectorAll("video");
      this.isPlaying = !this.isPlaying;
      for (let i = 0; i < this.mvItem.length; i++) {
        if (i === index) this.isPlaying = !this.isPlaying;
        else {
          videos[i].pause();
        }
      }
    }
  },
  data() {
    return {
      rotationChar: [],
      navBarText: ["每日推荐", "歌单", "排行榜", "电台", "直播"],
      navBarTextImg: [
        "../../../static/image/Recommend.png",
        "../../../static//image/sing.png",
        "../../../static/image/Ranking.png",
        "../../../static/image/radio-station.png",
        "../../../static/image/Live-broadcast.png"
      ],
      RecommendSongs: [],
      albums: [],
      firstMovie: [1],
      mvItem: [],
      mvcurrentindex: 0,
      isPlaying: false,
      loader: true
    };
  },
  created() {
    this.RotationChar();
    this.personalized();
    this.albumNewest();
    this.first();
    // this.mvUrl(10899969)
    // this.mvShow();
  }
};
</script>

<style lang="stylus" scoped>
.Rotation-char {
  margin: 15px 5px 10px 5px;
  border-radius: 5px;
  overflow: hidden;

  .banners-item {
    width: 100%;
    height: 100%;
    font-size: 0;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.van-grid-item {
  font-size: 10px;

  .imgs {
    img {
      width: 35px;
      height: 35px;
    }
  }
}

.line {
  width: 100%;
  height: 1px;
  background-color: rgb(249, 249, 249);
}

.nav-detail {
  display: flex;
  justify-content: space-between;

  .two {
    display: flex;

    .newsing {
      font-size: 12px;
      padding: 22px 0 7px 15px;
      box-sizing: border-box;
      color: #9B9B9B;
    }
  }

  .left {
    font-size: 14px;
    padding: 7px 0 7px 7px;
  }

  .right {
    line-height: 16px;
    height: 16px;
    padding-left: 4px;
    padding-right: 4px;
    font-size: 12px;
    border: 1px solid rgb(249, 249, 249);
    border-radius: 8px;
    margin-top: 25px;
    margin-right: 8px;
  }
}

.personalized, box-sizing border-box {
  .img {
    border-radius: 5px;
    overflow: hidden;
    font-size: 0;
    height: 80px;

    img {
      width: 100%;
    }
  }

  .text {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    height: 28px;
  }
}

>>>.van-grid-item__content {
  padding: 0 5px 6px 5px;
}

.boldLine {
  height: 8px;
  width: 100%;
  background-color: rgb(249, 249, 249);
}

.nav-detail {
  .left-text {
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    font-size: 14px;
    font-weight: bold;
  }

  .right-item {
    display: flex;

    .right-text {
      height: 30px;
      line-height: 30px;
      padding-right: 5px;
      font-size: 11px;
    }

    .icon {
      position: relative;
      top: 9px;
      right: 5px;
      font-size: 11px;
    }
  }
}

.movie-wrapper {
  margin: 15px 7px 0 7px;

  .movie-item {
    video {
      width: 100%;
      max-height: 250px;
      // height 170px
    }
  }

  .movie-bottom {
    background-color: rgb(249, 249, 249);
    display: flex;

    .movie-text {
      height: 35px;
      line-height: 35px;
      padding-left: 12px;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
    }

    .user-img {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      margin-top: 10px;
      margin-left: 13px;
    }
  }
}
</style>
<style scoped>
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  width: 20em;
  height: 20em;
  font-size: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader .face {
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  animation: animate 3s linear infinite;
}
.loader .face:nth-child(1) {
  width: 100%;
  height: 100%;
  color: gold;
  border-width: 0.2em 0.2em 0em 0em;
  border-color: currentColor transparent transparent currentColor;
  --deg: -45deg;
  animation-direction: normal;
}
.loader .face:nth-child(2) {
  width: 70%;
  height: 70%;
  color: lime;
  border-width: 0.2em 0em 0em 0.2em;
  border-color: currentColor currentColor transparent transparent;
  --deg: -135deg;
  animation-direction: reverse;
}

.loader .face .circle {
  position: absolute;
  width: 50%;
  height: 0.1em;
  top: 50%;
  left: 50%;
  background-color: transparent;
  transform: rotate(var(--deg));
  transform-origin: left;
}
.loader .face .circle::before {
  position: absolute;
  content: "";
  top: -0.5em;
  right: -0.5em;
  width: 1em;
  height: 1em;
  background-color: currentColor;
  border-radius: 50%;
  box-shadow: 0 0 2em, 0 0 4em, 0 0 6em, 0 0 8em, 0 0 10em,
    0 0 0 0.5em rgba(255, 255, 0, 0.1);
}
.music {
  font-size: 40px;
  text-align: center;
  text-align: center;
  position: fixed;
  bottom: 25px;
  animation: change 1s ease infinite;
}

@keyframes animate {
  to {
    transform: rotate(1turn);
  }
}
@keyframes change {
  0% {
    color: #333;
  }
  50% {
    color: #f60;
  }
  100% {
    color: #f00;
  }
}
</style>