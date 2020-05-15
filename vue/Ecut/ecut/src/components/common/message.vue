<template>
  <div>
    <div class="main" v-for="(item,index) in comment" :key="index">
      <div class="user">
        <div class="avatar">
          <img :src="item.userAvatar" />
        </div>
        <div class="text">
          <div class="name">{{item.commentName}}</div>
          <div class="context">
            <pre>{{item.content}}</pre>
          </div>
          <div class="date" v-if="timeform[index].createtime">
            {{timeform[index].createtime}}
            <span class="reply" @mousedown="reply(item.id)">回复</span>
          </div>
        </div>
      </div>
      <div class="children" v-for="(items,indexs) in item.children" :key="indexs">
        <div class="user user1">
          <div class="avatar">
            <img :src="items.userAvatar" />
          </div>
          <div class="text">
            <div class="name">{{items.commentName}}</div>
            <div class="context">
              <pre><span v-if="item.id!==items.parentId">回复{{items.replyName}}: </span>{{items.content}}</pre>
            </div>
            <div class="date">{{timeform[index].children[indexs]}}</div>
          </div>
        </div>
      </div>
      <van-divider />
    </div>
  </div>
</template>

<script>
import { formatTime } from "../../../utils";
export default {
  name: "message",
  props: {
    comment: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      timeform: []
    };
  },
  methods: {
    reply(pid) {
      this.$emit("reply", pid);
    }
  },
  watch: {
    comment(newval, oldval) {
      if (this.comment) {
        let diff = newval.length - oldval.length;
        this.comment.forEach((item, key) => {
          if (key+diff>=this.comment.length) {
            this.timeform.push({
              createtime: formatTime(Date.parse(item.createTime)),
              children: []
            });
            item.children.forEach(items => {
              this.timeform[key].children.push(
                formatTime(Date.parse(items.createTime))
              );
            });
          }
        });
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.reply
  margin-left 0.5rem
  color deeppink
  font-size 1rem
pre
  margin 0.5rem 0
  white-space pre-wrap /* css-3 */
  white-space -moz-pre-wrap /* Mozilla,since1999 */
  white-space -pre-wrap /* Opera4-6 */
  white-space -o-pre-wrap /* Opera7 */
  word-wrap break-word /* InternetExplorer5.5+ */
.user, .user1
  display flex
  margin 1.5rem 0
  .avatar
    width 2.6rem
    height 2.6rem
    margin-right 1rem
    border-radius 1.3rem
    overflow hidden
    img
      width 2.6rem
      height 2.6rem
  .text
    flex 1
    .name
      height 2.6rem
      line-height 2.6rem
      font-weight 500
      font-size 1.6rem
      color purple
    .context
      line-height 2rem
      font-size 1.6rem
    .date
      font-size 1.2rem
      color #999
  .icon
    height 2.6rem
    width 4rem
    text-align right
    line-height 2.6rem
    margin-right 1rem
.user1
  margin-left 3.6rem
</style>