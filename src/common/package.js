// split to [ { k, v } ]
/**
 * Display dpkg package info
 */
class Package { // a
  constructor (name, info, rdobj) {
    if (Package.instance.has(name)) {
      return Package.instance.get(name)
    }
    this._info = {
      package: name,
      depends: ['b', 'c'], // b -rd-> a, c -rd-> a
      rdepends: ['d', 'e'],
      description: 'null'

    } // TODO: parse info to object
    Package.instance.set(name, this)
  }

  /**
   *
   */
  get info () { return this._info }
}

Package.instance = new Map()

export { Package }
