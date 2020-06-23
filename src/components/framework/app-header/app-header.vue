<template>
  <div :class="['app-header-wrap', menuTheme]">
    <div class="z-container">
      <div class="app-header">
        <router-link to="/" class="app-header-brand">
          <logo :h="40" />
        </router-link>
        <AppMenu :theme="menuTheme" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/base/logo/logo'
import AppMenu from '@/components/framework/app-menu/app-menu'

export default {
  name: 'AppHeader',
  components: {
    Logo,
    AppMenu
  },
  data () {
    return {
      menuTheme: 'black',
    }
  }
}
</script>

<style lang="less" scoped>
.app-header-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: background ease 0.3s;
  color: @colorPrimaryText;
  .app-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: @heightHeader;
  }
}
</style>
