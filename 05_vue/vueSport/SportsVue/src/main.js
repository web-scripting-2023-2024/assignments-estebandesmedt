import './assets/main.css'
import UserForm from '@/components/UserForm.vue';

import { createApp } from 'vue'
import App from './App.vue'

const routes = [
    {
      path: '/user-form',
      name: 'UserForm',
      component: UserForm,
    },
  ];

createApp(App).mount('#app')
export default new VueRouter({
    routes,
  });
