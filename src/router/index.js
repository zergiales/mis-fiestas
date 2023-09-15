/* donde se encuentra todas las rutas de cada vista que se muestra en la app */
import Vue from 'vue';
import VueRouter from 'vue-router';
/* ruta de inicio y registro  */
import Login from '../views/LoginView.vue';
import Registro from '../views/RegisterView.vue';
import Home from '../views/HomeView.vue';
import Events from '../views/EventsView.vue';
import Error from '../views/ErrorView.vue';

Vue.use(VueRouter);
// main component
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/registro',
    name: 'register',
    component: Registro,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
    {
    path: '/events',
    name: 'Events',
    component: Events,
  },

  /* vista error 404 not found */
  {
    path: '/*',
    name: 'error-404',
    component: Error,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
