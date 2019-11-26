<script>
export default {
  name: 'error',
  props: {
    error: Error
  }
}
</script>

<template>
  <div id="error">
    <h3>{{ this.error.name }}</h3>
    <span>{{ this.error.message }}</span>
  </div>
</template>

<style scoped>
  div#error {
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
  }
</style>
