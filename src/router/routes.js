const isMobile = window.matchMedia('(max-width: 992px)').matches
const name = isMobile ? 'mobile' : 'home'

const AppLayout = () => import(/* webpackChunkName: "AppLayout" */ '@/components/framework/app-layout/app-layout')

const Index = (indexView) => () => import(/* webpackChunkName: "Index" */ '@/views/index/' + indexView)

const BlogList = () => import(/* webpackChunkName: "BlogList" */ '@/views/blog/blog-list/blog-list')
const BlogDetail = () => import(/* webpackChunkName: 'BlogDetail' */ '@/views/blog/blog-detail/blog-detail')
const BlogSearch = () => import(/* webpackChunkName: 'BlogSearch' */ '@/views/blog/blog-search/blog-search')

const Resource = () => import(/* webpackChunkName: 'Resource' */ '@/views/resource/resource')

const EbookHome = () => import(/* webpackChunkName: 'EbookHome' */ '@/views/ebook/home/home')
const EbookCategory = () => import(/* webpackChunkName: 'EbookCategory' */ '@/views/ebook/ebook-category/ebook-category')
const EbookCatalog = () => import(/* webpackChunkName: 'EbookCatalog' */ '@/views/ebook/ebook-catalog/ebook-catalog')
const EbookChapter = () => import(/* webpackChunkName: 'EbookChapter' */ '@/views/ebook/ebook-chapter/ebook-chapter')
const EbookRanking = () => import(/* webpackChunkName: 'EbookRanking' */ '@/views/ebook/ebook-ranking/ebook-ranking')
const EbookSearch = () => import(/* webpackChunkName: 'EbookSearch' */ '@/views/ebook/ebook-search/ebook-search')

export default [
  {
    path: '/',
    name: '首页',
    component: Index(name)
  },
  {
    path: '/blog',
    component: AppLayout,
    children: [
      {
        path: '',
        name: '全部文章',
        component: BlogList
      },
      {
        path: 'search',
        name: '搜索',
        component: BlogSearch
      },
      {
        path: ':category',
        name: '文章',
        component: BlogList
      },
      {
        path: 'detail/:blogId',
        name: '文章详情',
        component: BlogDetail
      }
    ]
  },
  {
    path: '/resource',
    component: AppLayout,
    children: [
      {
        path: '',
        name: '前端资源',
        component: Resource
      }
    ]
  },
  {
    path: '/ebook',
    component: AppLayout,
    children: [
      {
        path: '',
        name: '电子书-首页',
        component: EbookHome
      },
      {
        path: 'category/:categoryName',
        name: '电子书-分类',
        component: EbookCategory
      },
      {
        path: 'catalog/:bookId',
        name: '电子书-章节目录信息',
        component: EbookCatalog
      },
      {
        path: 'catalog/:bookId/chapter/:chapterId',
        name: '电子书-正文',
        component: EbookChapter
      },
      {
        path: 'ranking/:rankType',
        name: '电子书-排行榜单',
        component: EbookRanking
      },
      {
        path: 'search',
        name: '电子书-搜索',
        component: EbookSearch
      }
    ]
  }
]