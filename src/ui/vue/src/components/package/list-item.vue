<template>
  <li>
    <router-link :to="{ name: 'info', params: { code: pkg.name }}">
      {{ pkg.name }}
    </router-link>
  </li>
</template>

<script>

export default {
  name: 'package-list-item',
  props: {
    package: {
      type: Object
    }
  }
}
</script>

<style>
</style>
