<template>
  <div class="main">
    <div class="title">课程详情</div>
    <div class="wrapper">
      <van-field class="input" :required="true" v-model="text" label="课程名" input-align="right" />
      <van-field class="input" :required="true" v-model="text1" label="教室" input-align="right" />
      <van-field class="input" v-model="text2" label="老师" input-align="right" />
      <div class="zc">
        <div class="text">上课周数</div>
        <van-checkbox @click="allSelect" v-model="checked" checked-color="#07c160">全选</van-checkbox>
      </div>
      <div
        class="selectweek"
        :class="{selected : selected[index]==true}"
        v-for="(item,index) in 25"
        :key="index"
        @click="weekSelected(index)"
      >{{index+1}}</div>
      <div class="button">
        <div class="button1" @click="cancel">取消</div>
        <div class="button1" style="color:blue" @click="confirm">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      text1: "",
      text2: "",
      checked: false,
      result: "0",
      selected: []
    };
  },
  methods: {
    cancel(){
     this.$emit('cancel')
    },
    confirm(){
    
      if(!this.text || !this.text1){  this.$notify({message:'教室或者课程名还未填入',type:"warning"});}
       else{ this.$emit('confirm',this.text,this.text1,this.text2,this.selected)}
    },
    weekSelected(index) {
      this.selected[index] == true
        ? this.$set(this.selected, index, false)
        : this.$set(this.selected, index, true);
    },
    allSelect() {
      for (let i = 0; i < 25; i++) {
        this.checked == false
          ? (this.selected[i] = true)
          : (this.selected[i] = false);
      }
      this.checked = !this.checked;
    }
  },
  created(){
    this.selected.length=25
  }
};
</script>

<style lang="stylus" scoped>
.button
  display flex
  margin-top 3rem
  .button1
    flex 1
    height 5rem
    background-color rgba(230,230,250,0.4)
    margin 0 2rem
    border-radius 2.5rem
    line-height 5rem
    text-align center

.selectweek
  display inline-block
  color #777
  width 5rem
  height 2.6rem
  border-radius 1.3rem
  margin-right 0.5rem
  margin-bottom 0.8rem
  background-color rgba(220, 220, 220, 0.4)
  text-align center
  line-height 2.6rem
  color #777
.selected
  color #fff
  background-color #1E90FF
.wrapper
  margin 0 1rem
  .zc
    display flex
    justify-content space-between
    font-size 1.4rem
    margin-top 3rem
    margin-bottom 1.5rem
.title
  height 5rem
  line-height 5rem
  font-size 1.8rem
  font-weight 550
  text-align center
  margin-bottom 3rem
.input
  margin-bottom 1rem
  background-color #E4E7ED
  border-radius 0.5rem
</style>