import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',name: 'home', component: HomeView, },
    { path: '/beques', name: 'beques',  component: () => import('../views/AboutView.vue'), },
    { path: '/beques/:centres', name: 'beques',  component: () => import('../views/AboutView.vue'), },
    { path: '/beques/:centres/:any', name: 'beques',  component: () => import('../views/AboutView.vue'), },
  ],
})

export default router
