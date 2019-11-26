<script>

import { Package } from '../../../src/common/package'

export default {
  name: 'package-dependency',
  props: {
    namelist: Array,
    name: String
  },
  data: () => ({ package: null, pkglist: null, lastIndex: 0 }),
  mounted () {
    try {
      if (this.namelist) {
        this.pkglist = this.namelist.map(name => new Package(name))
        this.lastIndex = this.namelist.length - 1
      } else if (this.name) {
        this.package = new Package(this.name)
      }
    } catch (e) {
      console.error(e)
    }
  }
}

</script>

<template>
  <div>
  <li v-if="this.pkglist">
    <span v-for="(pkg, index) in this.pkglist" :key="pkg.name">
      <router-link v-if="pkg.isAvailable" :to="{ name: 'package', params: { name: pkg.name }}">
        {{ pkg.name }}
      </router-link>
      <span v-else>
        {{ pkg.name }}
      </span>
      <span v-if="index < lastIndex"> | </span>
    </span>
  </li>
  <li v-else-if="this.package">
    <router-link v-if="this.package.isAvailable" :to="{ name: 'package', params: { name: this.package.name }}">
      {{ this.package.name }}
    </router-link>
    <span v-else>
      {{ this.package.name }}
    </span>
  </li>
  </div>
</template>
