import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',name: 'home', component: HomeView, },
    
    { path: '/beques', name: 'beques',  
      component: () => import('../views/BequesView.vue'), props: true},

    { path: '/beques/:centres', name: 'beques',  
      component: () => import('../views/CentresView.vue'), props: true},

    { path: '/beques/:centres/:detall', name: 'beques',  
      component: () => import('../views/DetallBecaView.vue'), props: true }
  ],
})

export default router
