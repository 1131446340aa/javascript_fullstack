<template  >
  <div class="father">
    <h3>这里是父组件</h3>
    <!-- <child>
      <div>
        <div>123</div>
        <div>456</div>
      </div>
    </child> -->
    <!-- <child></child>
      <child></child> -->
    <child >
      <div slot="test">{{a}}</div>
    </child>
  </div>
</template>

<script>
import child from "./children";
export default {
  components: {
    child
  },
  data(){
    return{
      a:3
    }
  }
};
</script>

<style>
</style>
