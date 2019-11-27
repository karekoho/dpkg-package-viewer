<script>
import { Package } from '../../../src/common/package'

export default {
  name: 'package-dependency',
  props: {
    namelist: Array
  },
  data: () => ({ pkglist: null, lastIndex: 0 }),
  mounted () {
    try {
      this.pkglist = this.namelist.map(name => new Package(name))
      this.lastIndex = this.namelist.length - 1
    } catch (e) {
      console.error(e)
    }
  }
}

</script>

<template>
  <div id="package-dependency">
    <li v-if="this.pkglist">
      <span v-for="(pkg, index) in this.pkglist" :key="pkg.name">
        <router-link v-if="pkg.isAvailable" :to="{ name: 'package', params: { name: pkg.name }}">
          {{ pkg.name }}
        </router-link>
        <span v-else>
          {{ pkg.name }}
        </span>
        <span v-if="index < lastIndex">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      </span>
    </li>
  </div>
</template>
