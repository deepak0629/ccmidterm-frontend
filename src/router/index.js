import Vue from 'vue'
import Router from 'vue-router'
import displayten from '@/views/displayten.vue'
import upload from '@/views/upload.vue'
import login from '@/views/login.vue'
import signup from '@/views/signup.vue'
import store from '../store'
import dashboard from '@/views/dashboard.vue'


Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '/',
      name: 'displayten',
      component: displayten
    },
    {
      path: '/searchhsnum',
      name: 'searchhsnum',
      component: displayten
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/login',
      name: 'login',
      component: login
     },
     {
       path: '/signup',
       name: 'signup',
       component: signup
     },
     {
       path: '/dashboard',
       name: 'dashboard',
       component: dashboard
     }
  ]
})
router.beforeEach(async (to, _, next) => {
  if (to.path === '/login' || to.path === '/signup' || store.state.appstore.loggedIn) {
    return next()
  }
  router.push({ name: 'login' })
  Vue.prototype.$notify({
    group: 'notification',
    title: '<span style="font-size:14px"><b><u>Error:</u></b></span>',
    text: `<span style="font-size:14px"><br/><b>Please Login to Continue</b></span>`,
    type: 'error'
  })
})

export default router