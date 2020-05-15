<template>
  <div class="main">
    <div class="left">
      <div class="swipper">
        <div class="bold">
          <el-carousel height="300px" direction="vertical" :interval="2000">
            <el-carousel-item v-for="item in ImgArr" :key="item">
              <div class="medium">
                <img :src="item" alt />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="about">
          <div class="blog_owner bg1">
            <div class="title">关于博主</div>
            <div class="connect">个人资料:男,九五后,IT男,水瓶座,爱好:中国象棋,</div>
          </div>
          <div class="blog_owner bg2">
            <div class="title">关于博客</div>
            <div class="connect">个人资料:男,九五后,IT男,水瓶座,爱好:中国象棋,</div>
          </div>
        </div>
      </div>

      <div class="main-wz">
        <div class="title">最新文章</div>
        <div
          class="article-item"
          v-for="(item,index) in article"
          :key="index"
          @click="toinfo(item.id)"
        >
          <div class="img">
            <img :src="item.img" alt />
          </div>

          <div class="intro">
            <div class="title1">{{item.title}}</div>
            <div class="detail">{{item.detail}}</div>
            <div class="other">
              <div class="catagry">
                <i class="iconfont icon-biaoqian"></i>
                {{item.catagry}}
              </div>
              <div class="date">
                <i class="iconfont icon-lishi"></i>
                {{
                item.date}}
              </div>
            </div>
            <el-divider></el-divider>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title">最新文章</div>
      <el-divider></el-divider>
      <ul class="wrapper">
        <li
          class="item"
          v-for="(item,index) in article.slice(0,5)"
          :key="index"
          @click="toinfo(item.id)"
        >{{item.title}}</li>
      </ul>
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
import { getIndex } from "../network/http";
export default {
  data() {
    return {
      ImgArr: [
        "http://pic.sc.chinaz.com/files/pic/pic9/202001/zzpic22564.jpg",
        "http://pic.sc.chinaz.com/files/pic/pic9/201910/bpic14045.jpg",
        "http://pic.sc.chinaz.com/files/pic/pic9/201910/zzpic20759.jpg"
      ],
      article: []
    };
  },
  methods: {
    toinfo(key) {
      console.log(1);

      this.$router.push({ path: "/info", query: { key } });
    }
  },
  mounted() {
    this.$http.get("http://localhost:8080/data/article.json").then(res => {
      this.article = res.data.data;
    });
  }
};
</script>
<style lang="less" scoped>
.main {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  .main-wz {
    .title {
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      border-bottom: 2px solid orange;
      margin-top: 20px;
      width: 60vw;
    }
    .article-item {
      padding: 30px 0;
      display: flex;
      .img {
        width: 10vw;
        text-align: center;
        height: 140px;
        line-height: 140px;
        margin-left: 15px;
        margin-right: 30px;
        img {
          width: 100%;
          vertical-align: middle;
          margin-top: 20px;
        }
      }
      .intro {
        width: 100%;
        .other {
          display: flex;
          color: #759b08;
          margin-top: 12px;
          .iconfont {
            margin-right: 12px;
          }
          .icon-biaoqian {
            color: pink;
          }
          .date {
            color: #999;
            margin-left: 14px;
            .icon-lishi {
              color: skyblue;
            }
          }
        }
        .title1 {
          font-weight: bold;
          font-size: 18px;
          line-height: 30px;
          height: 30px;
        }

        .detail {
          width: 50vw;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 24px;
          margin-top: 20px;
          font-size: 14px;
          color: #777;
        }
      }
    }
  }
  .left {
    .swipper {
      display: flex;
      .bold {
        width: 50vw;
        text-align: center;
        .medium {
          img {
            width: 100%;
          }
        }
      }
      .about {
        width: 10vw;
        height: 300px;
        .blog_owner {
          height: 150px;
          padding: 1.5vw;
          box-sizing: border-box;
          .connect {
            color: #b3b3b3;
            line-height: 18px;
            font-size: 12px;
          }
        }
        .bg1 {
          background-color: #fffff7;
          border: 1px solid #ffcc00;
        }
        .bg2 {
          border: 1px solid #cceff5;
          background-color: #fafcfd;
        }
      }
    }
  }
  .right {
    flex: 1;
    background-color: rgba(0, 0, 0, 0);
    padding-left: 50px;
    .title {
      font-size: 20px;
    }
    .wrapper {
      margin-left: 30px;
      .item {
        line-height: 30px;
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>