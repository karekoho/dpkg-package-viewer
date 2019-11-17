<template>
  <div id="package-view">
    <package-list />
  </div>
</template>

<script>
import PackageList from './list'

export default {
  name: 'package-view',
  components: { PackageList }
}
</script>

<style scoped>
#package-view {
  text-align: left;
  padding: 25px 25px 25px 45px;
}
</style>
