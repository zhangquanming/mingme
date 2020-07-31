<template>
  <card :padding="20" style="height: 100%;">
    <user-page-title :title="`您已送出${totalEle}个赞`" titleSub="提示：赞美别人就是肯定自己。"></user-page-title>
    <div class="z-row">
      <div class="z-col-15" v-for="(item, index) in blogList" :key="index">
        <user-favorites-card :blogData="item">
          <btn icon="liked" theme="error" shape="rect" long @click="handleUnLike(item)">取消</btn>
        </user-favorites-card>
      </div>
    </div>
    <pagenation :totalEle="totalEle" :all="pageTotal" :cur="page" :callback="changePage" style="margin-top: 30px;" />
    <modal v-if="isShowUnlikeModal" @close="handleHideUnlikeModal">
      <h3 slot="header">确认取消喜欢?</h3>
      <div slot="footer">
        <btn theme="error" long @click="requestUnLike" :loading="isUnLikeLoading">确认取消</btn>
      </div>
    </modal>
  </card>
</template>

<script>
import api from '@/api/'
import { mapGetters, mapActions } from 'vuex'

import Card from '@/components/base/Card/Card'
import UserPageTitle from '@/views/user/components/UserPageTitle'
import UserFavoritesCard from '@/views/user/components/UserFavoritesCard'
import Btn from '@/components/base/Btn/Btn'
import Modal from '@/components/base/Modal/Modal'
import Pagenation from '@/components/base/Pagenation/Pagenation'

export default {
  name: 'UserFavorites',
  components: {
    Card,
    UserPageTitle,
    UserFavoritesCard,
    Btn,
    Modal,
    Pagenation
  },
  data () {
    return {
      page: 1,
      limit: 10,
      pageTotal: 0,
      totalEle: 0,
      blogList: [],
      isLoading: false,
      isShowUnlikeModal: false,
      isUnLikeLoading: false,
      currentRow: {}
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  watch: {},
  created () { },
  mounted () { },
  methods: {
    ...mapActions({
      toggleSignInModal: 'toggleSignInModal',
      handleChangeUserInfo: 'changeUserInfo'
    }),
    /**
     * @desc 分页点击
     */
    changePage (page) {
      this.page = page
      this.requestblogList()
    },

    /**
     * @desc 请求 文章列表
     */
    requestblogList () {
      if (!this.userInfo || !this.userInfo._id) {
        this.$toast.info('请登录')
        this.toggleSignInModal(true)
        return
      }
      const params = {
        page: this.page,
        limit: this.limit,
        likes: this.userInfo._id
      }
      this.isLoading = true
      api
        .GetBlogList(params)
        .then(res => {
          this.blogList = res.result.list
          this.pageTotal = res.result.pages
          this.totalEle = res.result.total
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },

    /**
     * @desc 请求 取消点赞
     */
    requestUnLike () {
      const params = {
        blogId: this.currentRow.id,
        userId: this.userInfo._id
      }
      this.isUnLikeLoading = true
      api
        .PostBlogUnLike(params)
        .then(() => {
          this.$toast.warning('已取消赞！')
          this.requestblogList()
          this.isUnLikeLoading = false
          this.handleHideUnlikeModal()
        })
        .catch(() => {
          this.isUnLikeLoading = false
        })
    },

    handleUnLike (row) {
      this.currentRow = row
      this.handleShowUnlikeModal()
    },

    /**
     * @desc 显示删除文章弹框
     */
    handleShowUnlikeModal () {
      this.isShowUnlikeModal = true
    },

    /**
     * @desc 隐藏删除文章弹框
     */
    handleHideUnlikeModal () {
      this.isShowUnlikeModal = false
    }
  }
}
</script>
