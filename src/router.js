import { createRouter, createWebHistory } from 'vue-router';
import { useSessionStore } from "@/stores/sessionStore";

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'Login' }
  },
  {
    path: '/login/:lobbyCode?',
    name: 'Login',
    component: () => import('./components/LoginScreen.vue'),
  },
  {
    path: '/lobby/:lobbyCode',
    name: 'Lobby',
    component: () => import('./components/LobbyScreen/LobbyScreen.vue'),
  },
  {
    path: '/lobby/:lobbyCode/triviaTussle/:gameID',
    name: 'TriviaTussle',
    component: () => import('./components/Games/TriviaTussle/TriviaTussleScreen.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const sessionStore = useSessionStore()
  if (to.fullPath.split('/').at(1) === 'Lobby' && !sessionStore.playerID)
    next({ name: 'Login', params: to.params })

  next()
})

export default router;
