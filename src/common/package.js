/**
 * Display dpkg package info
 */
class Package {
  constructor (name, info) {
    this._info = {
      package: name,
      depends: ['foo', 'bar'],
      description: 'null'

    } // TODO: parse info to object
  }

  /**
   *
   */
  get info () { return this._info }
}

export { Package }
