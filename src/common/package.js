import { readDependencies } from './package-field'

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
        const deps = readDependencies(field[1])
        self._depends = new Set(deps.map(name => (new Package(name, null, self)).name))
      } else if (field[0] === 'Description') {
        self._description = field[1].substring(1)
      }

      self._isAvailable = true // Package is parsed from source text, so it is availlable
      return self
    }, pkg)

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

      if (!self._revDepends) {
        self._revDepends = new Set()
      }
      self._revDepends.add(dependent.name)
    }

    if (!isCached && (self._isAvailable || dependent instanceof Package)) { // Do not put whatever packages
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
    return this._depends ? Array.from(this._depends.values()).sort() : []
  }

  /**
   * @returns Array of package reverse dependencies
   */
  get reverseDepends () {
    return this._revDepends ? Array.from(this._revDepends.values()).sort() : []
  }

  /**
   * @returns Package is known by the system, i.e. is listed /var/lib/dpkg/status
   */
  get isAvailable () {
    return this._isAvailable === true
  }
}

/**
 * Cache instances of Package by name
 */
Package.instance = new Map()

export { Package }
