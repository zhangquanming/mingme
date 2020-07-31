<template>
  <div>
    <z-panel>
      <admin-comment-filter>
        <template v-slot:default="slotProps">
          <btn theme="info" @click="handleSearch(slotProps.formData)" :loading="isLoading">搜索</btn>
        </template>
      </admin-comment-filter>
    </z-panel>
    <z-panel title="评论管理">
      <z-table :columns="columns" :data="tableData" :loading="isLoading" />
      <pagenation :all="pageTotal" :cur="page" :callback="changePage" style="margin-top: 20px;" />
    </z-panel>

    <modal v-if="isShowReplyModal" @close="handleHideReplyModal" width="50%">
      <div slot="body">
        <ZTable :columns="columnsRepay" :data="currentRow.reply" />
      </div>
    </modal>

    <modal v-if="isShowDeleteModal" @close="handleHideDeleteCommentModal">
      <h3 slot="header">确认删除?</h3>
      <div slot="body">
        <p>确认删除吗？删除后，不可恢复！</p>
      </div>
      <div slot="footer">
        <btn theme="error" long @click="handleConfirmDelete">确认删除</btn>
      </div>
    </modal>
  </div>
</template>

<script>
import api from '@/api/'
import { mapGetters, mapActions } from 'vuex'

import ZPanel from '@/components/base/ZPanel/ZPanel'
import ZTable from '@/components/base/Table/Table'
import Btn from '@/components/base/Btn/Btn'
import ZSwitch from '@/components/base/ZSwitch/ZSwitch'
import Pagenation from '@/components/base/Pagenation/Pagenation'
import Modal from '@/components/base/Modal/Modal'
import AdminCommentFilter from './AdminCommentFilter'

