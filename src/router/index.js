import { createRouter, createWebHistory } from 'vue-router';
//import Home from '../views/Home.vue'; // Asegúrate de tener este componente
//import About from '../views/About.vue'; // Asegúrate de tener este componente
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/LoginVue.vue';
const routes = [
  {
    path: '/',
    name: 'LoginForm',
    component: Login
  },
  /*{
    path: '/about',
    name: 'About',
    component: About
  }*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
