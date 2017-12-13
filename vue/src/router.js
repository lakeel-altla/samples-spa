import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '@/components/Timeline'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/timeline',
      component: Timeline
    }
  ]
})
