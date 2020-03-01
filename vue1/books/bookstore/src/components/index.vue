<template>
  <div class="main">
    <navbar></navbar>
    <keep-alive exclude="book">
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import bookstore from "./bookstore/bookstore";
import navbar from "./common/navbar";
import my from "./my/my";
import book from "./book/book";
export default {
  components: { navbar, bookstore, my },
  beforeRouteLeave(to, from, next) {
    to.meta.keepAlive = false;
    next();
  }
};
</script>

<style lang="stylus" scoped></style>