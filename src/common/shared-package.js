import { Package } from './package'

class SharedPackage extends Package {
  constructor (name, info, index) {
    super(name, info)
  }
}

export { SharedPackage }
