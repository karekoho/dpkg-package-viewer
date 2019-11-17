/**
 * 
 * @param {String} entry 
 * @param {Number} startPos 
 */
const getLine = entry => 
  entry.substring(0, entry.indexOf('\n')).split(':', 2);

/**
 *
 * @param {String} line 
 */
const getInfo = line => line.length > 1 ? line[1].trimLeft() : '';

/**
 * 
 * @param {String} packageList
 */
const doNameMap = packageList => 
  packageList.split('\n\n').reduce((map, entry) => {
    return map.set(getInfo(getLine(entry)), entry);
  }, new Map());

/**
 * 
 * @param {String} path
 */
const readIndex = path => 
  new Promise((resolve, reject) => {
    try {
      const fs = require('fs');
      resolve(doNameMap(fs.readFileSync(path, 'utf8')));
    } catch(e) {
      reject(e);
    }
  });

module.exports = { getLine, getInfo, doNameMap, readIndex };