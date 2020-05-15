<template>
  <div class="main">
    <div class="top">
      <div class="name">{{reply.commentName}}</div>
    </div>
    <div class="middle">{{reply.content}}</div>
    <div class="bottom">
      <span class="date">{{time}}</span>
      <span class="text" @click="reply1" v-show="text">回复</span>
    </div>
  </div>
</template>

<script>
import { formatTime } from "../../../utils";
export default {
  props: {
    reply: {
      type: Object,
      default() {
        return {};
      }
    },
    text:{
      default:true,
      type:Boolean
    },
    id:{
      default:"0",
      type:String
    }
  },
  data() {
    return {
      time: ""
    };
  },
  methods:{
    reply1(){
      this.$emit('reply',this.id)
    }
  },
  mounted(){
     this.time = formatTime(this.reply.createTime);
  }
};
</script>

<style lang="stylus" scoped>
pre
  white-space pre-wrap /* css-3 */
  white-space -moz-pre-wrap /* Mozilla,since1999 */
  white-space -pre-wrap /* Opera4-6 */
  white-space -o-pre-wrap /* Opera7 */
  word-wrap break-word /* InternetExplorer5.5+ */
.top
  display flex
  justify-content space-between
  height 1.5rem
  line-height 1.5rem
  font-size 1.2rem
  .name
    color purple
  .icons
    margin-right 1rem
    width 3rem
.bottom
  font-size 1.2rem
  color #777
  margin 0.8rem 0rem
  .date
    margin-right 1rem
.middle
  margin-top 0.5rem
  font-size 1.2rem
  line-height 1.6rem
  margin-right 1.5rem
  text-align: justify;
  text-justify: newspaper;
  word-break: break-all;
.text
  color  deeppink
</style>