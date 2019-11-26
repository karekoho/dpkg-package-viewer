
import { readStatus } from '../../../common/dpkg-status'

export const SET_INDEX = '0'
export const RESET_INDEX = '1'

/**
 * @name status
 * @description
 */
// initial state
const state = {
  index: new Map() // List of unique packages, Map<Package>
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
    index = new Map()
  }
}

// actions
const actions = {
  readIndex ({ commit }) {
    const sort = index => Array.from(index.keys()).sort()

    if (state.index.size > 0) {
      return sort(state.index)
    }
    return readStatus('http://localhost:8081') // TODO: read from config file of somekind
      .then(index => {
        commit(SET_INDEX, index)
        return sort(state.index)
      }).catch(error => {
        throw error // Actually useless catch
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
