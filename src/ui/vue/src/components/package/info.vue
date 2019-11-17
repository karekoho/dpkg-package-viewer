<script>

import { SharedPackage } from '../../../src/common/shared-package'

export default {
  name: 'package-info',
  props: ['name'],
  data () {
    return {
      pkg: {
        name: null,
        info: null
      }
    }
  },
  watch: {
    $route: function () {
      const pkg = new SharedPackage(this.name)
      this.pkg.name = pkg.name
    }
  }
}
</script>

<template>
  <div id="package-info">
    <h3>Package information</h3>
    <table v-if="pkg">
      <thead>
        <tr v-if="pkg" >
          <th colspan="2"><h4>{{ pkg.name }}</h4></th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<style scoped>
thead th {
  text-align: left;
}
#package-info {
  width: 70%;
  float: left;
}
#package-info .label {
  width: 200px;
}
</style>
