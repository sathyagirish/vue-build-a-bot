import RobotBuilder from '@/build/RobotBuilder.vue';
import HomePage from '@/home/HomePage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

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
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
