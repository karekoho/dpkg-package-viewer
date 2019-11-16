import Vue from 'vue';
import Vuex from 'vuex';
import status from './modules/status';
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

/**
 * @name store
 */
export default new Vuex.Store({
  modules: {
    status
  },
  strict: debug
  // plugins: debug ? [createLogger()] : []
});
