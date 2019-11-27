<script>
export default { name: 'index-link' }
</script>

<template>
  <div id="index-link-container">
    <router-link id="index-link" :to="{ name: 'index' }">Back to index</router-link>
  </div>
</template>

<style scoped>
  div#index-link-container {
    margin-top: 25px;
  }
</style>
