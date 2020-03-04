import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Home from './components/home/Home.vue';
import Details from './components/details/Details.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);


const routes = [{
  path: '/',
  component: Home
},{
  path: '/details',
  component: Details
}
]


const router = new VueRouter({
  routes
})



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
