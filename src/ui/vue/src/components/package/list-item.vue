<template>
  <li>
    <router-link :to="{ name: 'country', params: { code: country.code }}">{{ country.name }}</router-link>
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
