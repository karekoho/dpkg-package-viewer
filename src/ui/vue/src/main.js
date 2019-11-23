import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './services/dpkg'
import PackageView from './components/package/view'
import PackageInfo from './components/package/info'
import NotFound from './components/common/not-found'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/',
      name: 'index',
      component: PackageView
    },
    {
      path: 'package/:name',
      name: 'package',
      component: PackageInfo,
      props: true
    }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
