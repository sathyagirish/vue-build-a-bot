<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   <!-- <RobotBuilder /> -->
  <router-view />

</template>

<script setup>
import { provide, ref } from 'vue';
// import RobotBuilder from './build/RobotBuilder.vue';

const userName = ref('sathya');
provide('userName', userName);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
