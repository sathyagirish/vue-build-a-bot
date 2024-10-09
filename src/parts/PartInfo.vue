<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>{{ part.description }}</div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import usePartsStore from '@/stores/partsStore';
// import parts from '../data/parts';

const partsStore = usePartsStore();
const part = computed(() => {
  const route = useRoute();
  const { partType, id } = route.params;
  return partsStore[partType].find((individualPart) => individualPart.id === +id);
});
</script>
