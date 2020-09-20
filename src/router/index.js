import { createRouter, createWebHashHistory } from 'vue-router';
import Games from '../views/Games.vue';
import GamePage from '../views/GamePage.vue';

const routes = [
  {
    path: '/',
    name: 'Games',
    component: Games,
  },
  {
    path: '/game/:gamename',
    component: GamePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
