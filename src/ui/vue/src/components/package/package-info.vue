<script>
import { mapState, mapActions } from 'vuex'
import { Package } from '../../../src/common/package'
import PackageDependency from './package-dependency'
import IndexLink from '../common/index-link'

export default {
  name: 'package-info',
  components: { PackageDependency, IndexLink },
  props: {
    name: String
  },
  data: () => ({
    package: null,
    error: null
  }),
  mounted () {
    this.getPackage(this.name)
  },
  beforeRouteUpdate (to, from, next) {
    this.getPackage(to.params.name)
    next()
  },
  computed: {
    ...mapState('dpkg/status/', {
      indexSize: state => state.index.size
    })
  },
  methods: {
    ...mapActions('dpkg/status/', { getPackages: 'readIndex' }),
    getPackage (name) {
      try {
        if (this.indexSize > 0) {
          this.package = new Package(name)
        } else {
          this.getPackages().then(() => { this.package = new Package(name) })
        }
      } catch (error) {
        this.error = error
        console.error(error)
      }
    }
  }
}
</script>

<template>

  <div id="package-info">
    <div v-if="this.package">
      <div v-if="this.package.isAvailable">
        <h3>Package information</h3>
        <ul>
          <li>
            <span class="field-name">Package</span>
            <span> {{ this.package.name }}</span>
            <dl>
              <dt><span class="field-name">Description</span></dt>
              <dd>{{ this.package.description }}</dd>
            </dl>
          </li>
          <li v-if="this.package.depends.length">
            <span class="field-name">
              Depends
            </span>
            <ul>
              <package-dependency v-for="name in this.package.depends" :key="name" v-bind:name="name" />
            </ul>
          </li>
          <li v-if="this.package.reverseDepends.length">
            <span class="field-name">
              Reverse depends
            </span>
            <ul>
              <package-dependency v-for="name in this.package.reverseDepends" :key="name" v-bind:name="name" />
            </ul>
          </li>
        </ul>
      </div>
      <h3 v-else>
        Package not found
      </h3>
    </div>

    <div id="error" v-else-if="error">
      <h3>Error</h3>
      <span>{{ error.message }}</span>
    </div>

    <index-link />

  </div>

</template>

<style scoped>
  div#error {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
</style>
