<template>
  <div id="app">
    <router-view />
    <sign-in />
    <sign-up />
  </div>
</template>

<script>
import SignIn from '@/components/kit/SignIn/SignIn'
import SignUp from '@/components/kit/SignUp/SignUp'
export default {
  name: 'app',
  components: {
    SignIn,
    SignUp
  },
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
