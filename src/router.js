import { createRouter, createWebHistory } from 'vue-router';
import { useSessionStore } from "@/stores/sessionStore";

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

router.beforeEach((to, from, next) => {
  const sessionStore = useSessionStore()
  if (to.fullPath.split('/').at(0) === 'lobby' && !sessionStore.userID)
    next({ name: 'login', params: to.params })

  next()
})

export default router;
