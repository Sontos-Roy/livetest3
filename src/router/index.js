import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; 
import Menu from '../views/Menu.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;