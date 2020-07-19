<template>
  <div class="z-container">
    <div class="z-row">
      <div class="z-col-md-42 z-col-xl-45">
        111
      </div>
      <div class="list-side z-col-md-18 z-col-xl-15">

      </div>
    </div>
  </div>
</template>

<script>
// import api from '@/api/index.js'
export default {
  name: 'BlogList',
  components: {},
  data () {
    return {
      page: 1,
      limit: 10,
      bloglist: [],
      isLoading: false
    }
  },
  computed: {},
  watch: {
    $route: {
      hander () {
        this.requestblogList()
      },
      deep: true
    }
  },
  mounted () {
    this.requestblogList()
  },
  methods: {
    // 请求文章列表
    requestblogList () {
    },
    // 搜索文章
    handleSearch () { }
  }
}
</script>

<style lang="less">
.list-side {
  position: sticky;
  top: @heightHeader + 20;
}
</style>
