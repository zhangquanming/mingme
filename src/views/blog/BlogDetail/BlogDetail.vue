<template>
  <div class="z-container">
    <div class="z-row">
      <div class="z-col-lg-42 z-col-xl-45">
        <Card padding="0">
          <Billboard :poster="blogResult.poster" :title="blogResult.title" :titleSub="blogResult.createdAt | dateFormatFilter('YYYY 年 MM 月 DD 日')">
            <div class="tags">
              <Tag size="small" theme="error" icon="iconuser" shape="rect"> {{ blogResult.authorObj ? blogResult.authorObj.userName : '' }}</Tag>
              <Tag size="small" theme="info" shape="rect" v-for="(tag, index) in blogResult.tagArray" :key="index">{{ tag.name }}</Tag>
              <Btn v-if="isLiked" size="small" theme="success" shape="rect" icon="iconliked" @click="handleUnLike" :loading="isLikeLoading"></Btn>
              <Btn v-else size="small" theme="success" shape="rect" icon="iconlike" @click="handleLike" :loading="isLikeLoading"></Btn>
            </div>
          </Billboard>
        </Card>
        <Card padding="0">
          <md-preview :content="blogResult.content" />
        </Card>
        <Card>
          <comments-form @on-success="handleCommentsSuccess"></comments-form>
        </Card>

        <Card v-loading="isCommentsListLoading" v-if="commentsList && commentsList.length > 0">
          <comments-list @on-fresh="requestCommentsList" :commentsList="commentsList"></comments-list>
          <pagenation :totalEle="totalEle" :all="pageTotal" :cur="page" :callback="changePage" style="margin-top: 20px;" />
        </Card>
      </div>
      <div class="z-col-lg-18 z-col-xl-15 visible-lg visible-xl">
        <div id="briefWrap">
          <card-brief-blog :blogResult="blogResult" v-if="blogResult && blogResult.content" />
          <card-no-data v-else style="height: 385px;" />
        </div>
        <div id="jsCardMdNav">
          <card-md-nav :blogResult="blogResult" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
import { mapGetters, mapActions } from 'vuex'
import { throttle } from '@/utils/tools'

import Btn from '@/components/base/Btn/Btn'
import Tag from '@/components/base/Tag/Tag'
import Card from '@/components/base/Card/Card'
import Billboard from '@/components/kit/Billboard/Billboard'
import MdPreview from '@/components/kit/MdPreview/MdPreview'
import CommentsForm from '@/components/kit/CommentsForm/CommentsForm'
import CommentsList from '@/components/kit/CommentsList/CommentsList'
import Pagenation from '@/components/base/Pagenation/Pagenation'
import CardBriefBlog from '@/components/kit/CardBriefBlog/CardBriefBlog'
import CardNoData from '@/components/kit/CardNoData/CardNoData'
import CardMdNav from '@/components/kit/CardMdNav/CardMdNav'

