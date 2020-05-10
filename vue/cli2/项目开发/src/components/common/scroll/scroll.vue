<template>
<div class="wrapper" ref="wrapper">
    <div class="content">
        <slot>
        </slot>
    </div>
</div>
</template>

<script>
import BSscroll from 'better-scroll'
export default {
  props: {
    ptoType: {
      type: Number,
      default () {
        return 0
      }
    },
    pullingUp: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  mounted () {
    this.scroll = new BSscroll(this.$refs.wrapper, { probeType: this.proType,
      pullUpLoad: this.pullingUp,
      click: true})

    this.scroll.on('scroll', (pos) => {
    //   console.log(pos)
      this.$emit('scroll', pos)
    })
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  data () {
    return {
      scroll: null

    }
  },
  methods: {
    finishPullUp () {
      this.scroll.finishPullUp()
    },
    refresh () {
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
