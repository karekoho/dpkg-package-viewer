<template>
  <div id="app">
    <PackageView />
  </div>
</template>

<script>
import PackageView from './components/package-view.vue'

export default {
  name: 'app',
  components: {
    PackageView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
