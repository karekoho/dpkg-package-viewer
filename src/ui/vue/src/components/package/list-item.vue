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

<template>
  <li>
    <router-link :to="{ name: 'package', params: { code: pkg.name }}">
      {{ pkg.name }}
    </router-link>
  </li>
</template>

<style />
