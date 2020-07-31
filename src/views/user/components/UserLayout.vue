<template>
  <div class="z-container">
    <div class="user-page-wrap">
      <div class="user-page-side">
        <div class="hidden-xs">
          <user-card-brief />
        </div>
        <card :padding="0" style="margin-bottom: 0;">
          <user-menu />
        </card>
      </div>
      <div class="user-page-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/base/Card/Card'
import UserCardBrief from '@/views/user/components/UserCardBrief'
import UserMenu from '@/views/user/components/UserMenu'

export default {
  name: 'UserLayout',
  components: {
    Card,
    UserCardBrief,
    UserMenu
  }
}
</script>

<style lang="less" scoped>
.user-page-wrap {
  display: flex;
}
.user-page-side {
  width: 240px;
  margin-right: 20px;
}
.user-page-main {
  flex: 1;
}
</style>
