<template>
  <div class="vuex">

    <div>{{add13}}</div>
    <button @click="adddely"></button>
    <div>{{counter}}</div>
  </div>
</template>

<script>
import {mapMutations, mapActions, mapGetters, mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['counter']),
    ...mapGetters(['add13'])
  },
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['adddely'])
  }
}
</script>

<style>

</style>
