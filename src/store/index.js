import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carList: [],
    activeCar: null,
  },
  mutations: {
    setCarList(state, cars) {
      state.carList = cars;
    },
    setActiveCar(state, car) {
      state.activeCar = car;
    },
  },
});
