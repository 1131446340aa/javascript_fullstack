<template>
<div id="detail">
    <detailNavBar>

    </detailNavBar>
    <detailSwapper :topimages="topimages"></detailSwapper>
</div>

</template>

<script>
import detailNavBar from './childComps/detailNavBar'
import {getDetail} from '../../network/detail'
import detailSwapper from './detailSwapper'
export default {
  data () {
    return {
      iid: null,
      topimages: []
    }
  },
  created () {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      this.topimages = res.result.itemInfo.topImages
      console.log(this.topimages)
    })
  },
  components: {detailNavBar, detailSwapper}
}
</script>

<style scpoed>

</style>
