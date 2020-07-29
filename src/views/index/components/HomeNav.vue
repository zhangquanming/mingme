<template>
  <nav class="home-nav">
    <ul>
      <li v-for="(item, index) in navList" :key="index">
        <router-link :to="item.path" tag="a">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HomeNav',
  computed: {
    ...mapGetters([
      'navList'
    ])
  }
}
</script>

<style lang="less" scoped>
.home-nav {
  position: relative;
  left: 0;
  font-size: 0;
  li {
    display: inline;
    color: #000;
    font-size: 14px;
    margin-right: 10px;
    & + li::before {
      margin-right: 10px;
      content: '-';
      display: inline-block;
      width: 20px;
      text-align: center;
      color: #999;
    }
    a {
      display: inline-block;
      color: #999;
      letter-spacing: 1px;
      &:hover {
        color: #000;
      }
      &::after {
        content: '';
        display: block;
        border-bottom: 1px solid #e8e8e8;
        transform: translate3d(0, 6px, 0);
        transition: all 0.3s;
      }
      &:hover:after {
        border-color: #000;
        transform: translate3d(0, 9px, 0);
      }
    }
  }
}
</style>
