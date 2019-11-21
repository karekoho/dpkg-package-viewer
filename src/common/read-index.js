// const fetch = require('node-fetch'); // Uncomment when running nodejs tests
// TODO: rename dpkg-status
/**
 * TODO: rename --> getField
 * @param {String} entry
 */
const getLine = entry =>
  entry.substring(0, entry.indexOf('\n')).split(':', 2)

/**
 * TODO: rename --> getFieldValue
 * @param {String} line
 */
const getInfo = line => line.length > 1 ? line[1].trimLeft() : ''

/**
 *  TODO: rename --> mapIndex
 * @param {String} packageList
 */
const doNameMap = packageList =>
  packageList.split('\n\n').reduce((map, entry) => {
    return map.set(getInfo(getLine(entry)), entry)
  }, new Map())

/**
 * TODO: rename --> readStatus
 * @param {String} path
 */
const readIndex = path =>
  new Promise((resolve, reject) => {
    fetch(path)
      .then(response => response.text())
      .then(text => resolve(doNameMap(text)))
      .catch(e => reject(e))
  })

module.exports = { getLine, getInfo, doNameMap, readIndex }
