<template>
  <div class="tabBar-item" @click="tabBarClick">
    <div v-if="!Active">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-active-icon"></slot>
    </div>
    <div :class="{active:Active}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String
  },
  computed: {
    Active () {
      return this.$route.path === this.path
    }
  },

  methods: {
    tabBarClick () {
      if (this.$route.path !== this.path) {
        this.$router.replace(this.path)
      }
    }
  }
}
</script>

<style>
.tabBar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
 height: 49px;
}
.tabBar-item img {
  width: 24px;
  height: 24px;
   vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
.active{
  color: red;
}
</style>
