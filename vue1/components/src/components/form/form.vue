<template>
  <form action>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "form",
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  created() {
    this.$on("on-form-item-add", filed => {
      if (filed) this.filed.push(filed);
    });
    this.$on("on-form-item-remove", filed => {
      if (filed.porp) this.filed.splice(this.filed.);
    });
  }
};
</script>

<style>
</style>