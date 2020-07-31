const isMobile = window.matchMedia('(max-width: 992px)').matches
const name = isMobile ? 'Mobile' : 'Home'

const AppLayout = () => import(/* webpackChunkName: "AppLayout" */ '@/components/framework/AppLayout/AppLayout')

const Index = (indexView) => () => import(/* webpackChunkName: "Index" */ '@/views/index/' + indexView)

const ForgetPassword = () => import(/* webpackChunkName: 'ForgetPwd' */ '@/views/forget/forgetPassword')

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

const UserLayout = () => import(/* webpackChunkName: 'UserLayout' */ '@/views/user/components/UserLayout')
const UserHome = () => import(/* webpackChunkName: 'UserHome' */ '@/views/user/UserHome/UserHome')
const UserProfile = () => import(/* webpackChunkName: 'UserProfile' */ '@/views/user/UserProfile/UserProfile')
const UserAvatar = () => import(/* webpackChunkName: 'UserAvatar' */ '@/views/user/UserAvatar/UserAvatar')
const UserPassword = () => import(/* webpackChunkName: 'UserPassword' */ '@/views/user/UserPassword/UserPassword')
const UserBlog = () => import(/* webpackChunkName: 'UserBlog' */ '@/views/user/UserBlog/UserBlog')
const UserWrite = () => import(/* webpackChunkName: 'UserWrite' */ '@/views/user/UserWrite/UserWrite')
const UserFavorites = () => import(/* webpackChunkName: 'UserFavorites' */ '@/views/user/UserFavorites/UserFavorites')
const UserComment = () => import(/* webpackChunkName: 'UserComment' */ '@/views/user/UserComment/UserComment')

const AdminLayout = () => import(/* webpackChunkName: 'AdminLayout' */ '@/components/framework/admin-layout/')
const AdminHome = () => import(/* webpackChunkName: 'AdminHome' */ '@/views/admin/home/')
const AdminWrite = () => import(/* webpackChunkName: 'AdminWrite' */ '@/views/admin/admin-write/')
const AdminArticle = () => import(/* webpackChunkName: 'AdminArticle' */ '@/views/admin/admin-article/')
const AdminCatgory = () => import(/* webpackChunkName: 'AdminCatgory' */ '@/views/admin/admin-category/')
const AdminTag = () => import(/* webpackChunkName: 'AdminTag' */ '@/views/admin/admin-tag/')
const AdminResourceType = () => import(/* webpackChunkName: 'AdminResourceType' */ '@/views/admin/admin-resource-type/')
const AdminResource = () => import(/* webpackChunkName: 'AdminResource' */ '@/views/admin/admin-resource/')
const AdminUser = () => import(/* webpackChunkName: 'AdminUser' */ '@/views/admin/admin-user/')
const AdminComment = () => import(/* webpackChunkName: 'AdminComment' */ '@/views/admin/admin-comment/')

export default [
  {
    path: '/',
    name: '首页',
    component: Index(name)
  },
  {
    path: '/forget',
    component: ForgetPassword
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
  },
  {
    path: '/user',
    component: AppLayout,
    children: [
      {
        path: '',
        name: '',
        component: UserLayout,
        children: [
          {
            path: '',
            name: '用户中心',
            component: UserHome
          }
        ]
      },
      {
        path: 'profile',
        name: '',
        component: UserLayout,
        children: [
          {
            path: '',
            name: '个人资料',
            component: UserProfile
          }
        ]
      },
      {
        path: 'avatar',
        name: '',
        component: UserLayout,
        children: [
          {
            path: '',
            name: '修改头像',
            component: UserAvatar
          }
        ]
      },
      {
        path: 'password',
        name: '',
        component: UserLayout,
        children: [
          {
            path: '',
            name: '修改密码',
            component: UserPassword
          }
        ]
      },
      {
        path: 'blog',
        name: '',
        component: UserLayout,
        children: [
          {
            path: '',
            name: '我的作品',
            component: UserBlog
          }
        ]
      },
      {
        path: 'write',
        name: '',
        component: UserLayout,
        children: [
          {
            path: '',
            name: '发布文章',
            component: UserWrite
          }
        ]
      },
      {
        path: 'write/:blogId',
        name: '',
        component: UserLayout,
        children: [
          {
            path: '',
            name: '编辑文章',
            component: UserWrite
          }
        ]
      },
      {
        path: 'favorites',
        name: '',
        component: UserLayout,
        children: [
          {
            path: '',
            name: '我的喜欢',
            component: UserFavorites
          }
        ]
      },
      {
        path: 'comment',
        name: '',
        component: UserLayout,
        children: [
          {
            path: '',
            name: '我的评论',
            component: UserComment
          }
        ]
      }
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: '管理后台-首页',
        component: AdminHome
      },
      {
        path: 'write',
        name: '写文章',
        component: AdminWrite
      },
      {
        path: 'write/:blogId',
        name: '编辑文章作品',
        component: AdminWrite
      },
      {
        path: 'article',
        name: '文章管理',
        component: AdminArticle
      },
      {
        path: 'category',
        name: '文章分类管理',
        component: AdminCatgory
      },
      {
        path: 'tag',
        name: '文章标签管理',
        component: AdminTag
      },
      {
        path: 'resourceType',
        name: '前端资源类别管理',
        component: AdminResourceType
      },
      {
        path: 'resource',
        name: '前端资源管理',
        component: AdminResource
      },
      {
        path: 'comment',
        name: '评论管理',
        component: AdminComment
      },
      {
        path: 'user',
        name: '用户管理',
        component: AdminUser
      }
    ]
  }
]