<template>
  <div id="container">
    <div id="header">
      <h1>Status</h1>
    </div>
    <div id="world">
      <package-list />
      <router-view />
    </div>
  </div>
</template>

<script>
import PackageList from './package/list'

export default {
  name: 'package-view',
  components: { PackageList }
}
</script>

<style scoped>
#container {
  padding: 25px 25px 25px 45px;
}
</style>
