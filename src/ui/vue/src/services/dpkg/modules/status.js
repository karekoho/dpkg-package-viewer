
import { SET_INDEX } from '../mutation-types'

/**
 * @name status
 * @description Explore the contents of /var/lib/dpkg/status 
 */

/**
 *
 * @param {Object} response
 * @throws {Object} response
 *
const resolveStatus = (response) => {
  if (response.ok) {
    return response.json()
  }
  throw response
} */

// initial state
const state = {
  index: new Map() // The package index
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
  }
}

// actions
const actions = {
  /**
   * Get contents of /var/lib/dpkg/status as a list of packages
   * @param {Object {Object}} commit
   * @returns {Promise}
   *
  status ({ commit }) {
    return fetch(WORLD_API_URL + 'countries')
      .then(response => resolveStatus(response))
      .then((countries) => {
        commit(COUNTRY_SET_COUNTRIES, countries)
      })
  }, */

  /**
   * Get country information
   * @param {Object} context
   * @param {String} code
   * @returns {Promise}
   *
  info (context, code) {
    return fetch(WORLD_API_URL + 'country/' + code)
      .then(response => resolveStatus(response))
      .then(response => response[0])
  }, */
  /**
   * Get city information
   * @param {Object} context
   * @param {String} id
   * @returns {Promise}
   *
  city (context, id) {
    return fetch(WORLD_API_URL + 'city/' + id)
      .then(response => resolveStatus(response))
      .then(response => response[0])
  } */
}

export default {
  namespaced: true,
  state, // NOTE: must be exported to mapHelpers to work
  getters,
  mutations,
  actions
}

export { state, getters, mutations, actions, /* resolveStatus,  WORLD_API_URL */ }
