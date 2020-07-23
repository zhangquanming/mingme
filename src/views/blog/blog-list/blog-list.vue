<template>
  <div class="z-container">
    <div class="z-row">
      <div class="z-col-md-42 z-col-xl-45">
        <template v-if="blogList.length > 0">
          <Card v-for="(blog, index) in blogList" :key="index">
            <topic-item :topic="blog"></topic-item>
          </Card>
        </template>
      </div>
      <div class="list-side z-col-md-18 z-col-xl-15">
        <div class="search-wrap">
          <search-blog @on-search="handleSearch"></search-blog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/base/card/card'
import TopicItem from '@/components/kit/topic-item/topic-item'
import SearchBlog from '@/components/kit/search-blog/search-blog'
import api from '@/api/index'
export default {
  name: 'BlogList',
  components: {
    Card,
    TopicItem,
    SearchBlog
  },
  data () {
    return {
      page: 1,
      limit: 10,
      blogList: [],
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
      this.isLoading = true
      const params = {
        page: this.page,
        limit: this.limit,
        category: ''
      }
      api.GetBlogList(params).then(res => {
        this.blogList = res.result.list
        this.isLoading = false
      }).catch(() => {
        this.isLoading = false
      })
    },
    // 搜索文章
    handleSearch (keyword) {
      console.log(keyword)
    }
  }
}
</script>

<style lang="less">
.list-side {
  position: sticky;
  top: @heightHeader + 20;
}
.z-card.search-wrap {
  background-image: linear-gradient(90deg, @colorSuccess, @colorInfo);
}
</style>
