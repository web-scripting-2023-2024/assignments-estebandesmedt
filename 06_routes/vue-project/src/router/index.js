import { createRouter, createWebHistory } from 'vue-router'
import Hardware from '../views/Hardware.vue'
import Home from '../views/Home.vue'
import Networks from '../views/Networks.vue'
import Software from '../views/Software.vue'
import NotFound from '../views/404.vue'
import Events from '../views/Events.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hardware',
      name: 'Hardware',
      component: Hardware
    },
    {
      path: '/networks',
      name: 'Networks',
      component: Networks
    },
    {
      path: '/software',
      name: 'Software',
      component: Software
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
  ]
})

export default router
