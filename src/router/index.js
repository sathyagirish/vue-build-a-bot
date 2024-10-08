import RobotBuilder from '@/build/RobotBuilder.vue';
import HomePage from '@/home/HomePage.vue';
import ShoppingCart from '@/cart/ShoppingCart.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import PartInfo from '@/parts/PartInfo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
  },
];

export default createRouter({
  linkActiveClass: 'active-link',
  history: createWebHashHistory(),
  routes,
});