export default {
  name: 'AdminComment',
  components: {
    ZPanel,
    ZTable,
    Pagenation,
    Modal,
    Btn,
    AdminCommentFilter
  },
  data () {
    return {
      page: 1,
      limit: 10,
      pageTotal: 0,
      tableData: [],
      isLoading: false,
      isDeleteLoading: false,
      currentRow: {},
      currentReplyRow: {},
      filterData: {
        status: 'all'
      },
      isShowDeleteModal: false,
      isShowReplyModal: false,
      columns: [
        {
          title: '头像',
          key: 'poster',
          width: '80px',
          render: (h, parama) => {
            return h('img', {
              attrs: {
                src: parama.row.from ? parama.row.from.avatar : ''
              },
              style: {
                height: '30px'
              }
            })
          }
        },
        {
          title: '用户名',
          minWidth: '120px',
          render: (h, parama) => {
            return h('span', parama.row.from ? parama.row.from.userName : '未知')
          }
        },
        {
          title: '内容',
          key: 'content',
          align: 'left'
        },
        {
          title: '回复',
          key: 'content',
          minWidth: '70px',
          render: (h, parama) => {
            return h(
              Btn,
              {
                props: {
                  theme: 'text'
                },
                on: {
                  click: () => {
                    this.currentRow = parama.row
                    this.handleShowReplyModal()
                  }
                }
              },
              parama.row.reply.length
            )
          }
        },
        {
          title: '评论文章',
          key: 'title',
          align: 'left',
          minWidth: '200px',
          render: (h, parama) => {
            return h(
              'router-link',
              {
                attrs: {
                  target: '_blank'
                },
                props: {
                  to: {
                    path: `/blog/detail/${parama.row.blogObj.id}`
                  }
                }
              },
              parama.row.blogObj.title
            )
          }
        },
        {
          title: '时间',
          key: 'createAt',
          minWidth: '170px',
          render: (h, params) => {
            const createdAtFormat = this.$options.filters.dateFormatFilter(params.row.createdAt, 'YYYY-MM-DD HH:mm')
            const updatedAtFormat = this.$options.filters.dateFormatFilter(params.row.updatedAt, 'YYYY-MM-DD HH:mm')
            return h('div', [h('div', createdAtFormat), h('div', updatedAtFormat)])
          }
        },
        {
          title: '审核通过',
          minWidth: '100px',
          render: (h, params) => {
            return h(ZSwitch, {
              props: {
                value: params.row.status
              },
              on: {
                change: value => {
                  if (this.handleValidateUserAuth()) {
                    this.requestToggleCommentStatus(value, params.row)
                  }
                }
              }
            })
          }
        },
        {
          title: '操作',
          minWidth: '80px',
          render: (h, params) => {
            return h('div', [
              h(
                Btn,
                {
                  props: {
                    theme: 'error',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.currentRow = params.row
                      if (this.handleValidateUserAuth()) {
                        this.handleShowDeleteCommentModal()
                      }
                    }
                  }
                },
                '删除'
              )
            ])
          }
        }
      ],
      columnsRepay: [
        {
          title: '头像',
          key: 'poster',
          width: '80px',
          render: (h, parama) => {
            return h('img', {
              attrs: {
                src: parama.row.from ? parama.row.from.avatar : ''
              },
              style: {
                height: '30px'
              }
            })
          }
        },
        {
          title: '用户名',
          minWidth: '120px',
          render: (h, parama) => {
            return h('span', parama.row.from ? parama.row.from.userName : '未知')
          }
        },
        {
          title: '内容',
          key: 'content',
          align: 'left'
        },
        {
          title: '时间',
          key: 'createAt',
          minWidth: '170px',
          render: (h, params) => {
            const createdAtFormat = this.$options.filters.dateFormatFilter(params.row.createdAt, 'YYYY-MM-DD HH:mm')
            const updatedAtFormat = this.$options.filters.dateFormatFilter(params.row.updatedAt, 'YYYY-MM-DD HH:mm')
            return h('div', [h('div', createdAtFormat), h('div', updatedAtFormat)])
          }
        },
        {
          title: '操作',
          minWidth: '80px',
          render: (h, params) => {
            return h('div', [
              h(
                Btn,
                {
                  props: {
                    theme: 'error',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.currentReplyRow = params.row
                      if (this.handleValidateUserAuth()) {
                        this.handleShowDeleteCommentModal()
                      }
                    }
                  }
                },
                '删除'
              )
            ])
          }
        }
      ]
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
     * @desc 表单检索
     */
    handleSearch (filterData) {
      this.filterData = filterData
      this.page = 1
      this.requestCommentList()
    },

    /**
     * @desc 分页点击
     */
    changePage (page) {
      this.page = page
      this.requestCommentList()
    },

    /**
     * @desc 请求 评论列表
     */
    requestCommentList () {
      this.isLoading = true
      const params = {
        page: this.page,
        limit: this.limit,
        ...this.filterData
      }
      api
        .GetComments(params)
        .then(res => {
          this.tableData = res.result.list
          this.pageTotal = res.result.pages
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },

    /**
     * @desc 请求 上下架评论
     */
    requestToggleCommentStatus (value, row) {
      this.isToggleStatusLoading = true
      const params = {
        commentId: row.id,
        status: value
      }
      api
        .PutComments(params)
        .then(() => {
          this.isToggleStatusLoading = false
          this.$toast.success('操作成功！')
          row.status = value
        })
        .catch(() => {
          this.isToggleStatusLoading = false
        })
    },

    /**
     * @desc 请求 删除评论
     */
    requestDeleteComment () {
      this.isDeleteLoading = true
      api
        .DeleteComments({ commentId: this.currentRow._id })
        .then(() => {
          this.isDeleteLoading = false
          this.handleHideDeleteCommentModal()
          this.$toast.success('删除成功！')
          this.requestCommentList()
        })
        .catch(() => {
          this.isDeleteLoading = false
        })
    },

    /**
     * @desc 请求 删除回复
     */
    requestDeleteReply () {
      this.isDeleteLoading = true
      api
        .DeleteReplys({ replyId: this.currentReplyRow._id })
        .then(() => {
          this.isDeleteLoading = false
          this.handleHideDeleteCommentModal()
          this.handleHideReplyModal()
          this.$toast.success('删除成功！')
          this.requestCommentList()
        })
        .catch(() => {
          this.isDeleteLoading = false
        })
    },

    /**
     * @desc 确认删除
     */
    handleConfirmDelete () {
      if (this.isShowReplyModal) {
        this.requestDeleteReply()
      } else {
        this.requestDeleteComment()
      }
    },

    /**
     * @desc 验证是否已登录，是否为 admin 用户
     */
    handleValidateUserAuth () {
      let isUserAuth = false
      if (this.userInfo) {
        if (this.userInfo.userName === 'admin') {
          isUserAuth = true
        } else {
          this.$toast.warning('非admin，无权限！')
        }
      } else {
        this.$toast.info('请登录')
        this.toggleSignInModal(true)
      }
      return isUserAuth
    },

    /**
     * @desc 显示删除评论弹框
     */
    handleShowDeleteCommentModal () {
      this.isShowDeleteModal = true
    },

    /**
     * @desc 隐藏删除评论弹框
     */
    handleHideDeleteCommentModal () {
      this.isShowDeleteModal = false
    },

    /**
     * @desc 显示删除评论弹框
     */
    handleShowReplyModal () {
      this.isShowReplyModal = true
    },

    /**
     * @desc 隐藏删除评论弹框
     */
    handleHideReplyModal () {
      this.isShowReplyModal = false
    }
  }
}
</script>