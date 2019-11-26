// const fetch = require('node-fetch') // NOTE: Uncomment when running nodejs tests
const { Package } = require('./package')
const { getField, getFieldValue } = require('./package-field')

/**
 * Create package index
 * @param {String} status
 * @returns {Map}
 */
const createIndex = status =>
  status.split('\n\n').reduce((pkgMap, pkgFields) => {
    try {
      if (!pkgFields) { // Skip empty entry
        return pkgMap
      }

      const name = getFieldValue(getField(pkgFields))
      return pkgMap.set(name, new Package(name, pkgFields))
    } catch (e) { // Dismiss any errors when parsing package fields
      console.error(e)
      return pkgMap
    }
  }, new Map())

/**
 *
 * @param {Response} res
 * @returns {Promise}
 * @throws {Error}
 */
const resolveStatus = response => {
  if (response.ok) {
    return response.text()
  }

  throw new Error(response.statusText)
}

/**
 * Read package status, e.g. /var/lib/dpkg/status
 * @param {String} path
 * @returns {Promise}
 */
const readStatus = path =>
  new Promise((resolve, reject) => {
    fetch(path)
      .then(response => resolveStatus(response))
      .then(text => resolve(createIndex(text)))
      .catch(e => reject(e))
  })

export { createIndex, readStatus }
