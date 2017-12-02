import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Home from '@/components/Home'
import myDoll from '@/components/myDoll'
import grabRecord from '@/components/grabRecord'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/myDoll',
      component: myDoll
    },
    {
      path: '/grabRecord',
      component: grabRecord
    }
  ]
})
