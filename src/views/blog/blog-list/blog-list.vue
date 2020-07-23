<template>
  <div class="z-container">
    <div class="z-row">
      <div class="z-col-md-42 z-col-xl-45">
        <template v-if="blogList.length > 0">
          <Card v-for="(blog, index) in blogList" :key="index">
            <topic-item :topic="blog"></topic-item>
          </Card>
        </template>
        <card-no-data v-else style="height: 300px;" />
      </div>
      <div class="list-side z-col-md-18 z-col-xl-15">
        <Card class="search-wrap">
          <search-blog @on-search="handleSearch" />
        </Card>
        <CardCategory :categoryList="categoryList" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/base/card/card'
import TopicItem from '@/components/kit/topic-item/topic-item'
import CardNoData from '@/components/kit/card-no-data/card-no-data'
import SearchBlog from '@/components/kit/search-blog/search-blog'
import CardCategory from '@/components/kit/card-category/card-category'
import api from '@/api/index'
import { mapGetters } from 'vuex'
export default {
  name: 'BlogList',
  components: {
    Card,
    TopicItem,
    CardNoData,
    SearchBlog,
    CardCategory
  },
  data () {
    return {
      page: 1,
      limit: 10,
      blogList: [],
      isLoading: false
    }
  },
  computed: {
    ...mapGetters([
      'categoryList',
      'categoryIdByValue'
    ])
  },
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
        category: this.categoryIdByValue(this.$route.params.category)
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
      this.$router.push({ path: '/blog/search', query: { keyword } })
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
