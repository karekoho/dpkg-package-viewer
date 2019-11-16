/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './services/dpkg'
import PackageView from './components/package-view'
import Info from './components/package/info'

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    component: PackageView,
    children: [
      {
        path: 'package/:name',
        name: 'package',
        component: Info,
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')