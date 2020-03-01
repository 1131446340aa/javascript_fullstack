<template>
  <div class="main">
    <navbar></navbar>
    <keep-alive>
      <Router-view></Router-view>
    </keep-alive>
  </div>
</template>

<script>
import bookstore from "./bookstore/bookstore";
import navbar from "./common/navbar";
import my from "./my/my";
import book from "./book/book";
export default {
  components: { navbar, bookstore, my },
  destroyed() {
    console.log(112321);
  }
};
</script>

<style lang="stylus" scoped></style>