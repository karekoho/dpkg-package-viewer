<script>
// import { mapActions } from 'vuex'
// import { CachedCountry } from '@/models/country'
import { SharedPackage } from '../../../src/models/shared-package';

// Display country information
export default {
  name: 'package-info',
  props: ['name'],
  data () {
    return {
      pkg: {
        name: null,
        info: null
      }
    }
  },
  methods: {
    /* ...mapActions('country/', { setInfo: 'info' }) */
  },
  watch: {
    '$route': function () {

      /* const country = new CachedCountry(this.code) // Returns single instance for the country code
      country.data()
        .then((data) => {
          this.info = data
          return data
        })
        .then((data) => country.capital()
          .then(capital => capital.name())
          .then((name) => { this.info.capital = name }))
        .catch((error) => {
          console.error(error)
        }) */
      
      const pkg = new SharedPackage(this.name);
      this.pkg.name = pkg.name;
    } 
  }
}
</script>

<template>
  <div id="package-info">
    <h3>Package information</h3>
    <table v-if="pkg">
      <thead>
        <tr v-if="pkg" >
          <th colspan="2"><h4>{{ pkg.name }}</h4></th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<style scoped>
thead th {
  text-align: left;
}
#package-info {
  width: 70%;
  float: left;
}
#package-info .label {
  width: 200px;
}
</style>