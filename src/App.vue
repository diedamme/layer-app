<template>
  <div id="app">
    <Layer ref="layerComponent" />
    <Cars @onClickCar="onClickCar" @getCarList="getCarList" />
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
  data() {
    return {
      activeCard: null,
    };
  },
  methods: {
    onClickCar(car) {
      this.$refs.layerComponent.onActiveCard(car);
    },
    getCarList(cars) {
      this.$refs.layerComponent.setPointsCars(cars);
    },
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
