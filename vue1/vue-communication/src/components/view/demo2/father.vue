<template>
  <div class="container">
    <div>
      <ul class="red" v-for="item in myObj" :key="item.id">
        <li>{{item}}</li>
      </ul>
    </div>
    <child :sendmsg="myMsg" :sednum="mynum" :sendobj="myObj"></child>
  </div>
</template>

<script>
import child from "./child";
export default {
  data() {
    return {
      myObj: [
        {
          id: 1,
          name: "zangsan"
        },
        {
          id: 2,
          name: "lisi"
        }
      ],
      myMsg: "my is msg",
      mynum: 123
    };
  },
  components: {
    child
  }
};
</script>

<style>
</style>