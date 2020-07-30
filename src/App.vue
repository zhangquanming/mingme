<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  mounted () {
    window.$toast = this.$toast
  }
}
</script>

<style lang="less">
#app {
  height: 100%;
}
</style>
