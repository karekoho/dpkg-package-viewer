<script>

import { mapActions } from 'vuex'
import PackageListItem from './list-item'

export default {
  name: 'package-list',
  components: { PackageListItem },
  data: () => ({ packagelist: [] }),
  mounted () {
    this.getPackages()
      .then(packagelist => {
        this.packagelist = packagelist
      })
      .catch((error) => {
        console.error(error)
      })
  },
  methods: {
    ...mapActions('status/', { getPackages: 'readIndex' })
  }
}
</script>

<template>
  <div id="package-list">
    <h3>Packages</h3>
      <ul>
        <package-list-item v-for="pkg in packagelist" :key="pkg" v-bind:name="pkg" />
      </ul>
  </div>
</template>

<style scoped />
