<template>
  <div id="app">
    <Layer />
    <Cars />
  </div>
</template>

<script>
import Layer from "./components/Layer.vue";
import Cars from "./components/Cars.vue";

export default {
  name: "App",
  components: {
    Layer,
    Cars,
  },
};
</script>

<style lang="scss">
body {
  overflow-y: hidden;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
