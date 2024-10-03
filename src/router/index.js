import { createRouter, createWebHistory } from 'vue-router';
//import Home from '../views/Home.vue'; // Asegúrate de tener este componente
//import About from '../views/About.vue'; // Asegúrate de tener este componente
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/LoginVue.vue';
import DashboardVue from '@/components/DashboardVue.vue';
import DashboardVue2 from '@/components/DashboardVue2.vue';
const routes = [
  {
    path: '/',
    name: 'LoginForm',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardVue
  },
  {
    path: '/dashboard2',
    name: 'Dashboard2',
    component: DashboardVue2
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
