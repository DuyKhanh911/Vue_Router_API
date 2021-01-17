import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

import routes from './routes.js';

Vue.use(VueRouter)

Vue.config.productionTip = false


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import 'bootstrap/dist/css/bootstrap.min.css';
const router = new VueRouter({
	mode:'history',
  routes 
})

router.beforeEach((to, from, next) => {
	let excluepages= ['/login','/register'];
	let requiredlogin= !excluepages.includes(to.path);
	let users = localStorage.getItem('user');

	if(requiredlogin && !users){
		next({name:'Login'})
	}
	next();
})


new Vue({
	router,	
  render: h => h(App),
}).$mount('#app')
