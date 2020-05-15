 <template>
  <div class="main">
    <div class="icon">
      <i class="iconfont icon-shoujianxiang fz"></i>
    </div>
    <div class="user-wrapper">
      <div class="avater">
        <el-upload :action="url" :on-success="updateavter" :on-error="error">
          <img :src="userinfo.avatar" />
        </el-upload>
      </div>
      <div class="text">
        <div class="nickname">{{userinfo.username}}</div>
        <div class="schoolid">学号: {{userinfo.studentNumber}}</div>
      </div>
      <div class="moreInfo" @click="showmoreinfo">
        <i class="iconfont icon-gengduocopy color"></i>
      </div>
    </div>
    <div class="line"></div>
    <div class="block-flex-wrapper" v-for="(item,index) in catogry" :key="index">
      <div class="block-flex" @click="itemclick(index)">
        <div class="icon" v-html="icon[index]"></div>
        <div class="main">
          <div class="text">{{item}}</div>
        </div>
        <div class="more">
          <div class="moreInfo">
            <i class="iconfont icon-gengduocopy color"></i>
          </div>
        </div>
      </div>
      <van-divider style="margin:0" />
    </div>
    <div class="line"></div>
    <div class="block-flex" @click="tosetting">
      <div class="icon">
        <i class="iconfont icon-shezhi color" style="color:purple"></i>
      </div>
      <div class="main">
        <div class="text">设置</div>
      </div>
      <div class="more">
        <div class="moreInfo">
          <i class="iconfont icon-gengduocopy color"></i>
        </div>
      </div>
    </div>
    <van-divider style="margin:0" />
    <van-popup v-model="show" position="bottom" :style="{ height: '100%' }">
      <publish @back="back" placeholder="编辑个签,展示我的独特态度。" type="编辑个签" :message1="message"></publish>
    </van-popup>
  </div>
</template>
 
 <script>
import { getUserinfo } from "../../../../network";
import publish from "../../common/publish";
export default {
  name: "my",
  mounted() {
    this.id = localStorage.id;
    this.getuesr();
  },
  data() {
    return {
      catogry: ["空间", "我的物品",'物品收藏', "说说收藏", "关注"],
      icon: [
        '<i class="iconfont icon-kongjian2 color-fz" style="color:deeppink"></i>',
        '<i class="iconfont icon-shangchang color-fz"  style="color:magenta"></i>',
        '<i class="iconfont icon-shoucang1 color-fz"  style="color:orange"></i>',
        '<i class="iconfont icon-shoucang color-fz" style="color:orange"></i>',
        '<i class="iconfont icon-guanzhu color-fz" style="color:red"></i>'
      ],
      id: "",
      userinfo: {},
      show: false,
      message: "",
      url: ""
    };
  },
  methods: {
    getuesr() {
      getUserinfo(res => {
        if (res.code == 200) {
          this.userinfo = res.data.records;
          this.url =
            "http://39.99.254.180:8001/user/avatar/" + this.userinfo.id;
          this.message = this.userinfo.intro || "";
          localStorage.userinfo = JSON.stringify(this.userinfo);
        }
      }, this.id);
    },
    error() {
      this.toast("图片大小或者格式不对");
    },
    itemclick(index) {
      if (index === 4) {
        this.$router.push("/collectUser");
      }
      if (index === 3) {
        this.$router.push("/collectexpress");
      }
       if (index === 2) {
        this.$router.push("/collectProduct");
      }
       if (index === 1) {
        this.$router.push("/product");
      }
      if (index === 0) {
        this.$router.push({ path: "/zore", query: { id: this.userinfo.id } });
      }
    },
    updateavter() {
      this.getuesr();
    },
    back() {
      this.show = false;
    },
    showmoreinfo() {
      this.show = true;
    },

    tosetting() {
      this.$router.push("/setting");
    }
  },
  components: {
    publish
  },
  beforeRouteLeave(to, from, next) {
    if (to.name !== "buy" && to.name !== "life") {
      to.meta.keepAlive = false;
    }
    next();
  }
};
</script>
<style lang="stylus" scoped>
.van-icon
  color black
.button
  padding 0.5rem
  background-color blue
.block-flex
  display flex
  height 5.5rem
  line-height 5.5rem
  font-size 1.6rem
  margin 0 1.5rem
  .icon
    margin-top 0
    font-size 1.8rem
    line-height 5.5rem
    height 5.5rem
    margin-right 1.5rem
  .more
    flex 1
    text-align right
    color #DCDFE6
.icon
  height 3.5rem
  text-align right
  padding-right 1rem
  margin-top 2rem
.fz
  font-size 2rem
.user-wrapper
  display flex
  margin-bottom 2rem
  padding 0 1rem
  .avater
    width 6.5rem
    height 6.5rem
    border-radius 1rem
    overflow hidden
    margin-right 2rem
    img
      width 6.5rem
      height 6.5rem
  .nickname
    height 3.5rem
    line-height 3.5rem
    font-size 2.2rem
  .schoolid
    font-size 1.6rem
    height 3rem
    line-height 4rem
    color #909399
  .moreInfo
    flex 1
    text-align right
    font-size 1.5rem
    color #606266
    margin-top 3.5rem
    height 3rem
    line-height 3rem
    margin-bottom 2rem
    .color
      color #DCDFE6
.line
  width 100%
  height 0.8rem
  background-color #E4E7ED
</style>