<template>
  <div class="cars">
    <div class="button-block">
      <button @click="isShowObjects = !isShowObjects">
        <transition name="replace-button" mode="out-in">
          <img
            v-if="isShowObjects"
            src="../assets/img/close.svg"
            alt=""
            key="show"
          />
          <img v-else src="../assets/img/menu.svg" alt="" key="hidden" />
        </transition>
      </button>
    </div>
    <transition name="fade-objects">
      <div v-if="isShowObjects" class="car__outer">
        <div class="car__inner">
          <h2>Объекты</h2>
          <div class="search">
            <input
              type="text"
              placeholder="Поиск машин"
              @keyup="getSearch($event)"
            />
          </div>
          <ul class="car__list" v-if="carView.length > 0">
            <li
              class="car__item"
              :class="{ active: activeCarIndex == index }"
              v-for="(car, index) in carView"
              v-bind:key="car.id"
              @click="onClickCar(car, index)"
            >
              <img src="@/assets/img/car.svg" alt="" />
              <span class="car__item-name">{{ car.name }}</span>
            </li>
          </ul>
          <div v-else class="empty-list">Элементы не найдены</div>
        </div>
      </div>
    </transition>
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
      isShowObjects: true,
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
.button-block {
  position: absolute;
  right: 0px;
  top: 13px;
  z-index: 100;

  button {
    border: none;
    background-color: #fff;
    border-radius: 10px;
    margin: 0;
    padding: 0;
    width: 45px;
    height: 45px;
    overflow: visible;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable `input` types in iOS */
    -webkit-appearance: none;

    &:hover {
      cursor: pointer;
    }
  }
  img {
    width: 30px;
  }
}

.cars {
  position: fixed;
  right: 0;
  top: 0;
  margin: 20px;
}
.car {
  &__outer {
    position: fixed;
    right: 0;
    top: 0;
    height: 95%;
    margin: 20px;
    background-color: #fff;
    border-radius: 10px;
    width: 20%;

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

    h2 {
      margin-left: 20px;
    }

    .car {
      &__list {
        margin-top: 5px;
        padding: 0;
      }
      &__item {
        list-style-type: none;
        border-bottom: 1px solid #ededed;
        padding: 10px 0;
        padding-left: 20px;

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
}

.replace-button-enter-active,
.replace-button-leave-active {
  transition: opacity 0.5s ease-out;
}
.replace-button-enter,
.replace-button-leave-to {
  opacity: 0;
}

.fade-objects-enter-active {
  transition: all 0.5s ease-out;
  .car__inner {
    transition: all 0.4s ease-out;
    transition-delay: 0.2s;
  }
}
.fade-objects-leave-active {
  transition: all 0.5s ease-out;

  .car__inner {
    transition: all 0.2s ease-out;
  }
}

.fade-objects-enter,
.fade-objects-leave-to {
  height: 45px;
  width: 45px;
  margin-top: 33px;

  .car__inner {
    opacity: 0;
  }
}
</style>
