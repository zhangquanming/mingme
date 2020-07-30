<template>
  <Card title="文章分类" :padding="0">
    <ul v-if="categoryList.length > 0" class="card-category-list" @mouseleave="checkPathname">
      <li class="category-item" v-for="(nav, index) in categoryList" :key="index" @mouseover="changeTop(index)">
        <router-link exact :to="`/${parentPath}${nav.value === '/' ? nav.value : '/' + nav.value}`" active-class="current" class="category-item-link">
          {{ nav.name }}
        </router-link>
      </li>
      <li class="category-item-slider" :style="{ top: topIndex * 40 + 'px' }"></li>
    </ul>
    <NoData v-else style="height: 260px;" />
  </Card>
</template>

<script>
import Card from '@/components/base/Card/Card'
import NoData from '@/components/kit/NoData/NoData'
export default {
  name: 'CardCategory',
  props: {
    categoryList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Card,
    NoData
  },
  data () {
    return {
      topIndex: 0
    }
  },
  computed: {
    parentPath () {
      return this.$route.path.split('/')[1]
    }
  },
  watch: {
    $route: {
      handler () {
        this.checkPathname()
      },
      deep: true
    }
  },
  methods: {
    /**
     * @desc 获取当前路径
     */
    checkPathname () {
      const currentPath = this.$route.path
      const categoryPath = currentPath.split('/')[2]
      if (categoryPath) {
        this.categoryList.forEach((item, index) => {
          if (`/${this.parentPath}/${item.value}` === currentPath) {
            this.topIndex = index
          }
        })
      } else {
        this.categoryList.forEach((item, index) => {
          if (item.value === '/') {
            this.topIndex = index
          }
        })
      }
    },

    /**
     * @desc 改变当前聚焦的分类
     */
    changeTop (index) {
      this.topIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.card-category-list {
  position: relative;

  .category-item {
    position: relative;
    padding: 0 15px;
    z-index: 1;
  }

  .category-item-link {
    display: block;
    padding-left: 15px;
    height: 40px;
    color: @colorTextSub;
    line-height: 40px;
    text-decoration: none;
    border-bottom: 1px solid lighten(@colorBorderLight, 2%);
  }

  .category-item-link:hover {
    color: @colorTextContent;
  }

  .current {
    color: @colorTextContent;
  }

  .category-item-slider {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    height: 40px;
    width: 100%;
    border-right: 4px solid @colorInfo;
    background-color: lighten(@colorBorderLight, 2%);
    transition: top 0.2s;
  }
}
</style>
