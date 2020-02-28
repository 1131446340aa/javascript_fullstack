<template>
  <div class="main">
    <div class="search">
      <van-search placeholder="请输入搜索关键词" shape="round" @click="tosearch"/>
    </div>
    <!-- <div class="loading" >
      <van-loading />
    </div> -->
    <scroll :pullup="true" @pulldown="refreshbook" :top="60">
      <div class="content" v-for="(item,keys) in catagory" :key="item">
        <div class="title">
          <div class="left">{{item}}</div>
          <div class="right">更多></div>
        </div>
        <div class="allbook">
          <div class="book_item" v-for="(bookitem,key) in noval[keys]" :key="bookitem.index" @click="tobookinfo(bookitem.book_ids)">
            <div class="image">
              <img v-lazy="bookitem.img" />
            </div>
            <div class="introduce">
              <div class="title">
                <div class="van-multi-ellipsis--l2">{{bookitem.title}}</div>
              </div>
              <div class="saw">{{bookitem.saw/10}}万次观看</div>
              <div class="rating">{{key+1}}</div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
   
  </div>
</template>

<script>
import { booksrore} from "../../network/index";
import scroll from "../common/scroll";
export default {
  data() {
    return {
      catagory: [
        "小说文学  精选好书",
        "历史传记  精选好书",
        "人文社科  精选好书",
        "高分佳作  精选好书"
      ],
      noval: []
    };
  },
  mounted() {
    this.getBook();
  },
  methods: {
    refreshbook() {
     
      this.$toast({
        message: "刷新中...",
        loadingType: "circular",
        type: "loading"
      });

      setTimeout(() => {
        this.getBook();
       
      }, 1000);
    },
    tosearch(){
      this.$router.push({path:"/search"})
    },
    getBook() {
      booksrore(res => {
        // console.log(
        res.content = res.content.sort(() => {
          return Math.random() - 0.5;
        });
        let xiaoshuowenxue = res.content.slice(0, 6);
        res.history = res.history.sort(() => {
          return Math.random() - 0.5;
        });
        let history = res.history.slice(0, 6);
         res.cglz = res.cglz.sort(() => {
          return Math.random() - 0.5;
        });
        let cglz = res.cglz.slice(0, 6);
        res.hightStar_select = res.hightStar_select.sort(() => {
          return Math.random() - 0.5;
        });
        let hightStar_select = res.hightStar_select.slice(0, 6);
        this.noval=[xiaoshuowenxue,history,cglz,hightStar_select]
        // this.data.xiaoshuowenxue = res.content.slice(0,6);
      });
    },
    tobookinfo(bookid){
      console.log(bookid);
      
      this.$router.push({path:'/bookinfo',query:{bookid:bookid}})
    }
  },
  components: {
    scroll
  }
};
</script>

<style lang="stylus" scoped>
.loading
  text-align center
  margin-top 48vh
.title
  display flex
  justify-content space-between
  margin 15px 10px
  .left
    font-weight 700
    font-size 16px
    line-height 16px
  .right
    font-size 12px
    line-height 12px
.book_item
  display flex
  margin-bottom 10px
  .image
    width 15vw
    height 23vw
    img
      width 15vw
      height 23vw
  &:nth-child(2n)
    margin-left 30px
  .introduce
    width 25vw
    .title
      font-size 14px
      margin 0 0 0 10px
      height 10vw
    .saw
      font-size 10px
      margin 0 0 0 10px
      color #909399
      height 7vw
      line-height 7vw
.allbook
  display flex
  flex-wrap wrap
  margin 0 10px
.rating
  margin 0 0 0 10px
  color #606266
</style>