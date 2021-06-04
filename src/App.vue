<!--
 * @Author: your name
 * @Date: 2021-06-04 23:56:26
 * @LastEditTime: 2021-06-05 00:01:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /mingme/src/App.vue
-->
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
