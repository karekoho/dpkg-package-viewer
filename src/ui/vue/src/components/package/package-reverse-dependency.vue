<script>
import { Package } from '../../../src/common/package'

export default {
  name: 'package-reverse-dependency',
  props: {
    name: String
  },
  data: () => ({ package: null }),
  mounted () {
    try {
      this.package = new Package(this.name)
    } catch (e) {
      console.error(e)
    }
  }
}

</script>

<template>
  <div id="package-reverse-dependency">
    <li v-if="this.package">
      <router-link v-if="this.package.isAvailable" :to="{ name: 'package', params: { name: this.package.name }}">
        {{ this.package.name }}
      </router-link>
      <span v-else>
        {{ this.package.name }}
      </span>
    </li>
  </div>
</template>
