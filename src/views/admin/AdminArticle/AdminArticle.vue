<template>
  <div>
    <z-panel title="文章管理">
      <template v-slot:headerRight>
        <btn theme="primary" :to="{ path: '/admin/write' }">新增</btn>
      </template>
      <z-table :columns="columns" :data="tableData" :loading="isLoading" />
      <pagenation :all="pageTotal" :cur="page" :callback="changePage" style="margin-top: 20px;" />
    </z-panel>

    <modal v-if="isShowDeleteModal" @close="handleHideDeleteBlogModal">
      <h3 slot="header">确认删除?</h3>
      <div slot="body">
        <p>确认删除名为 {{ currentRow.title }} 的文章吗?</p>
      </div>
      <div slot="footer">
        <btn theme="error" long @click="requestDeleteBlog">确认删除</btn>
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

export default {
  name: 'AdminArticle',
  components: {
    ZPanel,
    ZTable,
    Pagenation,
    Modal,
    Btn
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
      isShowDeleteModal: false,
      columns: [
        {
          title: '海报',
          key: 'poster',
          width: '80px',
          render: (h, parama) => {
            return h(
              'router-link',
              {
                attrs: {
                  target: '_blank'
                },
                props: {
                  to: {
                    path: `/blog/detail/${parama.row._id}`
                  }
                }
              },
              [
                h('img', {
                  attrs: {
                    src: parama.row.poster
                  },
                  style: {
                    width: '80px'
                  }
                })
              ]
            )
          }
        },
        {
          title: '标题',
          key: 'title',
          align: 'left',
          render: (h, parama) => {
            return h(
              'router-link',
              {
                attrs: {
                  target: '_blank'
                },
                props: {
                  to: {
                    path: `/blog/detail/${parama.row._id}`
                  }
                }
              },
              parama.row.title
            )
          }
        },
        {
          title: '作者',
          render: (h, parama) => {
            return h('span', parama.row.authorObj ? parama.row.authorObj.userName : '未知')
          }
        },
        {
          title: '分类',
          key: 'category',
          align: 'left',
          render: (h, parama) => {
            return h('span', parama.row.categoryObj.name)
          }
        },
        {
          title: '标签',
          key: 'tagArr',
          width: '',
          align: 'left',
          class: 'hidden-xs',
          type: 'array',
          render: (h, parama) => {
            return h('span', parama.row.tagArray.map(item => item.name).join(','))
          }
        },
        {
          title: '时间',
          key: 'createAt',
          render: (h, params) => {
            const createdAtFormat = this.$options.filters.dateFormatFilter(params.row.createdAt, 'YYYY-MM-DD HH:mm')
            const updatedAtFormat = this.$options.filters.dateFormatFilter(params.row.updatedAt, 'YYYY-MM-DD HH:mm')
            return h('div', [h('div', createdAtFormat), h('div', updatedAtFormat)])
          }
        },
        {
          title: '浏览',
          key: 'viewed'
        },
        {
          title: '赞',
          key: 'liked',
          render: (h, params) => {
            return h('span', params.row.likes.length)
          }
        },
        // {
        //   title: '评论',
        //   key: 'comment',
        // },
        {
          title: '状态',
          render: (h, params) => {
            return h(ZSwitch, {
              props: {
                value: params.row.status
              },
              on: {
                change: value => {
                  this.handleRowToggleStatus(value, params.row)
                }
              }
            })
          }
        },
        {
          title: '操作',
          render: (h, params) => {
            return h('div', [
              h(
                Btn,
                {
                  props: {
                    theme: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.handleRowEdit(params.row)
                    }
                  }
                },
                '编辑'
              ),
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
                      this.handleRowDel(params.row)
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
    this.requestblogList()
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
      this.requestblogList()
    },

    /**
     * @desc 请求 文章列表
     */
    requestblogList () {
      this.isLoading = true
      const params = {
        page: this.page,
        limit: this.limit,
        status: 'all'
      }
      api
        .GetBlogList(params)
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
     * @desc 请求 上下架文章
     */
    requestToggleBlogStatus (value, row) {
      this.isToggleStatusLoading = true
      const params = {
        blogId: row.id,
        status: value
      }
      api
        .PutBlog(params)
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
     * @desc 请求 删除文章
     */
    requestDeleteBlog () {
      this.isDeleteLoading = true
      api
        .DeleteBlog({ blogId: this.currentRow._id })
        .then(() => {
          this.isDeleteLoading = false
          this.handleHideDeleteBlogModal()
          this.$toast.success('删除成功！')
          this.requestblogList()
        })
        .catch(() => {
          this.isDeleteLoading = false
        })
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
     * @desc 表格点击事件 上下架状态
     */
    handleRowToggleStatus (value, row) {
      if (this.handleValidateUserAuth()) {
        this.requestToggleBlogStatus(value, row)
      }
    },

    /**
     * @desc 表格点击事件 编辑
     */
    handleRowEdit (row) {
      this.currentRow = row
      if (this.handleValidateUserAuth()) {
        this.$router.push(`/admin/write/${row._id}`)
      }
    },

    /**
     * @desc 表格点击事件 删除
     */
    handleRowDel (row) {
      this.currentRow = row
      if (this.handleValidateUserAuth()) {
        this.handleShowDeleteBlogModal()
      }
    },

    /**
     * @desc 显示删除文章弹框
     */
    handleShowDeleteBlogModal () {
      this.isShowDeleteModal = true
    },

    /**
     * @desc 隐藏删除文章弹框
     */
    handleHideDeleteBlogModal () {
      this.isShowDeleteModal = false
    }
  }
}

</script>
