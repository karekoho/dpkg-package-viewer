// const fetch = require('node-fetch'); // NOTE: Uncomment when running nodejs tests

/**
 *
 * @param {String} lines
 * @param {Number} offset
 * @returns {String}
 */
const getField = (lines, offset = 0) =>
  lines.substring(offset, lines.indexOf('\n')).split(':', 2)

/**
 *
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
      return pkgFields ? pkgMap.set(getFieldValue(getField(pkgFields)), pkgFields) : pkgMap
    } catch (e) {
      console.error(e)
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
