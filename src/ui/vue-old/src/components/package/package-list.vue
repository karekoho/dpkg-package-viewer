<script>

import { mapActions } from 'vuex'

export default {
  name: 'package-list',
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
        <li v-for="name in packagelist" :key="name" v-bind:name="name">
          <router-link :to="{ name: 'package', params: { name }}">
            {{ name }}
          </router-link>
          </li>
      </ul>
  </div>
</template>

<style scoped />
