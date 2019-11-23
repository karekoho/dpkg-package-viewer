
import { SET_INDEX, RESET_INDEX } from '../mutation-types'
import { readStatus } from '../../../common/dpkg-status'

/**
 * @name status
 * @description
 */
// initial state
const state = {
  index: null // List of unique packages, Map<Package>
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
  },
  /**
   * Reset index
   * @param {Map} index
   */
  [RESET_INDEX] ({ index }) {
    index = null
  }
}

// actions
const actions = {
  readIndex ({ commit }) {
    const sort = index => Array.from(index.keys()).sort()

    if (state.index) {
      return sort(state.index)
    }
    return readStatus('http://localhost:8081') // TODO: read from config file of somekind
      .then(index => {
        commit(SET_INDEX, index)
        return sort(state.index)
      }).catch(e => {
        throw e // Actually useless catch
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export { state, getters, mutations, actions }
