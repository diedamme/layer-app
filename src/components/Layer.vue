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

      <!-- <vl-geoloc @update:position="geolocPosition = $event">
        <template>
          <vl-feature id="position-feature">
            <vl-geom-point
              :coordinates="[84.983311, 56.456511]"
            ></vl-geom-point>
            <vl-style-box>
              <vl-style-icon
                src="../assets/img/car.svg"
                :scale="0.4"
                :anchor="[0.5, 1]"
              ></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc> -->

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-layer-vector>
        <vl-feature id="position-feature">
          <vl-geom-point :coordinates="[84.983311, 56.456511]"></vl-geom-point>
          <vl-style-box>
            <vl-style-icon
              src="../assets/img/car.svg"
              :scale="0.4"
              :anchor="[0.5, 1]"
            ></vl-style-icon>
          </vl-style-box>
        </vl-feature>
      </vl-layer-vector>

      <!-- <vl-feature>
        <vl-geom-point
          class="point"
          :coordinates="[84.9833, 56.4565]"
        ></vl-geom-point>
      </vl-feature> -->
    </vl-map>
    <!-- <div style="padding: 20px">
      Zoom: {{ zoom }}<br />
      Center: {{ center }}<br />
      Rotation: {{ rotation }}<br />
      My geolocation: {{ geolocPosition }}
    </div> -->
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
      center: [84.9833, 56.4565],
      rotation: 0,
      geolocPosition: undefined,
    };
  },
};
</script>
<style scoped lang="scss"></style>
