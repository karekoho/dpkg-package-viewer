
import { readStatus } from '../../../common/dpkg-status'

export const SET_INDEX = '0'
export const RESET_INDEX = '1'

/**
 * @name status
 * @description
 */
// initial state
const state = {
  index: new Set() // List of unique packages, Map<Package>
}

// getters
const getters = {}

// mutations
const mutations = {
  /**
   * Set the package index
   * @param {Object} state
   * @param {Map} index
   */
  [SET_INDEX] (state, index) {
    state.index = index
  },
  /**
   * Reset package index
   * @param {Set} index
   */
  [RESET_INDEX] ({ index }) {
    index = new Set()
  }
}

// actions
const actions = {
  /**
   * Fetch package index from server
   * @param {Object} commit
   * @returns {Promise}
   */
  readIndex ({ commit }) {
    /**
     * Sort ascending
     * @param {Map} index
     * @returns {Array}
     */
    const sortAsc = index => Array.from(index.keys()).sort()

    if (state.index.size === 0) {
      // Try to fetch packages
      return readStatus('http://localhost:5000')
        .then(index => {
          commit(SET_INDEX, index)
          return sortAsc(state.index)
        })
    }
    return sortAsc(state.index)
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
