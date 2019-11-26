<script>
import { mapState, mapActions } from 'vuex'
import Error from '../common/error'

export default {
  name: 'package-list',
  components: { Error },
  data: () => ({
    packagelist: [],
    error: null
  }),
  created () {
    this.getPackages()
      .then(packagelist => {
        this.packagelist = packagelist
      })
      .catch((error) => {
        this.error = error
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
    <error v-if="this.error" v-bind:error="this.error" />
    <div v-else>
      <h3><span>{{ this.indexSize }}</span> packages</h3>
      <ul>
        <li v-for="name in packagelist" :key="name" v-bind:name="name">
          <router-link :to="{ name: 'package', params: { name }}">
            {{ name }}
          </router-link>
          </li>
      </ul>
    </div>
  </div>
</template>
