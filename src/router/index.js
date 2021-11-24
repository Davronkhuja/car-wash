import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Cars from '../Cars'
import Workers from "../Workers";
import Services from "../Services";
import Reports from "../Reports";
import Registration from "../Registration";
import App from '../App'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Registration',
    component: Registration,
  },
  {
    path: '/home',
    name: 'Home',
    component: App,
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars,
  },
  {
    path: '/workers',
    name: 'Workers',
    component: Workers,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports,
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'

})

export default router
