<template>
  <div>
    <div class="app-menu" :class="classes">
      <icon class="app-menu-handle" type="iconcaidan" :size="32" @click="handleToggleMenu"></icon>
      <ul class="app-menu-list">
        <router-link class="app-menu-link" active-class="current" v-for="(nav, index) in navList" :key="index" :to="nav.path" tag="li">{{ nav.name }}</router-link>
        <li class="app-menu-link app-menu-login">
          <login-control :theme="theme" />
        </li>
      </ul>
    </div>
    <div class="app-menu-mask" v-if="isShowMenu" @click="handleToggleMenu"></div>
  </div>
</template>

<script>
import LoginControl from '@/components/framework/AppMenu/LoginControl'
import Icon from '@/components/base/Icon/Icon'
import { mapGetters } from 'vuex'

export default {
  name: 'AppMenu',
  components: {
    Icon,
    LoginControl
  },
  props: {
    theme: {
      type: String,
      default: 'white'
    }
  },
  data () {
    return {
      isShowMenu: false
    }
  },
  computed: {
    ...mapGetters([
      'navList'
    ]),
    classes () {
      return this.isShowMenu ? 'app-menu-show' : ''
    }
  },
  watch: {},
  created () { },
  mounted () { },
  methods: {
    handleToggleMenu () {
      this.isShowMenu = !this.isShowMenu
    }
  }
}
</script>

<style lang="less" scoped>
.app-menu-mask {
  position: fixed;
  top: @heightHeader;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 990;
  background-color: rgba(0, 0, 0, 0.3);
}
.app-menu {
  color: @colorTextSilver;
  .app-menu-handle {
    display: none;
    padding: 10px;
  }
  .app-menu-link {
    position: relative;
    display: inline-block;
    padding: 0 15px;
    margin: 0 10px;
    line-height: @heightHeader;
    font-size: 15px;
    cursor: pointer;
    transition: color 0.25s ease;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      height: 2px;
      width: 0;
      border-radius: 2px;
      background-image: linear-gradient(90deg, @colorSuccess, @colorInfo);
      transition: all 0.3s ease;
    }
    &:hover {
      color: @colorTextWhite;
      &:after {
        width: 100%;
        left: 0;
      }
    }
    &.current {
      color: @colorTextWhite;
      &:after {
        width: 100%;
        left: 0;
      }
    }
  }
}

@media only screen and (max-width: @breakpoints-lg) {
  .app-menu {
    color: @colorTextLight;
    .app-menu-handle {
      display: block;
    }
    .app-menu-list {
      height: 0;
      position: fixed;
      width: 100%;
      top: @heightHeader;
      left: 0;
      z-index: 1000;
      overflow: hidden;
      background-color: #323232;
      .app-menu-link {
        display: block;
        text-align: center;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        &:after {
          display: none;
        }
        &.current {
          color: #fff;
        }
        &:hover {
          color: #fff;
        }
      }
    }
    &.app-menu-show .app-menu-list {
      height: auto;
      overflow: inherit;
      top: @heightHeader;
    }
  }
}
.app-menu-login {
  &:after {
    display: none;
  }
}
</style>
