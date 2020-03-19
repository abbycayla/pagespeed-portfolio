import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Landing from './components/landing/Landing.vue';
import Home from './components/home/Home.vue';
import Details from './components/details/Details.vue';
import Login from './components/admin/Login.vue';
import Profile from './components/admin/Profile.vue';
import Projects from './components/admin/Projects.vue';
import EditProject from './components/admin/EditProject.vue';
import AddProject from './components/admin/AddProject.vue';





Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);


const routes = [{

  path: '/',
  component: Landing,
  name: 'landing'
  },{
  path: '/home',
  component: Home
},{
  path: '/details',
  component: Details
},{
  path: '/login',
  component: Login,
  name: 'login'
},{
  path: '/profile',
  component: Profile
},{
  path: '/projects',
  component: Projects
},{
  path: '/edit-project',
  component: EditProject
},{
  path: '/add-project',
  component: AddProject
}
]


const router = new VueRouter({
  routes
})



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
