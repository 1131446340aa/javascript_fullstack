<template>
  <button :class="'i-button-size'+size"></button>
</template>

<script>
export default {
data(){
    return{
        size:'large'
    }
},
oneof(){}
}
</script>

<style scoped>
.i-button-sizelarge{
    padding: 10px;
}
.i-button-sizesmall{
    padding: 4px -6px;
}
button{
    border: 1px solid orange;
    background-color: yellow;
    color: black;
}
</style>