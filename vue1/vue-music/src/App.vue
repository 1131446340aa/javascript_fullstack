<template>
  <div id="app">
    <!-- 头部 -->
    <v-header>
      <i class="icon" slot="left-icon">&#xe692;</i>
      <span slot="content">我的音乐</span>
      <router-link to="/user" slot="right-icon">
        <i class="icon">&#xe63c;</i>
      </router-link>
    </v-header>
    <!-- tab -->
    <v-tab></v-tab>
    <router-view/>
    <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import header from '@/components/header'
import sidebar from '@/components/sidebar'
import tab from '@/components/tab'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-sidebar': sidebar,
    'v-tab': tab
  }
}
</script>

<style lang="stylus">
@font-face
  font-family "icon"
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot")
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot?#iefix") format("embedded-opentype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.woff") format("woff"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.svg#iconfont") format("svg")

.icon
  font-family "icon" !important
  font-size 18px
  font-style normal
  color #ffffff
html,body
  line-height 1
  font-family PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif
  user-select none
  -webkit-tap-highlight-color transparent
  background rgba(8, 5, 58, 0.9)
  color #fff
</style>
