<template>
    <div class="login">
<button v-on:click="btn">跳转</button>
<router-link to="/Login/112"><div>1111</div></router-link>
<!-- <router-link :to="{name:'Login',params:{id:123}}" ><button>登录</button></router-link> -->
<router-view></router-view>
 <div class="login-wrap"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
      btn(){
        this.$router.push({name:'Login',params:{id:123333333222222223}})//编程跳转
      }
    }
}
</script>
<style scoped>
    
</style>
