<template>
<div>
    <navBar>
         <div slot="center" class="title">
            <div v-for="(item,index) in titles" :key="index" class="title-item" :class="{active:currentIndex}" @click="titleClick(index)">{{item}}</div>
        </div>
        <div slot="left"><img src="../../../assets/img/common/back.svg" class="back" @click="back"></div>
    </navBar>
</div>
</template>

<script>
import navBar from '../../../components/common/navbar/navBar'
export default {

  components: {
    navBar
  },
  data () {
    return {

      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: false
    }
  },
  methods: {
    titleClick (index) {
      this.currentIndex = true
    },
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title{
    display: flex;
    font-size: 13px;
}
.title-item{
    flex: 1;
}
.active{
    color:var(--color-high-text)
}
.back{
    margin-top: 12px;
}
</style>
