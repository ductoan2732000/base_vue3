import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/AppLogin.vue'),
      meta: {
        layout: 'AppLayoutDefault'
      }
    }
  ]
})

export default router
