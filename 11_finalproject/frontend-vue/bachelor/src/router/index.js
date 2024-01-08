import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',      
      component: () => import('../views/About.vue')
    },
    {
      path: '/edit/:id', 
      name: 'edit',
      component: Edit
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue'),      
    }
  ]
})

export default router