<template>
  <div class="main">
    <van-search shape="round" placeholder="请输入搜索关键词" @click="showsearch" />
    <div class="swipe-item">
      <scroll bottom="5rem" top="6rem" :pullup="true " @scrollToEnd="pullmore" :data="product_left">
        <div class="product-wrapper">
          <div class="item-list">
            <product :product="product_left"></product>
          </div>
          <div class="item-list">
            <product :product="product_right"></product>
          </div>
        </div>
      </scroll>
    </div>
    <div class="add" @click="addproduct">
      <img src="../../../assets/add.jpg" alt />
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '100%' }">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
      <bg></bg>
    </van-popup>
    <!-- <transition name="van-slide-up">
      <div v-show="visible"> </div>
    </transition>-->

    <van-popup v-model="visible1" position="bottom" :style="{ height: '100%' }">
      <publish
        @back="back"
        @finshed="finshed"
        :ispicure="true"
        type="发布商品"
        :price="price"
        placeholder="品牌型号,新旧程度,入手渠道,转手原因....."
      >
        <div class="price-list">
          <div class="icon-left">
            <i class="iconfont icon-jiage color"></i>
          </div>
          <div class="text">价格</div>
          <van-field v-model="price" type="number" />
          <div class="price">￥{{price}}</div>
          <div class="icon-right">
            <i class="iconfont icon-gengduocopy color"></i>
          </div>
        </div>
      </publish>
    </van-popup>
    <bg></bg>
  </div>
</template>

<script>
import { getProduct, getUserinfo } from "../../../../network/index";
import scroll from "../../common/scroll";
import mixin from "../../../mixin";
import product from "../../common/product";
import publish from "../../common/publish";
import bg from "../../common/bg";
export default {
  name: "buy",
  components: {
    scroll,
    product,
    publish,
    bg
  },
  data() {
    return {
      index: 0,
      product_left: [],
      product_right: [],
      active: "0",
      offset: 1,
      visible1: false,
      price: "0",
      show: false,
      value: ""
    };
  },
  created() {
    this.getproductinfo();
    if (!localStorage.userinfo) {
      this.id = localStorage.id;
      getUserinfo(res => {
        if (res.code == 200) {
          this.userinfo = res.data.records;
          localStorage.userinfo = JSON.stringify(this.userinfo);
        }
      }, this.id);
    }
  },
  mixins: [mixin],
  methods: {
    finshed() {
      this.visible1 = false;
      this.$router.go(0);
    },
    onSearch() {
      if (this.value) {
        this.show = false;
        setTimeout(() => {
          this.$router.push({
            path: "/searchDetail",
            query: {
              keywords: this.value
            }
          });
        }, 20);
      }
    },
    onCancel() {
      this.value = "";
      this.show = false;
    },
    showsearch() {
      this.show = true;
    },
    getproductinfo() {
      getProduct(res => {
        if (res.code === 200) {
          res.data.records.forEach((item, key) => {
            if (key % 2 === 0) {
              this.product_left.push(item);
            } else {
              this.product_right.push(item);
            }
          });
        }
      }, this.offset);
    },
    back() {
      this.visible1 = false;
    },
    addproduct() {
      this.visible1 = true;
    },
    pullmore() {
      this.offset = this.offset + 1;
      this.getproductinfo();
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log();
    if (to.name !== "life") {
      to.meta.keepAlive = false;
    }
    next();
  }
};
</script>

<style lang="stylus" scoped>
.van-cell
  padding 0
  line-height 4rem
.van-field__label
  width 4rem
.price-list
  display flex
  margin 0 1rem
  height 4rem
  line-height 4rem
  border-top 1px solid rgba(222, 222, 222, 0.8)
  border-bottom 1px solid rgba(222, 222, 222, 0.8)
  .text
    font-size 1.4rem
    width 9rem
  .color
    color #777
    margin-right 1.5rem
    margin-left 1.5rem
  .price
    flex 1
    color red
    text-align right
.item-list
  flex 1
  margin-right 1rem
  margin-top 1rem
  width 100%
.product-wrapper
  margin-left 1rem
  display flex
.add
  width 3rem
  height 3rem
  border-radius 1.5rem
  overflow hidden
  position fixed
  bottom 6rem
  left 85%
  img
    width 100%
    height 100%
</style>