import Vue from 'vue';
import VueRouter from 'vue-router';
//import App from './App.vue';
//import router from './router';
import store from './services/dpkg';
import PackageView from './components/package-view.vue';
import Info from './components/package/info';

Vue.config.productionTip = false;

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: PackageView },
  { path: '/package', component: Info }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  router,
  store,
  render: h => h(PackageView),
}).$mount('#package-view');

/* eslint-disable no-new *
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}) */
