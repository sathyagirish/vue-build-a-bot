<template>
    <div>
  <div class="top-row">
    <div class="top part">
      <img v-bind:src = "selectedRobot.head.imageUrl" alt="head" />
      <button v-on:click = "selectPreviousHead" class="prev-selector">&#9668;</button>
      <button v-on:click = "selectNextHead" class="next-selector">&#9658;</button>
    </div>
  </div>
  <div class="middle-row">
    <div class="left part">
      <img v-bind:src = "selectedRobot.leftArm.imageUrl" alt="left arm" />
      <button v-on:click = "selectPreviousLeftArm" class="prev-selector">&#9650;</button>
      <button v-on:click = "selectNextLeftArm" class="next-selector">&#9660;</button>
    </div>
    <div class="center part">
      <img v-bind:src = "selectedRobot.torso.imageUrl" alt="torso" />
      <button v-on:click = "selectPreviousTorso" class="prev-selector">&#9668;</button>
      <button v-on:click = "selectNextTorso" class="next-selector">&#9658;</button>
    </div>
    <div class="right part">
      <img v-bind:src = "selectedRobot.rightArm.imageUrl" alt="right arm" />
      <button v-on:click = "selectPreviousRightArm" class="prev-selector">&#9650;</button>
      <button v-on:click = "selectNextRightArm" class="next-selector">&#9660;</button>
    </div>
  </div>
  <div class="bottom-row">
    <div class="bottom part">
      <img v-bind:src = "selectedRobot.base.imageUrl" alt="base" />
      <button v-on:click = "selectPreviousBase" class="prev-selector">&#9668;</button>
      <button v-on:click = "selectNextBase" class="next-selector">&#9658;</button>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import parts from '../data/parts';

const availableParts = ref(parts);
const selectedHeadIndex = ref(0);
const selectedLeftArmIndex = ref(0);
const selectedRightArmIndex = ref(0);
const selectedTorsoIndex = ref(0);
const selectedBaseIndex = ref(0);
/* eslint-disable-next-line */
const selectedRobot = computed(() => {
  return {
    head: availableParts.value.heads[selectedHeadIndex.value],
    leftArm: availableParts.value.arms[selectedLeftArmIndex.value],
    torso: availableParts.value.torsos[selectedTorsoIndex.value],
    rightArm: availableParts.value.arms[selectedRightArmIndex.value],
    base: availableParts.value.bases[selectedBaseIndex.value],
  };
});

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

function getPreviousValidIndex(index, length) {
  const decrementedIndex = index - 1;
  return decrementedIndex < length - 1 ? 0 : decrementedIndex;
}

const selectNextHead = () => {
  /* eslint-disable-next-line */
  selectedHeadIndex.value = getNextValidIndex(selectedHeadIndex.value, availableParts.value.heads.length);
  return selectedHeadIndex.value;
};

const selectPreviousHead = () => {
  /* eslint-disable-next-line */
  selectedHeadIndex.value = getPreviousValidIndex(selectedHeadIndex.value, availableParts.value.heads.length);
  return selectedHeadIndex.value;
};

const selectNextLeftArm = () => {
  /* eslint-disable-next-line */
  selectedLeftArmIndex.value = getNextValidIndex(selectedLeftArmIndex.value, availableParts.value.arms.length);
  return selectedLeftArmIndex.value;
};

const selectPreviousLeftArm = () => {
  /* eslint-disable-next-line */
  selectedLeftArmIndex.value = getPreviousValidIndex(selectedLeftArmIndex.value, availableParts.value.arms.length);
  return selectedLeftArmIndex.value;
};

const selectNextRightArm = () => {
  /* eslint-disable-next-line */
  selectedRightArmIndex.value = getNextValidIndex(selectedRightArmIndex.value, availableParts.value.arms.length);
  return selectedRightArmIndex.value;
};

const selectPreviousRightArm = () => {
  /* eslint-disable-next-line */
  selectedRightArmIndex.value = getPreviousValidIndex(selectedRightArmIndex.value, availableParts.value.arms.length);
  return selectedRightArmIndex.value;
};

const selectNextTorso = () => {
  /* eslint-disable-next-line */
  selectedTorsoIndex.value = getNextValidIndex(selectedTorsoIndex.value, availableParts.value.torsos.length);
  return selectedTorsoIndex.value;
};

const selectPreviousTorso = () => {
  /* eslint-disable-next-line */
  selectedTorsoIndex.value = getPreviousValidIndex(selectedTorsoIndex.value, availableParts.value.torsos.length);
  return selectedTorsoIndex.value;
};

const selectNextBase = () => {
  /* eslint-disable-next-line */
  selectedBaseIndex.value = getNextValidIndex(selectedBaseIndex.value, availableParts.value.bases.length);
  return selectedBaseIndex.value;
};

const selectPreviousBase = () => {
  /* eslint-disable-next-line */
  selectedBaseIndex.value = getPreviousValidIndex(selectedTorsoIndex.value, availableParts.value.bases.length);
  return selectedBaseIndex.value;
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