export default {
  name: 'BlogDetail',
  components: {
    Card,
    Btn,
    Tag,
    Billboard,
    MdPreview,
    CommentsForm,
    CommentsList,
    Pagenation,
    CardBriefBlog,
    CardNoData,
    CardMdNav
  },
  data () {
    return {
      isLikeLoading: false,
      isLoading: false,
      isCommentsListLoading: false,
      blogResult: {},
      commentsList: [],
      page: 1,
      limit: 10,
      pageTotal: 0,
      totalEle: 0
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ]),
    isLiked () {
      const likes = this.blogResult.likes
      if (likes && likes.length > 0 && this.userInfo && this.userInfo._id) {
        return likes.includes(this.userInfo._id)
      }
      return false
    }
  },
  created () {
    this.requestBlogDetail()
    this.requestCommentsList()
  },
  mounted () {
    const vm = this
    this.throttleScroll = throttle(function () {
      vm.scrollHandler()
    }, 20)
    window.addEventListener('scroll', this.throttleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.throttleScroll)
  },
  methods: {
    scrollHandler () {
      const t = document.documentElement.scrollTop || document.body.scrollTop
      var jsCardMdNav = document.getElementById('jsCardMdNav')
      var jsBriefWrap = document.getElementById('briefWrap')

      if (t >= jsBriefWrap.clientHeight + 20) {
        jsCardMdNav.classList.add('fixed-side-card')
      } else {
        jsCardMdNav.classList.remove('fixed-side-card')
      }
    },
    /**
     * @desc 评论发表成功 回调
     */
    handleCommentsSuccess () {
      this.requestCommentsList()
    },
    /**
     * @desc 分页点击
     */
    changePage (page) {
      this.page = page
      this.requestCommentsList()
    },

    /**
     * @desc 请求 文章详情
     */
    requestBlogDetail () {
      this.isLoading = true
      const params = {
        blogId: this.$route.params.blogId
      }
      api
        .GetBlogDetail(params)
        .then(res => {
          this.isLoading = false
          this.blogResult = res.result
        })
        .catch(() => {
          this.isLoading = false
        })
    },

    /**
     * @desc 请求 评论列表
     */
    requestCommentsList () {
      this.isCommentsListLoading = true
      const params = {
        blogId: this.$route.params.blogId,
        page: this.page,
        limit: this.limit
      }
      api
        .GetComments(params)
        .then(res => {
          this.isCommentsListLoading = false
          this.commentsList = res.result.list
          this.pageTotal = res.result.pages
          this.totalEle = res.result.total
        })
        .catch(() => {
          this.isCommentsListLoading = false
        })
    },

    /**
     * @desc 请求 点赞
     */
    requestLike () {
      const params = {
        blogId: this.blogResult.id,
        userId: this.userInfo._id
      }
      this.isLikeLoading = true
      api
        .PostBlogLike(params)
        .then(res => {
          this.$toast.success('已赞！')
          this.blogResult.likes = res.result.likes
          this.isLikeLoading = false
        })
        .catch(() => {
          this.isLikeLoading = false
        })
    },

    /**
     * @desc 请求 取消点赞
     */
    requestUnLike () {
      const params = {
        blogId: this.blogResult.id,
        userId: this.userInfo._id
      }
      this.isLikeLoading = true
      api
        .PostBlogUnLike(params)
        .then(res => {
          this.$toast.warning('已取消赞！')
          this.blogResult.likes = res.result.likes
          this.isLikeLoading = false
        })
        .catch(() => {
          this.isLikeLoading = false
        })
    },

    /**
     * @desc 点击事件 点赞
     */
    handleLike () {
      if (this.userInfo && this.userInfo._id) {
        this.requestLike()
      } else {
        this.$toast.info('请登录')
        this.toggleSignInModal(true)
      }
    },

    /**
     * @desc 点击事件 取消点赞
     */
    handleUnLike () {
      if (this.userInfo && this.userInfo._id) {
        this.requestUnLike()
      } else {
        this.$toast.info('请登录')
        this.toggleSignInModal(true)
      }
    },
    ...mapActions({
      toggleSignInModal: 'toggleSignInModal'
    })
  }
}
</script>

<style lang="less" scoped>
.fixed-side-card {
  position: fixed;
  top: @heightHeader + 20;
  width: 100%;
  @media screen and (min-width: @breakpoints-xs) {
    // min-width: 320px;
  }

  @media screen and (min-width: @breakpoints-sm) {
    max-width: @containerMaxWidth-sm * 7 / 24 - 16;
  }

  @media screen and (min-width: @breakpoints-md) {
    max-width: @containerMaxWidth-md * 7 / 24 - 16;
  }

  @media screen and (min-width: @breakpoints-lg) {
    max-width: @containerMaxWidth-lg * 7 / 24 - 16;
  }

  @media screen and (min-width: @breakpoints-xl) {
    max-width: @containerMaxWidth-xl * 6 / 24 - 16;
  }
}
</style>
