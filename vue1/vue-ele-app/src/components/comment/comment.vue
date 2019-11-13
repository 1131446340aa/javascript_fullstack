<template>
<div id="comment">
    <commentRating :seller="seller"></commentRating>
</div>
</template>

<script>
import commentRating from './childcomps/commentRating'
export default {
  props: {
    seller: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    commentRating
  }
}
</script>

<style>

</style>
