<script>
import { Package } from '../../../src/common/package'
import PackageDependency from './package-dependency'
import IndexLink from '../common/index-link'

export default {
  name: 'package-info',
  components: { PackageDependency, IndexLink },
  props: {
    name: String
  },
  data: () => ({ package: null }),
  mounted () {
    this.getPackage(this.name)
  },
  beforeRouteUpdate (to, from, next) {
    this.getPackage(to.params.name)
    next()
  },
  methods: {
    getPackage (name) {
      try {
        this.package = new Package(name)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<template>

  <div id="package-info">
    <h3>Package information</h3>
    <div v-if="this.package">
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

    <div v-else>
      Oops, error happened!
    </div>

    <index-link />

  </div>

</template>

<style scoped>
  div#package-info span.field-name {
    font-weight: bold
  }
</style>