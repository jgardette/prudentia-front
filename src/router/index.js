import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VueResource from 'vue-resource'
import Depute from '@/components/depute/Depute'
import DeputeList from '@/components/depute/deputeList/DeputeList'

Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/deputes',
      name: 'DeputeList',
      component: DeputeList
    },
    {
      path: '/depute/:code',
      name: 'Depute',
      component: Depute
    }
  ]
})
