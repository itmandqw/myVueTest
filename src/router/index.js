import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyTest from '@/components/MyTest'
import proList from '@/pages/proList'
import proDetail from '@/pages/proDetail'
import soltParent from '@/pages/soltParent'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'MyTest',
      component: MyTest
    },
    {
      path: '/list',
      name: 'proList',
      component: proList
    },
    {
      path: '/detail:detailID',
      name: 'proDetail',
      component: proDetail
    },
    {
      path: '/solt',
      name: 'soltParent',
      component: soltParent
    }
  ]
})
