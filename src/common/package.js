/**
 * Display dpkg package info
 */
class Package {
  constructor (name, info) {
    this._name = name
    this._info = { name: name } // TODO: parse info to object
  }

  get name () { return this._name }

  get info () { return this._info }
}

export { Package }
