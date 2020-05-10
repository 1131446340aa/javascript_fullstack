<template>
  <div class="search-list">
    <transition-group name="list" tag="ul">
      <li class="search-item" v-for="(item,index) in searches" :key="item" @click="selectItem(item)">
        <span class="text">{{item}}</span>
        <span class="icon-box" @click.stop="deleteOne(index)">
          <i class="icon">&#xe656;</i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    searches: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    selectItem(item){
      this.$emit('select',item)
    },
    deleteOne(index){
      this.$emit('delete',index)
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.search-list
  .search-item
    display flex
    align-items center
    height 40px
    overflow hidden
    &.list-enter-active, &.list-leave-active
      transition all 0.1s
    &.list-enter, &.list-leave-to
      height 0
    .text
      flex 1
      color hsla(0, 0%, 100%, 0.5)
    .icon-box
      .icon
        font-size 18px
        color hsla(0, 0%, 100%, 0.3)
</style>
