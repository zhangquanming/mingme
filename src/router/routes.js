const isMobile = window.matchMedia('(max-width: 992px)').matches
const name = isMobile ? 'Mobile' : 'Home'

const AppLayout = () => import(/* webpackChunkName: "AppLayout" */ '@/components/framework/AppLayout/AppLayout')

const Index = (indexView) => () => import(/* webpackChunkName: "Index" */ '@/views/index/' + indexView)

const BlogList = () => import(/* webpackChunkName: "BlogList" */ '@/views/blog/BlogList/BlogList')
const BlogDetail = () => import(/* webpackChunkName: 'BlogDetail' */ '@/views/blog/BlogDetail/BlogDetail')
const BlogSearch = () => import(/* webpackChunkName: 'BlogSearch' */ '@/views/blog/BlogSearch/BlogSearch')

const Resource = () => import(/* webpackChunkName: 'Resource' */ '@/views/resource/Resource')

const MovieHome = () => import(/* webpackChunkName: 'MovieHome' */ '@/views/movie/MovieHome/MovieHome')
const MovieTop250 = () => import(/* webpackChunkName: 'MovieTop250' */ '@/views/movie/MovieTop250/MovieTop250')
const MovieDetail = () => import(/* webpackChunkName: 'MovieDetail' */ '@/views/movie/MovieDetail/MovieDetail')

const EbookHome = () => import(/* webpackChunkName: 'EbookHome' */ '@/views/ebook/Home/Home')
const EbookCategory = () => import(/* webpackChunkName: 'EbookCategory' */ '@/views/ebook/EbookCategory/EbookCategory')
const EbookCatalog = () => import(/* webpackChunkName: 'EbookCatalog' */ '@/views/ebook/EbookCatalog/EbookCatalog')
const EbookChapter = () => import(/* webpackChunkName: 'EbookChapter' */ '@/views/ebook/EbookChapter/EbookChapter')
const EbookRanking = () => import(/* webpackChunkName: 'EbookRanking' */ '@/views/ebook/EbookRanking/EbookRanking')
const EbookSearch = () => import(/* webpackChunkName: 'EbookSearch' */ '@/views/ebook/EbookSearch/EbookSearch')

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
    path: '/movie',
    component: AppLayout,
    children: [
      {
        path: '',
        name: '电影-首页',
        component: MovieHome
      },
      {
        path: 'top250',
        name: 'top250',
        component: MovieTop250
      },
      {
        path: 'detail/:movieId',
        name: '电影-详情',
        component: MovieDetail
      }
    ]
  },
  {
    path: '/ebook',
    component: AppLayout,
    children: [
      {
        path: '',
        name: '小说-首页',
        component: EbookHome
      },
      {
        path: 'category/:categoryName',
        name: '小说-分类',
        component: EbookCategory
      },
      {
        path: 'catalog/:bookId',
        name: '小说-章节目录信息',
        component: EbookCatalog
      },
      {
        path: 'catalog/:bookId/chapter/:chapterId',
        name: '小说-正文',
        component: EbookChapter
      },
      {
        path: 'ranking/:rankType',
        name: '小说-排行榜单',
        component: EbookRanking
      },
      {
        path: 'search',
        name: '小说-搜索',
        component: EbookSearch
      }
    ]
  }
]