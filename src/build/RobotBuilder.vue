<template>
  <div>
    <button class="add-to-cart" v-on:click="addToCart">Add to cart</button>
    <div class="top-row">
      <div class="top part">
        <div class="robot-name">
          {{ selectedRobot.head.title }}
          <span v-if="selectedRobot.head.onSale" class="sale"> On Sale! </span>
        </div>
        <PartSelector :parts="availableParts.heads" />
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <PartSelector :parts="availableParts.arms" />
      </div>
      <div class="center part">
        <PartSelector :parts="availableParts.torsos"/>
      </div>
      <div class="right part">
        <PartSelector :parts="availableParts.arms"/>
      </div>
    </div>
    <div class="bottom-row">
      <PartSelector :parts="availableParts.bases" :selectedPartIndex="selectedRobot.base" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import parts from '../data/parts';
import PartSelector from './PartSelector.vue';

const availableParts = ref(parts);
const cart = ref([]);
/* eslint-disable-next-line */
const selectedRobot = computed(() => {
  return {
    head: {},
    leftArm: {},
    torso: {},
    rightArm: {},
    base: {},
  };
});

const addToCart = () => {
  const robot = selectedRobot.value;
  const robotCost = robot.head.cost +
    robot.base.cost + robot.leftArm.cost + robot.rightArm.cost +
    robot.torso.cost;
  cart.value.push([robot, robotCost]);
};

</script>

<style>
.part {
  position: relative;
  width: 200px;
  height: 200px;
  border: 3px solid #aaa;
}

.part img {
  width: 200px;
}

.top-row {
  display: flex;
  justify-content: space-around;
}

.middle-row {
  display: flex;
  justify-content: center;
}

.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}

.top {
  border-bottom: none;
}

.left {
  border-right: none;
}

.right {
  border-left: none;
}

.left img {
  transform: rotate(-90deg);
}

.right img {
  transform: rotate(90deg);
}

.bottom {
  border-top: none;
}

.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 206px;
}

.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 206px;
}

.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}

.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 179px;
  height: 25px;
}

.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 179px;
  height: 25px;
}

.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 179px;
  height: 25px;
}

.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 179px;
  height: 25px;
}

.right .next-selector {
  right: -3px;
}
</style>
