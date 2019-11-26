<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'package-list',
  data: () => ({ packagelist: [] }),
  created () {
    this.getPackages()
      .then(packagelist => {
        this.packagelist = packagelist
      })
      .catch((error) => {
        console.error(error)
      })
  },
  computed: {
    ...mapState('dpkg/status/', {
      indexSize: state => state.index.size
    })
  },
  methods: {
    ...mapActions('dpkg/status/', { getPackages: 'readIndex' })
  }
}
</script>

<template>
  <div id="package-list">
    <h3><span>{{ this.indexSize }}</span> packages</h3>
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
