import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useCartStore = defineStore('cart', () => {
  const cart = ref([]); // property
  const cartTotal
  = computed(() => cart.value.reduce((prev, cur) => prev + cur.robotCost, 0)); // computed property
  // return store properties(data), methods(actions), computed properties(getters)
  return {
    cart,
    cartTotal,
  };
});

export default useCartStore;
