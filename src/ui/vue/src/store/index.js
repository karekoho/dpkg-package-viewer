import Vue from 'vue'
import Vuex from 'vuex'
import status from './dpkg/modules/status'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    status
  },
  strict: debug
})
