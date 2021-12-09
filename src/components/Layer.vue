<template>
  <div style="height: 100vh">
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
      style="height: 100%"
    >
      <vl-view
        :zoom.sync="zoom"
        :center.sync="center"
        :rotation.sync="rotation"
      ></vl-view>

      <vl-layer-tile>
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-layer-vector>
        <vl-source-vector :features="features"></vl-source-vector>

        <vl-style-box>
          <vl-style-fill color="white"></vl-style-fill>
          <vl-style-stroke color="red"></vl-style-stroke>
          <vl-style-icon
            :src="require('../assets/img/location-pin.png')"
            :anchor="[0.5, 1]"
            :scale="0.7"
          ></vl-style-icon>
        </vl-style-box>
      </vl-layer-vector>
    </vl-map>
  </div>
</template>

<script>
import Vue from "vue";
import VueLayers from "vuelayers";
import "vuelayers/lib/style.css";

Vue.use(VueLayers);

export default {
  name: "Layer",

  data() {
    return {
      zoom: 17,
      center: [12.492442, 41.89017],
      rotation: 0,
      geolocPosition: undefined,
      features: [],
    };
  },
  methods: {
    onActiveCard(car) {
      this.center = [car.longitude, car.latitude];
    },
    setPointsCars(cars) {
      this.features = cars.map((car) => {
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [car.longitude, car.latitude],
          },
        };
      });
    },
  },
};
</script>
<style scoped lang="scss"></style>
