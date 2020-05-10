<template>
  <div class="main">
    <van-search shape="round" placeholder="请输入搜索关键词" />
    <tabbar :index="index" @send="change_index"></tabbar>
    <van-swipe ref="swipe" :show-indicators="false" :stop-propagation="false" @change="change">
      <van-swipe-item>
        <div class="swipe-item">
          <scroll bottom="0px" top="10px">
            <div class="product-wrapper">
              <div class="item-left">
                <div
                  class="item-wrapper"
                  v-for="(item,index) in imgs"
                  :key="index"
                  @click="togoodsDetail"
                >
                  <div class="img">
                    <img :src="item" alt />
                  </div>
                  <div class="text">
                    <div class="title van-multi-ellipsis--l2">蕾丝连衣裙女2020年新款春装收腰名媛气质洋气春款显瘦流行款裙子</div>
                    <div class="price">¥168</div>
                    <div class="user">
                      <div class="avator">
                        <img
                          src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=129409579,2920083752&fm=111&gp=0.jpg"
                        />
                      </div>
                      <div class="name">是黄小天才啊</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item-right">
                <div class="item-wrapper" v-for="(item,index) in imgss" :key="index">
                  <div class="img">
                    <img :src="item" alt />
                  </div>
                  <div class="text">
                    <div class="title van-multi-ellipsis--l2">年年好宿舍床帘蚊帐一体式学生寝室物理遮光上铺下铺男女帘子两用</div>
                    <div class="price">¥ 288.00</div>
                    <div class="user">
                      <div class="avator">
                        <img
                          src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=129409579,2920083752&fm=111&gp=0.jpg"
                        />
                      </div>
                      <div class="name">是黄小可爱啊</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </scroll>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item">
          <scroll bottom="0px" top="10px">
            <div class="product-wrapper">
              <div class="item-left">
                <div
                  class="item-wrapper"
                  v-for="(item,index) in imgs"
                  :key="index"
                  @click="togoodsDetail"
                >
                  <div class="img">
                    <img :src="item" alt />
                  </div>
                  <div class="text">
                    <div class="title van-multi-ellipsis--l2">蕾丝连衣裙女2020年新款春装收腰名媛气质洋气春款显瘦流行款裙子</div>
                    <div class="price">¥168</div>
                    <div class="user">
                      <div class="avator">
                        <img
                          src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=129409579,2920083752&fm=111&gp=0.jpg"
                        />
                      </div>
                      <div class="name">是黄小天才啊</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item-right">
                <div class="item-wrapper" v-for="(item,index) in imgss" :key="index">
                  <div class="img">
                    <img :src="item" alt />
                  </div>
                  <div class="text">
                    <div class="title van-multi-ellipsis--l2">年年好宿舍床帘蚊帐一体式学生寝室物理遮光上铺下铺男女帘子两用</div>
                    <div class="price">¥ 288.00</div>
                    <div class="user">
                      <div class="avator">
                        <img
                          src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=129409579,2920083752&fm=111&gp=0.jpg"
                        />
                      </div>
                      <div class="name">是黄小可爱啊</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </scroll>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item">
          <scroll bottom="0px" top="10px">
            <div class="product-wrapper">
              <div class="item-left">
                <div class="item-wrapper" v-for="(item,index) in imgs" :key="index">
                  <div class="img">
                    <img :src="item" alt />
                  </div>
                  <div class="text">
                    <div class="title van-multi-ellipsis--l2">蕾丝连衣裙女2020年新款春装收腰名媛气质洋气春款显瘦流行款裙子</div>
                    <div class="price">¥168</div>
                    <div class="user">
                      <div class="avator">
                        <img
                          src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=129409579,2920083752&fm=111&gp=0.jpg"
                        />
                      </div>
                      <div class="name">是黄小天才啊</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item-right">
                <div class="item-wrapper" v-for="(item,index) in imgss" :key="index">
                  <div class="img">
                    <img :src="item" alt />
                  </div>
                  <div class="text">
                    <div class="title van-multi-ellipsis--l2">年年好宿舍床帘蚊帐一体式学生寝室物理遮光上铺下铺男女帘子两用</div>
                    <div class="price">¥ 288.00</div>
                    <div class="user">
                      <div class="avator">
                        <img
                          src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=129409579,2920083752&fm=111&gp=0.jpg"
                        />
                      </div>
                      <div class="name">是黄小可爱啊</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </scroll>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item">
          <scroll bottom="0px" top="10px">
            <div class="product-wrapper">
              <div class="item-left">
                <div class="item-wrapper" v-for="(item,index) in imgs" :key="index">
                  <div class="img">
                    <img :src="item" alt />
                  </div>
                  <div class="text">
                    <div class="title van-multi-ellipsis--l2">蕾丝连衣裙女2020年新款春装收腰名媛气质洋气春款显瘦流行款裙子</div>
                    <div class="price">¥168</div>
                    <div class="user">
                      <div class="avator">
                        <img
                          src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=129409579,2920083752&fm=111&gp=0.jpg"
                        />
                      </div>
                      <div class="name">是黄小天才啊</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item-right">
                <div class="item-wrapper" v-for="(item,index) in imgss" :key="index">
                  <div class="img">
                    <img :src="item" alt />
                  </div>
                  <div class="text">
                    <div class="title van-multi-ellipsis--l2">年年好宿舍床帘蚊帐一体式学生寝室物理遮光上铺下铺男女帘子两用</div>
                    <div class="price">¥ 288.00</div>
                    <div class="user">
                      <div class="avator">
                        <img
                          src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=129409579,2920083752&fm=111&gp=0.jpg"
                        />
                      </div>
                      <div class="name">是黄小可爱啊</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </scroll>
        </div>
      </van-swipe-item>
    </van-swipe>
    <div class="bg"></div>
  </div>
