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
 * @param {Array} line
 * @returns {String}
 */
const getFieldValue = line => line.length > 1 ? line[1].substring(1) : ''

/**
 * Remove version number from the package name
 * @param {String} nameAndVersion
 */
const stripVersion = nameAndVersion => {
  const indexEnd = nameAndVersion.indexOf('(')
  return nameAndVersion.substring(0, indexEnd < 0 ? nameAndVersion.length : indexEnd - 1)
}

/**
 * Parse dependencies field
 * @param {String} field
 */
const readDependencies = field =>
  field.split(',')
    .map(a => a.split('|'))
    .map(a => a.map(a => stripVersion(a).substring(1).trimRight()))

export { getField, getFieldValue, stripVersion, readDependencies }
