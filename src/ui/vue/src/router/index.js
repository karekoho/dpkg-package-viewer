import Vue from 'vue'
import VueRouter from 'vue-router'
import PackageView from '../components/package/package-view'
import PackageInfo from '../components/package/package-info'
import NotFound from '../components/common/not-found'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: PackageView
  },
  {
    path: '/package/:name',
    name: 'package',
    component: PackageInfo,
    props: true
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