</template>

<script>
import scroll from "../../common/scroll";
import tabbar from "../../common/tabbar";
import { classTable } from "../../../../network/index";
export default {
  components: {
    scroll,
    tabbar
  },
  data() {
    return {
      index: 0,
      imgs: [
        "https://img.alicdn.com/imgextra/i1/2091604761/TB2hr83ihtmpuFjSZFqXXbHFpXa_!!2091604761.jpg_760x760Q50s50.jpg",
        "https://img.alicdn.com/imgextra/i1/2091604761/TB2hr83ihtmpuFjSZFqXXbHFpXa_!!2091604761.jpg_760x760Q50s50.jpg",
        "https://img.alicdn.com/imgextra/i1/2091604761/TB2hr83ihtmpuFjSZFqXXbHFpXa_!!2091604761.jpg_760x760Q50s50.jpg",
        "https://img.alicdn.com/imgextra/i1/2091604761/TB2hr83ihtmpuFjSZFqXXbHFpXa_!!2091604761.jpg_760x760Q50s50.jpg",
        "https://img.alicdn.com/imgextra/i1/2091604761/TB2hr83ihtmpuFjSZFqXXbHFpXa_!!2091604761.jpg_760x760Q50s50.jpg",
        "https://img.alicdn.com/imgextra/i1/2091604761/TB2hr83ihtmpuFjSZFqXXbHFpXa_!!2091604761.jpg_760x760Q50s50.jpg",
        "https://img.alicdn.com/imgextra/i1/2091604761/TB2hr83ihtmpuFjSZFqXXbHFpXa_!!2091604761.jpg_760x760Q50s50.jpg",
        "https://img.alicdn.com/imgextra/i1/2091604761/TB2hr83ihtmpuFjSZFqXXbHFpXa_!!2091604761.jpg_760x760Q50s50.jpg",
        "https://img.alicdn.com/imgextra/i1/2091604761/TB2hr83ihtmpuFjSZFqXXbHFpXa_!!2091604761.jpg_760x760Q50s50.jpg",
        "https://img.alicdn.com/imgextra/i1/2091604761/TB2hr83ihtmpuFjSZFqXXbHFpXa_!!2091604761.jpg_760x760Q50s50.jpg"
      ],
      imgss: [
        " https://img.alicdn.com/imgextra/i1/1135986893/O1CN01QWVoDk20n2aI1NQhO_!!0-item_pic.jpg_430x430q90.jpg",
        " https://img.alicdn.com/imgextra/i1/1135986893/O1CN01QWVoDk20n2aI1NQhO_!!0-item_pic.jpg_430x430q90.jpg",
        " https://img.alicdn.com/imgextra/i1/1135986893/O1CN01QWVoDk20n2aI1NQhO_!!0-item_pic.jpg_430x430q90.jpg",
        " https://img.alicdn.com/imgextra/i1/1135986893/O1CN01QWVoDk20n2aI1NQhO_!!0-item_pic.jpg_430x430q90.jpg",
        " https://img.alicdn.com/imgextra/i1/1135986893/O1CN01QWVoDk20n2aI1NQhO_!!0-item_pic.jpg_430x430q90.jpg",
        " https://img.alicdn.com/imgextra/i1/1135986893/O1CN01QWVoDk20n2aI1NQhO_!!0-item_pic.jpg_430x430q90.jpg",
        " https://img.alicdn.com/imgextra/i1/1135986893/O1CN01QWVoDk20n2aI1NQhO_!!0-item_pic.jpg_430x430q90.jpg",
        " https://img.alicdn.com/imgextra/i1/1135986893/O1CN01QWVoDk20n2aI1NQhO_!!0-item_pic.jpg_430x430q90.jpg",
        " https://img.alicdn.com/imgextra/i1/1135986893/O1CN01QWVoDk20n2aI1NQhO_!!0-item_pic.jpg_430x430q90.jpg",
        " https://img.alicdn.com/imgextra/i1/1135986893/O1CN01QWVoDk20n2aI1NQhO_!!0-item_pic.jpg_430x430q90.jpg"
      ],
      active: "0"
    };
  },
  mounted() {
    // console.log(document.body.clientHeight);
    let swipe = document.querySelectorAll(".swipe-item");
    swipe.forEach(item => {
      item.style.height = document.documentElement.clientHeight - 138 + "px";
    });
    classTable((res)=>{console.log(res)},{
        "username": "201720180735",
        "password": "113144",
        "XN": "2019",
        "XQ": "2",
        "ZC": "4"
      }
    )
  },
  methods: {
    change(index) {
      this.index = index;
    },
    change_index(index) {
      // console.log(index);
      this.index = index;
      this.$refs.swipe.swipeTo(index);
    },
    togoodsDetail() {
      this.$router.push("/goodsDetail");
    }
  }
};
</script>

