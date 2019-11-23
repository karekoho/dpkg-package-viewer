// const fetch = require('node-fetch'); // NOTE: Uncomment when running nodejs tests
const { Package } = require('./package')

/**
 * Get single field from package source
 * @param {String} lines
 * @param {Number} offset
 * @returns {String}
 */
const getField = (lines, offset = 0) =>
  lines.substring(offset, lines.indexOf('\n')).split(':', 2)

/**
 * Get the field content with trailing space removed
 * @param {String} line
 * @returns {String}
 */
const getFieldValue = line => line.length > 1 ? line[1].substring(1) : ''

/**
 * Create package index
 * @param {String} status
 * @returns {Map}
 */
const createIndex = status =>
  status.split('\n\n').reduce((pkgMap, pkgFields) => {
    try {
      if (!pkgFields) {
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
 * Read package status, e.g. /var/lib/dpkg/status
 * @param {String} path
 * @returns {Promise}
 */
const readStatus = path =>
  new Promise((resolve, reject) => {
    fetch(path)
      .then(response => response.text())
      .then(text => resolve(createIndex(text)))
      .catch(e => reject(e))
  })

module.exports = { getField, getFieldValue, createIndex, readStatus }
