<template>
  <div v-if="partsStore.parts">
  <div class="content">
    <div class="preview">
      <CollapsiblSection>
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobot.head.imageUrl" alt="" />
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.leftArm.imageUrl" class="rotate-left" alt="" />
            <img :src="selectedRobot.torso.imageUrl" alt="" />
            <img :src="selectedRobot.rightArm.imageUrl" class="rotate-right" alt="" />
          </div>
          <div class="bottom-row">
            <img :src="selectedRobot.base.imageUrl" alt="" />
          </div>
        </div>
      </CollapsiblSection>
    </div>
    <div class="content">
      <button class="add-to-cart" v-on:click="addToCart">Add to cart</button>
    </div>
    <div class="top-row">
      <div class="top part">
        <div class="robot-name">
          {{ selectedRobot.head.title }}
          <span v-if="selectedRobot.head.onSale" class="sale"> On Sale! </span>
        </div>
        <PartSelector :parts="partsStore.parts.heads" position="top"
          @partSelected="part => selectedRobot.head = part" />
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <PartSelector :parts="partsStore.parts.arms" position="left"
          @partSelected="part => selectedRobot.leftArm = part" />
      </div>
      <div class="center part">
        <PartSelector :parts="partsStore.parts.torsos" position="center"
          @partSelected="part => selectedRobot.torso = part" />
      </div>
      <div class="right part">
        <PartSelector :parts="partsStore.parts.arms" position="right"
          @partSelected="part => selectedRobot.rightArm = part" />
      </div>
    </div>
    <div class="bottom-row">
      <PartSelector :parts="partsStore.parts.bases" position="bottom"
      @partSelected="part => selectedRobot.base = part"
        :selectedPartIndex="selectedRobot.base" />
    </div>
  </div>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">Robot</th>
          <th class="cost">Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartStore.cart" :key="index">
          <td class="robot-title">{{ robot.head.title }}</td>
          <td class="cost">{{ robot.robotCost }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import useCartStore from '@/stores/cartStore';
import usePartsStore from '@/stores/partsStore';
// import parts from '../data/parts';
import PartSelector from './PartSelector.vue';
import CollapsiblSection from '../shared/CollapsibleSection.vue';

// const availableParts = ref(parts);
// const cart = ref([]);
const cartStore = useCartStore(); // use the store
const partsStore = usePartsStore(); // use the store

partsStore.getParts(); // get the parts from the store

/* eslint-disable-next-line */
const selectedRobot = ref({ //initialized selectedRobot
  head: {},
  leftArm: {},
  torso: {},
  rightArm: {},
  base: {},
});

// const handlePartSelected = (part) => { // update selectedRobot
//   console.log('Part selected: ', part);
//   selectedRobot.value[part.type] = part;
// };

const addToCart = () => {
  const robot = selectedRobot.value;
  const robotCost = robot.head.cost +
    robot.base.cost + robot.leftArm.cost + robot.rightArm.cost +
    robot.torso.cost;
  cartStore.cart.push({ ...robot, robotCost }); // mutate the store state
  console.log('Cart: ', cartStore);
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

.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 310px;
  height: 310px;
  padding: 5px;
}

.preview-content {
  border: 1px solid #999;
}

.preview img {
  width: 70px;
  height: 70px;
}

.rotate-right {
  transform: rotate(90deg);
}

.rotate-left {
  transform: rotate(-90deg);
}

.content {
  position: relative;
}

.add-to-cart {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  background-color: #f60;
  color: white;
  border: none;
  cursor: pointer;
}

td,
th {
  padding: 5px;
  text-align: left;
  padding-right: 20px;
}

.cost {
  text-align: right;
}
</style>
