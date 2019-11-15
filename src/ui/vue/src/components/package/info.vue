<script>
import { mapActions } from 'vuex'
import { CachedCountry } from '@/models/country'

// Display country information
export default {
  name: 'package-info',
  props: ['name'],
  data () {
    return {
      info: null
    }
  },
  methods: {
    ...mapActions('country/', {
      setInfo: 'info'
    })
  },
  watch: {
    '$route': function () {
      const country = new CachedCountry(this.code) // Returns single instance for the country code
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
        })
    }
  }
}
</script>

<template>
  <div id="country-info">
    <h3>Country information</h3>
    <table v-if="info">
      <thead>
        <tr v-if = "info" >
          <th colspan="2"><h4>{{ info.name }}</h4></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key, index) in info" v-bind:key="index">
          <td class="label">{{ key }}</td>
          <td class="value">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
thead th {
  text-align: left;
}
#country-info {
  width: 70%;
  float: left;
}
#country-info .label {
  width: 200px;
}
</style>
