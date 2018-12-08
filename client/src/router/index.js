import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import adminRegistration from '@/components/adminRegistration'
import login from '@/components/login'
import dashboard from '@/components/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },

       {
      path: '/adminRegistration',
      name: 'adminRegistration',
      component: adminRegistration
    },

    {
      path: '/login',
      name: 'login',
      component: login
    },

    {

    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
    }
  ] 
})
