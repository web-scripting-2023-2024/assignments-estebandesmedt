import Vue from 'vue'
import VueRouter from 'vue-router'
import Sports from './components/Sports.vue'
import UserForm from './components/userForm.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/sports', component: Sports },
  { path: '/userForm', component: UserForm }
]

const router = new VueRouter({
  routes 
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')