import { readDependencies, getFieldValue } from './package-field'

/**
 * The Package class
 */
class Package {
  /**
   * If package with the name already created, return an existing instance.
   * Otherwise return new instance.
   *
   * If called with Package (name, source, undefined)
   *  --> try to parse the source text
   *  --> if dependency found, set dependency = Package (name, undefined, this)
   *    --> dependency sets caller as reverse dependency
   *
   * @param {String} name Package name
   * @param {String} source Unparsed package information
   * @param {Package} dependent A package that depends on this one
   */
  constructor (name, source, dependent) {
    const isCached = Package.instance.has(name)
    const self = isCached ? Package.instance.get(name) : this

    if (!name) {
      throw new Error('Package name not given')
    }

    if (source && self._isAvailable === undefined) { // Do not parse more than once
      self._name = name
      mapFields(source, self)
    } else if (dependent) {
      self._name = name

      if (self._reverseDepends === undefined) {
        self._reverseDepends = new Set()
      }
      self._reverseDepends.add(dependent.name)
    }

    if (!isCached && (self._isAvailable || dependent instanceof Package)) { // Do not cache packages that are not from index
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
    return typeof this._description === 'string' ? this._description : null
  }

  /**
   * @returns Array<Array<String>> of package dependencies with alternatives
   */
  get depends () {
    return this._dependencyList instanceof Array ? this._dependencyList : []
  }

  /**
   * @returns Array<String> of package reverse dependencies
   */
  get reverseDepends () {
    return this._reverseDepends instanceof Set ? Array.from(this._reverseDepends.values()).sort() : []
  }

  /**
   * @returns Package is known by the system, i.e. is listed in /var/lib/dpkg/status
   */
  get isAvailable () {
    return this._isAvailable === true
  }
}

/**
 * Map information fields to a Package object
 * @param {String} source
 * @param {Package} pkg
 */
const mapFields = (source, pkg) =>
  source.split('\n')
    .reduce((self, line) => {
      const field = line.split(':')

      if (field[0] === 'Depends') {
        self._dependencyList = readDependencies(field[1])
        self._depends = new Set(self._dependencyList.flat().map(name => (new Package(name, null, self)).name))
      } else if (field[0] === 'Description') {
        self._description = getFieldValue(field)
      }

      self._isAvailable = true // Package is parsed from source text, so it is availlable
      return self
    }, pkg)

/**
 * Cache instances of Package by name
 */
Package.instance = new Map()

export { Package }
