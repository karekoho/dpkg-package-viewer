<script>
import { Package } from '../../../src/common/package'

export default {
  name: 'package-info',
  props: ['name'],
  data: () => ({ package: null }),
  mounted () {
    this.getPackage()
  },
  methods: {
    getPackage () {
      try {
        this.package = new Package(this.name)
      } catch (e) {
        console.error(e)
        this.package = null
      }
    }
  }
  /* watch: { $route: function (to, from) {} } */
}
</script>

<template>

  <div id="package-info">
    <h3>Package information</h3>
    <div v-if="this.package">
      <!-- h4>{{ info.package }}</h4 -->
      <ul>
        <li>
          <span class="field-name">Package</span>
          <span> {{ this.package.name }}</span>
          <dl>
            <dt><span class="field-name">Description</span></dt>
            <dd>{{ this.package.description }}</dd>
          </dl>
        </li>
        <li>
          <span class="field-name">
            Depends
          </span>
          <ul>
            <li>1</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </li>
      </ul>

    </div>

    <div v-else>
      Oops, error happened!
    </div>

    <router-link :to="{ name: 'index' }">Back to index</router-link>

  </div>

</template>

<style scoped>
  div#package-info span.field-name {
    font-weight: bold
  }
</style>
