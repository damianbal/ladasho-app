import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ModelIndex from './views/Model/Index.vue'
import ModelCreate from './views/Model/Create.vue'
import ModelBrowse from './views/Model/Browse.vue'
import ModelResourceEdit from './views/Model/Resource/Edit.vue'
import AppIndex from './views/App/Index.vue'
import AppStart from './views/App/Start.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/model/:model',
      name: 'model',
      component: ModelIndex,
      props: true
    },
    {
      path: '/model/:model/create',
      name: 'modelCreate',
      component: ModelCreate,
      props: true
    },
    {
      path: '/model/:model/resources/:page',
      name: 'modelBrowse',
      component: ModelBrowse,
      props: true
    },
    {
      path: '/model/:model/resource/:id',
      name: 'modelResourceEdit',
      component: ModelResourceEdit,
      props: true
    },
    {
      path: '/app',
      name: 'appIndex',
      component: AppIndex,
      props: true
    },
    {
      path: '/start',
      name: 'appStart',
      component: AppStart,
      props: true
    }
  ]
})
