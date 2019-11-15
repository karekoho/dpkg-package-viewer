import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './services/packages'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

/* eslint-disable no-new *
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}) */
