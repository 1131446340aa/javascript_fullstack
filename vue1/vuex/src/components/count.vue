<template>
  <div class="container">
    <div class="count">
        {{$store.state.count}}
    </div>
    <!-- <button @click="$store.commit('add')">+</button> -->
     <button @click="add">+</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  // computed: {
  //   // mycount () {
  //   //   return this.$store.state.count
  //   // }
  //   mapState: ({
  //     mycount: state => state.count
  //   })
  // }
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['addAction'])
  }
}
</script>

<style>

</style>
