<template>
  <div id="package-view">
    <package-list />
    <router-view />
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
