<template>
  <div class="z-container">
    <div class="filter-bar">
      <div class="z-row">
        <div class="z-col-sm-10">
          <filter-select v-model="formData.category" :options="categoryListFormat" placeholder="不限分类" labelKey="name" valueKey="_id"></filter-select>
        </div>
        <div class="z-col-sm-10">
          <filter-select v-model="formData.tag" :options="tagList" multiple placeholder="不限标签" labelKey="name" valueKey="_id"></filter-select>
        </div>
      </div>
    </div>
    <div class="z-row">
      <div class="z-col-md-42 z-col-xl-45" v-loading="isLoading">
        <template v-if="blogList.length > 0">
          <Card v-for="(blog,index) in blogList" :key="index">
            <topic-item :topic="blog"></topic-item>
          </Card>
        </template>
        <card-no-data v-else style="height: 300px;" />
      </div>
      <div class="list-side z-col-md-18 z-col-xl-15">
        <Card class="search-wrap">
          <search-blog @on-search="handleSearch"></search-blog>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import FilterSelect from '@/components/kit/FilterSelect/FilterSelect'
import Card from '@/components/base/Card/Card'
import TopicItem from '@/components/kit/TopicItem/TopicItem'
import CardNoData from '@/components/kit/CardNoData/CardNoData'
import SearchBlog from '@/components/kit/SearchBlog/SearchBlog'

import { mapGetters } from 'vuex'
import api from '@/api/'

export default {
  name: 'BlogSearch',
  components: {
    FilterSelect,
    Card,
    TopicItem,
    CardNoData,
    SearchBlog
  },
  data () {
    return {
      formData: {},
      page: 1,
      limit: 10,
      blogList: [],
      isLoading: false,
      tagList: []
    }
  },
  computed: {
    ...mapGetters([
      'categoryList'
    ]),
    categoryListFormat () {
      return this.categoryList.filter(item => item.value !== '/')
    }
  },
  watch: {
    $route: {
      handler () {
        this.requestblogList()
      },
      deep: true
    },
    formData: {
      handler () {
        this.requestblogList()
      },
      deep: true
    }
  },
  mounted () {
    const { keyword, tag } = this.$route.query
    if (keyword) {
      this.formData.keyword = keyword
    }
    if (tag) {
      this.$set(this.formData, 'tag', [this.$route.query.tag])
    } else {
      this.requestblogList()
    }
    this.requestTagList()
  },
  methods: {
    /**
     * @desc 请求 文章列表
     */
    requestblogList () {
      this.isLoading = true
      const params = {
        page: this.page,
        limit: this.limit,
        ...this.formData
      }
      api
        .GetBlogList(params)
        .then(res => {
          this.blogList = res.result.list
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },

    /**
     * @desc 请求 标签列表
     */
    requestTagList () {
      this.isTagLoading = true
      api
        .GetTag()
        .then(res => {
          this.tagList = res.result
          this.isTagLoading = false
        })
        .catch(() => {
          this.isTagLoading = false
        })
    },

    /**
     * @desc 搜索
     */
    handleSearch (keyword) {
      this.formData.keyword = keyword
      this.$router.replace({ path: '/blog/search', query: { keyword } })
    }
  }
}
</script>

<style lang="less" scoped>
.filter-bar {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid darken(@colorBorder, 5%);
  background-color: @colorBgBody;
}
.list-side {
  position: sticky;
  top: @heightHeader + 20;
  z-index: 10;
}
.z-card.search-wrap {
  margin: 5px 0;
  // background-color: transparent;
  background-image: linear-gradient(90deg, @colorSuccess, @colorInfo);
}
</style>
