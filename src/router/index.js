import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

 
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(VueRouter)

  const routes = [
    {
      path: '*',
      redirect: '/home',

    },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '@v/Login.vue')
  },
  {
    path: '/idea',
    name: 'Idea',
    component: () => import( '@v/Idea.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
