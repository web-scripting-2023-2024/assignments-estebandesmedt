import { createRouter, createWebHistory } from 'vue-router'
import Users from '../components/users.vue'
import Edit from '../components/edit.vue'
import Add from '../components/add.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
})

export default router
