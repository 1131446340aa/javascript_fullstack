
<template>
  <div>
    <slot name="test">
        {{a}}
    </slot>
  </div>
</template>

<script>
export default {
    data(){
        return{
            a:4
        }
    }
};
</script>

<style>
</style>