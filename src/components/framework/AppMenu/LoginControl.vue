<template>
  <div>
    <div class="dropdown-menu-wrap" v-if="userInfo">
      <btn theme="success" size="small" shape="circle" icon="iconuser" :to="{ path: '/user' }">{{ userInfo.nicName || userInfo.userName }}</btn>
      <div :class="['dropdown-menu', `dropdown-menu-${theme}`]">
        <concave-radius-box :size="18" :theme="theme">
          <btn :theme="theme === 'white' ? 'text' : 'white'" icon="iconwenzhang" shape="rect" long :to="{ path: '/user/write' }">发布文章</btn>
          <btn :theme="theme === 'white' ? 'text' : 'white'" icon="iconxiugaitouxiang_gerenzhongxin_" shape="rect" long :to="{ path: '/user/avatar' }">修改头像</btn>
          <btn :theme="theme === 'white' ? 'text' : 'white'" icon="iconbianjiziliao" shape="rect" long :to="{ path: '/user/profile' }">编辑资料</btn>
          <btn :theme="theme === 'white' ? 'text' : 'white'" icon="iconsignout-copy" shape="rect" long @click="handleSignOut">退出账号</btn>
        </concave-radius-box>
      </div>
    </div>
    <btn-group v-else>
      <btn theme="success" size="small" shape="circle" icon="iconsignin" @click="handleSignIn">登录</btn>
      <btn theme="primary" size="small" shape="circle" icon="iconsignup" @click="handleSignUp">注册</btn>
    </btn-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import webStore from '@/utils/storage'

import Btn from '@/components/base/Btn/Btn'
import BtnGroup from '@/components/base/BtnGroup/BtnGroup'
import ConcaveRadiusBox from '@/components/kit/ConcaveRadiusBox/ConcaveRadiusBox'

export default {
  name: 'LoginControl',
  components: {
    Btn,
    BtnGroup,
    ConcaveRadiusBox
  },
  props: {
    theme: String
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  mounted () {
    const userInfo = webStore.getUserInfo()
    if (userInfo) {
      this.handleChangeUserInfo(userInfo)
    }
  },
  methods: {
    ...mapActions({
      toggleSignUpModal: 'toggleSignUpModal',
      toggleSignInModal: 'toggleSignInModal',
      handleChangeUserInfo: 'changeUserInfo'
    }),
    /**
     * @desc 登录
     */
    handleSignIn () {
      this.toggleSignInModal(true)
      this.toggleSignUpModal(false)
    },

    /**
     * @desc 注册
     */
    handleSignUp () {
      this.toggleSignInModal(false)
      this.toggleSignUpModal(true)
    },

    /**
     * @desc 退出登录
     */
    handleSignOut () {
      webStore.sessionClear()
      this.handleChangeUserInfo(null)
    }
  }
}
</script>

<style lang="less" scoped>
.dropdown-menu-wrap {
  position: relative;
  .dropdown-menu {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 99;
    display: none;
    color: #fff;
    line-height: initial;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .dropdown-menu-white {
    background-color: #fff;
  }
  .dropdown-menu-black {
    background-color: rgba(0, 0, 0, 0.8);
  }
  &:hover .dropdown-menu {
    display: block;
  }
}
</style>
