<template>
  <div class="login">
    <div class="login-wrap">
      <h2>xxx管理系统</h2>
      <el-input v-model="user" placeholder="请输入内容" class="user int"></el-input>
      <el-input placeholder="请输入密码" v-model="password" show-password class="pwd int"></el-input>
      <el-button type="primary" class="int" @click="login">登录</el-button>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.user !== '' && this.password !== '') {
        localStorage.setItem('name', this.user)
        this.$router.push('/main')
      } else {
        this.$message.error('请输入密码或者用户名')
      }
    }
  }
}
</script>

<style>
.login {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
}
.login-wrap {
  width: 400px;
  height: 350px;
  text-align: center;
  box-shadow: 0 0 10px #aaaaaa;
  border-radius: 10px;
}
.int {
  width: 80%;
  margin: 0 auto;
  display: block;
  margin-bottom: 30px;
}
</style>
