import { defineStore } from 'pinia';
import { ref } from 'vue';

const usePartsStore = defineStore('parts', () => {
  const parts = ref(null); // property
  const getParts = async () => {
    const response = await fetch('/api/parts');
    parts.value = await response.json();
  };
  return {
    parts,
    getParts,
  };
});

export default usePartsStore;
