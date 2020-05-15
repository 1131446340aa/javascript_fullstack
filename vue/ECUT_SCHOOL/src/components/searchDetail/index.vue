<template>
  <div class="main">
    <div class="tabbar">
      <div class="icon" @click="back">
        <i class="iconfont icon-fanhui-copy-copy-copy-copy"></i>
      </div>
      <div class="search">
        <van-search v-model="value" placeholder="请输入搜索关键词" @search="tosearch" />
      </div>
    </div>
    <scroll top="6rem">
      <div class="product-wrapper">
        <div class="item-list">
          <product :product="product_left"></product>
        </div>
        <div class="item-list">
          <product :product="product_right"></product>
        </div>
      </div>
      <div class="no-search" v-show="!product_left.length">暂无此商品哦.....</div>
    </scroll>
    <bg></bg>
  </div>
</template>

<script>
import { searchproduct } from "../../../network";
import bg from "../common/bg";
import scroll from "../common/scroll";
import product from "../common/product";
import mixin from "../../mixin";
import back from "../../mixin/back";
export default {
  mounted() {
    this.value = this.$route.query.keywords;
    this.loading();
    this.search();
  },
  data() {
    return {
      value: "",
      product_left: [],
      product_right: []
    };
  },
  components: {
    scroll,
    bg,
    product
  },
  methods: {
    search() {
      searchproduct(res => {
        this.duration = 1;
        this.loading();
        if (res.code == 200) {
          res.data.records.forEach((item, key) => {
            if (key % 2 === 0) {
              this.product_left.push(item);
            } else {
              this.product_right.push(item);
            }
          });
        }
      }, this.value);
    },
    tosearch() {
      if (this.value) {
        this.product_left = [];
        this.product_right = [];
        // this.$router.go(0);
        this.search();
      }
    }
  },
  mixins: [mixin, back]
};
</script>

<style lang="stylus" scoped>
.no-search
  height 10rem
  line-height 10rem
  text-align center
.tabbar
  display flex
  height 5.4rem
  line-height 5.4rem
  .search
    flex 1
  .icon
    padding-left 1.5rem
    padding-right 1rem
    background-color #fff
.product-wrapper
  margin-left 1rem
  display flex
.item-list
  flex 1
  margin-right 1rem
  margin-top 1rem
  width 100%
</style>