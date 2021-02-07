// const fetch = require('node-fetch') // NOTE: Uncomment when running nodejs tests
const { Package } = require('./package')
const { getField, getFieldValue } = require('./package-field')

/**
 * Create package index
 * @param {String} status
 * @returns {Set}
 */
const createIndex = status =>
  status.split('\n\n').reduce((pkgMap, pkgFields) => {
    try {
      if (!pkgFields) { // Skip empty entry
        return pkgMap
      }

      return pkgMap.add((new Package(getFieldValue(getField(pkgFields)), pkgFields)).name)
    } catch (e) { // Dismiss any errors when parsing package fields
      console.error(e)
      return pkgMap
    }
  }, new Set())

/**
 * Read package status, e.g. /var/lib/dpkg/status
 * @param {String} path
 * @returns {Promise}
 */
const readStatus = path =>
  new Promise((resolve, reject) => {
    fetch(path)
      .then(response => (response => {
        if (response.ok) {
          return response.text()
        }
        throw new Error(response.statusText)
      })(response))
      .then(text => resolve(createIndex(text)))
      .catch(e => reject(e))
  })

export { createIndex, readStatus }
