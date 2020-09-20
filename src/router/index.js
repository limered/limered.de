import Vue from 'vue';
import VueRouter from 'vue-router';
import Games from '../views/Games.vue';
import GamePage from '../views/GamePage.vue';

Vue.use(VueRouter);

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

const router = new VueRouter({
  routes,
});

export default router;
