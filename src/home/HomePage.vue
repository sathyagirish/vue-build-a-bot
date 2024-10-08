<template>
  <div class="home">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="get-started">
      <router-link to="/build"> Get Started building your first Robot</router-link>
    </div>
  </div>
</template>

<script setup>
// const props = defineProps({
//   msg: { type: String, required: true },
// });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
