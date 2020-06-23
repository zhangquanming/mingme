<template>
  <div :class="classes">
    <!-- <Icon class="app-menu-handle" type="liebiao" :size="24" @click="handleToggleMenu" /> -->
    <ul class="app-menu-list">
      <router-link class="app-menu-link" active-class="current" v-for="(nav, index) in navList" :key="index" :to="nav.path" tag="li">{{ nav.name }}</router-link>
      <!-- <li class="app-menu-link app-menu-login">
        <LoginControl :theme="theme" />
      </li> -->
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// const prefixCls = 'app-menu';

export default {
  name: 'AppMenu',
  props: {
    theme: {
      type: String,
      default: 'white'
    }
  },
  components: {},
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'navList'
    ])
  },
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang="less" scoped>
.app-menu {
  &-handle {
    display: none;
    padding: 12px;
  }
  &-list {
  }
  &-link {
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
      background-image: linear-gradient(
        90deg,
        @colorBlackText,
        @colorPrimaryText
      );
      transition: all 0.3s ease;
    }
    &:hover {
      &:after {
        width: 100%;
        left: 0;
      }
    }
    &.current {
      &:after {
        width: 100%;
        left: 0;
      }
    }
  }
}
</style>
