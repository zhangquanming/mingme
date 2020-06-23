<template>
  <div class="app-layout-wrap">
    <app-header />
    <div class="app-content">
      <router-view></router-view>
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/framework/app-header/app-header'
import AppFooter from '@/components/framework/app-footer/app-footer'

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.app-layout-wrap {
  height: 100%;
  .app-content {
    padding-top: @heightHeader + 20;
    min-height: 100%;
    padding-bottom: @heightFooter + 20;
    margin-bottom: -@heightFooter;
  }
}
</style>
