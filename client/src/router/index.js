import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },

       {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
