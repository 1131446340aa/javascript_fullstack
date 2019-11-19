<template>
  <div id="app">
    <imageZoom
      src="https://img.alicdn.com/imgextra/i1/1714128138/O1CN01m9gkSC29zFkBWX7um_!!1714128138.jpg_430x430q90.jpg"
      bigsrc="https://img.alicdn.com/imgextra/i1/1714128138/O1CN01m9gkSC29zFkBWX7um_!!1714128138.jpg"
    ></imageZoom>
  </div>
</template>

<script>
import imageZoom from "./components/imageZoom";

export default {
  name: "App",
  components: {
    imageZoom
  },

  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
