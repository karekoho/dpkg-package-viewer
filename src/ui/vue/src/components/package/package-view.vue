<script>
import PackageList from './package-list'

const onUnload = (event) => {
  console.log(event)
}

export default {
  name: 'package-view',
  components: { PackageList },
  methods: {
    onUnload (event) {
      console.log(event)
      this.$router.push('/')
    },
    removeListener () {}
  },
  mounted () {
    window.addEventListener('unload', onUnload)
  },
  beforeDestroy () {
    window.removeEventListener('unload', onUnload)
  }
}
</script>

<template>

  <div id="package-view">
    <package-list />
  </div>

</template>

<style scoped />
