<template>
  <div id="package-list">
    <h3>Packages</h3>
      <ul>
        <package-list-item v-for="country in countries" :key="country.code" v-bind:country="country" />
      </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PackageListItem from './list-item'

export default {
  name: 'package-list',
  components: { PackageListItem },
  mounted () { // Element mounted
    this.getPackages()
      .catch((error) => {
        console.error(error)
      })
  },
  computed: {
    ...mapState('dpkg/', { packages: state => state.index })
  },
  methods: {
    ...mapActions('dpkg/', { getPackages: 'status' }
    )
  }
  // beforeRouteEnter (to, from, next) { console.log(to, from, next) },
}
</script>

<style>
#country-list {
  width: 30%;
  float: left;
}
</style>
