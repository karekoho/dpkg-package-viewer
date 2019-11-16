<script>

import { mapState, mapActions } from 'vuex'
import PackageListItem from './list-item'

export default {
  name: 'package-list',
  components: { PackageListItem },

  mounted () { // Element mounted
    this.getPackages()
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      })
  },

  computed: {
    ...mapState('dpkg/', { packages: state => state.index })
  },
  methods: {
    ...mapActions('dpkg/', { getPackages: 'index' })
  }
  // beforeRouteEnter (to, from, next) { console.log(to, from, next) },
}
</script>

<template>
  <div id="package-list">
    <h3>Packages</h3>
      <ul>
        <package-list-item v-for="pkg in packages" :key="pkg.name" v-bind:package="pkg" />
      </ul>
  </div>
</template>

<style>
#package-list {
  width: 30%;
  float: left;
}
</style>
