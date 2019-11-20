/**
 *
 * @param {String} nameAndVersion
 */
const stripVersion = nameAndVersion => {
  const indexEnd = nameAndVersion.indexOf('(')
  return nameAndVersion.substring(0, indexEnd < 0 ? nameAndVersion.length : indexEnd).trimRight()
}

/**
 *
 * @param {String} line
 */
const readDeps = line =>
  line.split(',')
    .map(a => a.split('|'))
    .map(a => a.map(a => stripVersion(a).trimLeft()))
    .flat()

/**
 *
 * @param {String} source
 * @param {Package} self
 */
const readInfo = (source, self) =>
  source.split('\n')
    .reduce((self, line) => {
      const field = line.split(':')

      if (field[0] === 'Depends') {
        const deps = readDeps(field[1])
        self._depends = new Set(deps.map(name => (new Package(name, null, self)).name))
      } else if (field[0] === 'Description') {
        self._description = field[1].trimLeft()
      }

      self._isAvailable = true
      return self
    }, self)

/**
 * The Package class
 */
class Package {
  /**
   * If package with the name already created, return existing instance.
   * Otherwise return new instance.
   * @param {String} name Package name
   * @param {String} source Unparsed package information
   * @param {Package} dependent A package that depends on this one
   */
  constructor (name, source, dependent) {
    const cached = Package.instance.has(name)
    const self = cached ? Package.instance.get(name) : this

    if (!name) {
      throw new Error('Package name not given')
    }

    if (source && self._isAvailable === undefined) { // Do not parse more than once
      self._name = name
      readInfo(source, self)
    } else if (dependent) {
      self._name = name

      if (!self._revDepends) {
        self._revDepends = new Set()
      }
      self._revDepends.add(dependent.name)
    }

    if (!cached) {
      Package.instance.set(name, self)
    }

    return self
  }

  /**
   * @returns Package name
   */
  get name () {
    return this._name
  }

  /**
   * @returns Package description
   */
  get description () {
    return this._description || null
  }

  /**
   *  @returns Array of package dependencies
   */
  get depends () {
    return this._depends ? Array.from(this._depends.values()) : []
  }

  /**
   * @returns Array of package reverse dependencies
   */
  get reverseDepends () {
    return this._revDepends ? Array.from(this._revDepends.values()) : []
  }

  /**
   * @returns Package is known by the system, i.e. is listed /var/lib/dpkg/status
   */
  get isAvaillable () {
    return this._isAvailable === true
  }
}

/**
 * Cache instances of Package by name
 */
Package.instance = new Map()

module.exports = { Package }
