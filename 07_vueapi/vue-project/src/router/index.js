import { createRouter, createWebHistory } from 'vue-router';
import Trees from '../components/trees.vue';
import Treeinfo from '../components/treeinfo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Trees',
      component: Trees,
    },
    {
      path: '/treeinfo/:id',
      name: 'Treeinfo',
      component: Treeinfo,
    },
  ],
});

export default router;
