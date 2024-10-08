import { defineStore } from 'pinia';
import { ref } from 'vue';

const useCartStore = defineStore('cart', () => {
  const cart = ref([]); // property
  // return store properties, methods, computed properties
  return {
    cart,
  };
});

export default useCartStore;
