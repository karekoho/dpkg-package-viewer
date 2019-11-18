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
      const info = this.findInfo(this.name)
      if (info) {
        this.info = (new Package(this.name, info)).info
      } else {
        // Error happened: bad param, package name not found
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
    <table v-if="info">
      <thead>
        <tr v-if="info" >
          <th colspan="2"><h4>{{ info.name }}</h4></th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td colspan="2">
            <router-link :to="{ name: 'index' }">Back to index</router-link>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>

</template>

<style scoped />
