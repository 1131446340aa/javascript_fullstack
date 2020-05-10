<template>
  <div class="search">
    <div class="head">
      <div>
        <img
          src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png"
          alt
        />
        <input
          type="text"
          confirm-type="search"
          focus="true"
          v-model="words"
          @focus="inputFocus"
          @input="tipsearch"
          @confirm="searchWords"
          placeholder="商品搜索"
        />
        <img
          @click="clearInput"
          class="del"
          src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png"
          alt
        />
      </div>
      <div @click="cancel">取消</div>
    </div>
    <div class="searchtips" v-if="words">
      <div></div>
      <div class="nogoods">数据库暂无此类商品</div>
    </div>
    <div class="history">
      <div class="t">
        <div>历史记录</div>
        <div @click="clearhistory"></div>
      </div>
      <div class="cont">
        <div></div>
      </div>
    </div>
    <div class="history hotsearch">
      <div class="t">
        <div>热门搜索</div>
      </div>
      <div class="cont">
        <div class="active">123</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: ""
    };
  },
  methods: {
    clearhistory() {},
    clearInput() {
      this.words = "";
    },
    cancel() {}
  }
};
</script>

<style lang='less' scoped>
@import "./style";
</style>