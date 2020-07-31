<template>
  <Card :padding="20" style="height: 100%;">
    <UserPageTitle :title="`您已发表 ${totalEle} 条评论。`" titleSub="提示：认真填写的点评会帮助到别人哦。"></UserPageTitle>
    <template v-if="commentsList && commentsList.length">
      <UserCommentItem v-for="(item, index) in commentsList" :key="index" :comment="item"></UserCommentItem>
      <Pagenation :totalEle="totalEle" :all="pageTotal" :cur="page" :callback="changePage" style="margin-top: 20px;" />
    </template>

    <template v-else>
      <NoData style="height: 300px;"></NoData>
    </template>
  </Card>
</template>

<script>
import api from '@/api/'
import { mapGetters, mapActions } from 'vuex'

import Card from '@/components/base/Card/Card'
import UserPageTitle from '@/views/user/components/UserPageTitle'
import UserCommentItem from '@/views/user/components/UserCommentItem'
import Pagenation from '@/components/base/Pagenation/Pagenation'
import NoData from '@/components/kit/NoData/NoData'

export default {
  name: 'UserComment',
  components: {
    Card,
    UserPageTitle,
    UserCommentItem,
    Pagenation,
    NoData
  },
  data () {
    return {
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
    ])
  },
  mounted () {
    this.requestCommentList()
  },
  methods: {
    ...mapActions({
      toggleSignInModal: 'toggleSignInModal'
    }),

    /**
     * @desc 分页点击
     */
    changePage (page) {
      this.page = page
      this.requestCommentsList()
    },

    /**
     * @desc 请求 评论列表
     */
    requestCommentList () {
      if (!this.userInfo || !this.userInfo._id) {
        this.$toast.info('请登录')
        this.toggleSignInModal(true)
        return
      }
      const params = {
        from: this.userInfo._id,
        page: this.page,
        limit: this.limit
      }
      this.isCommentsListLoading = true
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
    }
  }
}
</script>
