<template>
  <ul class="md-anchor-nav">
    <li v-for="(nav, index) in list" :key="index">
      <a href="javascript:;" :id="nav.index | anchor" :class="{ active: highLightIndex === nav.index }" @click="scrollToEle(nav.index)">{{ nav.title }}</a>
      <MdAnchorNav :list="nav.children" :offsetTopList="offsetTopList" v-if="nav.children.length > 0" />
    </li>
  </ul>
</template>

<script>
const { mapGetters } = Vuex

let vm = null
export default {
  name: 'MdAnchorNav',
  props: {
    list: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    offsetTopList: {
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },
  data () {
    vm = this
    return {
      idPrefix: 'titleAnchor-'
    }
  },
  filters: {
    anchor: function (value) {
      return `#${vm.idPrefix}${value}`
    }
  },
  computed: {
    ...mapGetters({
      highLightIndex: 'highLightIndex'
    })
  },
  methods: {
    scrollToEle (eleIndex) {
      const targetOffsetTop = this.offsetTopList[eleIndex]
      // window.scrollTo(0, targetOffsetTop - 100);
      this.scrollMove(targetOffsetTop - 100, 200)
    },
    scrollMove (scrollTo, time) {
      var scrollFrom = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var count = 0
      var every = 10
      scrollTo = parseInt(scrollTo)
      time /= every

      var interval = setInterval(function () {
        count++
        document.documentElement.scrollTop = document.body.scrollTop = ((scrollTo - scrollFrom) / time) * count + scrollFrom
        if (count >= time) {
          clearInterval(interval)
        }
      }, every)
    }
  }
}
</script>

<style lang="less" scoped>
.md-anchor-nav {
  position: relative;
  z-index: 10;
  margin-left: 15px;
  list-style: square;
  padding-left: 10px;
}

.md-anchor-nav a {
  display: block;
  padding: 5px 0;
  line-height: 1.5;
  color: @colorTextContent;

  &:link,
  &:visited {
    text-decoration: none;
  }

  &:hover {
    color: @colorSuccess;
    text-decoration: underline;
  }

  &.active {
    color: @colorSuccess;
  }
}
</style>
