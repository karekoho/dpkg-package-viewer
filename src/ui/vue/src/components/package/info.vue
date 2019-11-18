<script>
import { mapGetters } from 'vuex'
import { Package } from '../../../src/common/package'

export default {
  name: 'package-info',
  props: ['name'],
  data: () => ({ info: null }),
  computed: {
    ...mapGetters('status/', ['findInfo'])
  },
  mounted () {
    this.getPackage()
  },
  methods: {
    getPackage () {
      try {
        const info = this.findInfo(this.name)
        if (info) {
          this.info = (new Package(this.name, info)).info
        } else { // Error happened: bad param, package name not found
          this.info = null
        }
      } catch (e) {
        console.error(e)
        this.info = null
      }
    }
  },
  watch: {
    $route: function (to, from) {
      console.log(to, from)
    }
  }
}
</script>

<template>

  <div id="package-info">
    <h3>Package information</h3>
    <div v-if="info">
      <!-- h4>{{ info.package }}</h4 -->
      <ul>
        <li>
          <span class="field-name">Package</span>
          <span> {{ info.package }}</span>
          <dl>
            <dt><span class="field-name">Description</span></dt>
            <dd>{{ info.description }}</dd>
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
