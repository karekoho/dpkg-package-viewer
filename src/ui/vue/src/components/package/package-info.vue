<script>
import { mapActions } from 'vuex'
import { Package } from '../../../src/common/package'
import PackageDependency from './package-dependency'
import PackageReverseDependency from './package-reverse-dependency'
import IndexLink from '../common/index-link'
import Error from '../common/error'

export default {
  name: 'package-info',
  components: { PackageDependency, PackageReverseDependency, IndexLink, Error },
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
  methods: {
    ...mapActions('dpkg/status/', { getPackages: 'readIndex' }),
    getPackage (name) {
      try {
        // Page may be refreshed or url followed, so ensure package index is not empty
        this.getPackages().then(() => { this.package = new Package(name) })
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
      <h3>Package information</h3>
      <div v-if="this.package.isAvailable">
        <ul>
          <li>
            <dl>
              <dt><span class="field-name">Package</span><dt>
              <dd>{{ this.package.name }}</dd>
              <dt><span class="field-name">Description</span></dt>
              <dd>{{ this.package.description }}</dd>
            </dl>
          </li>
          <li v-if="this.package.depends.length">
            <span class="field-name">
              Depends
            </span>
            <ul>
              <package-dependency v-for="(namelist, index) in this.package.depends" :key="namelist[0] + index" v-bind:namelist="namelist" />
            </ul>
          </li>
          <li id="rev-dep" v-if="this.package.reverseDepends.length">
            <span class="field-name">
              Reverse depends
            </span>
            <ul>
              <package-reverse-dependency v-for="name in this.package.reverseDepends" :key="name" v-bind:name="name" />
            </ul>
          </li>
        </ul>
      </div>
      <div v-else>
        <ul>
          <li>
            <span class="field-name">Not available</span>
          </li>
        </ul>
      </div>
    </div>

    <error v-else-if="this.error" v-bind:error="this.error" />

    <index-link />

  </div>

</template>

<style scoped>
  ul li span.field-name {
    font-weight: bold
  }
  li#rev-dep {
    margin-top: 10px
  }
</style>
