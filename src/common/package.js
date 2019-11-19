/**
 *
 * @param {String} nameAndVer
 */
const stripVersion = nameAndVer => {
  const indexEnd = nameAndVer.indexOf('(')
  return nameAndVer.substring(0, indexEnd < 0 ? nameAndVer.length : indexEnd).trimRight()
}

/**
 * "libc6 (>= 2.14), dpkg (>= 1.15.4) | install-info".split(',').map(a => a.split('|')).map(a => a.map(a => a.trimLeft())).flat()
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
 * @param {Object} pkgInfo
 */
// eslint-disable-next-line
const readInfo =  (source, pkgInfo, rdep) =>
  source.split('\n')
    .reduce((pkgInfo, line) => {
      const field = line.split(':')
      if (field[0] === 'Depends') {
        const deps = readDeps(field[1])
        pkgInfo.depends = new Set(deps.map(name => new Package(name, null, rdep)))
      } else if (field[0] === 'Description') {
        pkgInfo.description = field[1].trimLeft()
      }
      return pkgInfo
    }, pkgInfo)

/**
  Package: cpio
  Status: install ok installed
  Priority: required
  Section: utils
  Installed-Size: 328
  Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  Architecture: amd64
  Version: 2.11-7ubuntu3
  Replaces: cpio-mt
  Depends: libc6 (>= 2.14), dpkg (>= 1.15.4) | install-info
  Suggests: libarchive1
  Conflicts: cpio-mt, mt-st (<< 0.6)
  Description: GNU cpio -- a program to manage archives of files
  GNU cpio is a tool for creating and extracting archives, or copying
  files from one place to another.  It handles a number of cpio formats
  as well as reading and writing tar files.
  Homepage: http://www.gnu.org/software/cpio/
  Original-Maintainer: Ruben Molina <rmolina@udea.edu.co>
 */
class Package { // a
  constructor (name, source, depObj) {
    const cached = Package.instance.has(name)
    const self = cached ? Package.instance.get(name) : this
    if (source) {
      self.info.package = name
      console.log(readInfo(source, self.info, self))
    } else if (depObj) {
      self.info.package = name
      self.info.rdepends.add(depObj.info.package)
    }
    if (!cached) {
      Package.instance.set(name, self)
    }
    return self
  }

  /**
   *
   */
  get info () {
    if (!this._info) {
      this._info = { package: null, depends: null, rdepends: new Set(), description: null }
    }
    return this._info
  }

  // setrDep (name) { this.info.rdepends.add(name) }
}

Package.instance = new Map()

export { Package }
