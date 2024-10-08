<template>
  <header>
    <h1>Robot Builder</h1>
    <nav>
      <li class="nav-item">
        <router-link :to="{name: 'Home'}" class="nav-link" active-class="home-active">
          <img class="logo" src="assets/robot-home.png" alt="logo">
          Build a Bot
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'Build'}" class="nav-link" active-class="home-active">
          <img class="logo" src="assets/build-a-bot-logo.png" alt="logo">
          Build
        </router-link>
      </li>
      <router-link :to="{name: 'Cart'}">Cart</router-link>
    </nav>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   <!-- <RobotBuilder /> -->
  <router-view />
</header>
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

.nav-link{
  text-decoration: none;
  color: inherit
}

.nav-item{
  display: inline-block;
  margin-right: 20px;
  font-size: 22px;
  border-right: 1px solid #ccc;
}

.logo {
  vertical-align: middle;
  height: 30px;
}

.active-link {
  color: grey;
}

.home-active {
  color: grey;
}
</style>
