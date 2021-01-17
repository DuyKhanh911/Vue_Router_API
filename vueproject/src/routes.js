import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Dashbox from './components/Dashbox.vue';

const routes = [
  { path: '/login', component: Login, name:'Login' },
  { path: '/register', component: Register, name:'Register' },
  { path: '/dashbox', component: Dashbox, name:'Dashbox' }
]

 

export default routes