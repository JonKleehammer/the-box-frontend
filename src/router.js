import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'login' }
  },
  {
    path: '/login/:lobbyCode?',
    name: 'login',
    component: () => import('./components/LoginScreen.vue'),
  },
  {
    path: '/lobby/:lobbyCode',
    name: 'lobby',
    component: () => import('./components/LobbyScreen.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
