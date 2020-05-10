<template>
<div class="tab-control">
<div class="tab-control-item" :class="{active:index===currentIndex}" v-for="(item,index) in title" :key="index" @click="itemclick(index)">
    <span>{{item}}</span>
</div>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    itemclick (index) {
      this.currentIndex = index
      this.$emit('tabclick', index)
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  }

}
</script>

<style scpoed>
.tab-control-item{
flex: 1;
}
.tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
}
.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom: 3px solid var(--color-tint);
}
.tab-control-item span{
    padding: 5px;
}
</style>
