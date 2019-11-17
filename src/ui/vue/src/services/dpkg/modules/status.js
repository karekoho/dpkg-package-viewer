
import { SET_INDEX } from '../mutation-types'
import { readIndex } from '../../../common/read-index'

/**
 * @name status
 * @description Explore the contents of /var/lib/dpkg/status
 */
// initial state
const state = {
  packagelist: null, // The package index
  index: null
}

// getters
const getters = {}

// mutations
const mutations = {
  /**
   * Initialize the package index
   * @param {Object} state
   * @param {Map} index
   */
  [SET_INDEX] (state, index) {
    state.index = index
    state.packagelist = Array.from(index.keys())
  }
}

// actions
const actions = {
  readIndex ({ commit }) {
    if (state.index) {
      return state.packagelist
    }
    return readIndex('http://localhost:8081')
      .then(index => {
        commit(SET_INDEX, index)
        return state.packagelist
      }).catch(e => {
        throw e
      })
  }
  // TODO: resetIndex
}

export default {
  namespaced: true,
  state, // NOTE: must be exported to mapHelpers to work
  getters,
  mutations,
  actions
}

export { state, getters, mutations, actions /* resolveStatus,  WORLD_API_URL */ }
