<template>
  <div class="car__outer">
    <div class="car__inner">
      <h2>Объекты</h2>
      <div class="search">
        <input
          type="text"
          placeholder="Поиск машин"
          @keyup="getSearch($event)"
        />
      </div>
      <div class="car__list" v-if="carView.length > 0">
        <div
          class="car__item"
          :class="{ active: activeCarIndex == index }"
          v-for="(car, index) in carView"
          v-bind:key="car.id"
          @click="onClickCar(car, index)"
        >
          <img src="@/assets/img/car.svg" alt="" />
          <span class="car__item-name">{{ car.name }}</span>
        </div>
      </div>
      <div v-else class="empty-list">Элементы не найдены</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cars",
  data() {
    return {
      carList: [],
      carView: [],
      activeCarIndex: 0,
    };
  },
  mounted() {
    axios
      .get(
        "https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json"
      )
      .then((response) => {
        this.carList = this.carView = response.data;
        this.$emit("getCarList", response.data);
      });
  },
  methods: {
    getSearch(event) {
      this.activeCarIndex = null;
      this.carView = this.carList.filter((car) =>
        car.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
    },
    onClickCar(car, index) {
      this.activeCarIndex = index;
      this.$emit("onClickCar", car);
    },
  },
};
</script>

<style lang="scss">
.car__outer {
  position: fixed;
  right: 0;
  top: 0;
  min-width: 20%;
  height: 95%;
  margin: 20px;
  background-color: #fff;
  border-radius: 10px;

  .search {
    input {
      width: 100%;
      box-sizing: border-box;
      border: none;
      background-color: #f2f2f2;
      height: 30px;
      padding-left: 10px;
      font-size: 18px;
    }
  }

  h2,
  img {
    margin-left: 20px;
  }

  .car {
    &__list {
      margin-top: 5px;
    }
    &__item {
      border-bottom: 1px solid #ededed;
      padding: 10px 0;

      &.active {
        background-color: rgb(238, 238, 238);
      }

      &-name {
        padding-left: 10px;
      }
      &:hover {
        background-color: rgb(238, 238, 238);
        cursor: pointer;
      }
    }
  }
  .empty-list {
    margin-left: 20px;
    padding: 10px 0;
  }
}
</style>
