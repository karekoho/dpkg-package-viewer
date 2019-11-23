<script>
export default { name: 'not-found' }
</script>

<template>
  <div id="not-found">
    <h3>Page not found</h3>
    <router-link :to="{ name: 'index' }">Back to index</router-link>
  </div>
</template>

<style scoped />
