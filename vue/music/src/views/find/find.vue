<template>
  <div class="find">
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
  </div>
</template>

<script>
import {
  RotationChar,
  personalized,
  albumNewest
} from "../../../src/network/home";
export default {
  methods: {
    RotationChar() {
      RotationChar().then(res => {
        console.log(res);

        this.rotationChar = res.banners;
      });
    },
    personalized() {
      personalized().then(res => {
        this.RecommendSongs = res.result.filter((item, index) => index < 6);
        console.log(this.RecommendSongs);
      });
    },
    albumNewest() {
      albumNewest().then(res => {
        this.albums = res.albums.filter((item, index) => index < 3);
      });
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
      albums: []
    };
  },
  created() {
    this.RotationChar();
    this.personalized();
    this.albumNewest();
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
  }
}

>>>.van-grid-item__content {
  padding: 0 5px 6px 5px;
}
</style>