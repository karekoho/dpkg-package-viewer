<script>

export default {
  name: 'package-list-item',
  props: ['name']
}

</script>

<template>
  <li>
    <router-link :to="{ name: 'package', params: { name: name }}">
      {{ name }}
    </router-link>
  </li>
</template>

<style scoped />
