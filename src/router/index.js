import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth2: true }
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: Logout,
    meta: { requiresAuth: true }
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.isAuthenticated) {
      next()
    } else {
      next("/Login")
    }
  }else if (to.matched.some(record => record.meta.requiresAuth2)){
    if (!store.state.isAuthenticated) {
      next()
    } else {
      next("/Profile")
    }
  }else {
    next()
  }
})

export default router