<style lang="stylus" scoped>
.aaa
  height 500px
.bg
  position fixed
  width 100vw
  height 100vh
  background-color rgba(229, 229, 229, 0.2)
  z-index -1
.product-wrapper
  margin-left 1rem
  display flex
  .item-left, .item-right
    flex 1
    margin-right 1rem
    margin-top 1rem
    width 100%
    .item-wrapper
      width 100%
      .img
        width 100%
        -webkit-border-top-left-radius 1rem
        -webkit-border-top-right-radius 1rem
        overflow hidden
        img
          width 100%
      .text
        background-color #fff
        -webkit-border-bottom-left-radius 1rem
        -webkit-border-bottom-right-radius 1rem
        .title
          font-size 1.4rem
          font-weight 700
          margin-bottom 0.5rem
          margin-left 0.5rem
        .price
          font-size 16px
          color red
          margin-bottom 0.5rem
          margin-left 0.5rem
        .user
          width 100%
          display flex
          margin-bottom 1.5rem
          .avator
            margin-left 0.3rem
            border-radius 50%
            width 2rem
            height 2rem
            overflow hidden
            img
              width 2rem
              height 2rem
          .name
            height 2rem
            line-height 2rem
            margin-left 0.3rem
            font-size 1.2rem
            color #909399
</style>