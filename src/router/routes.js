
const AppLayout = () => import(/* webpackChunkName: "AppLayout" */ '@/components/framework/app-layout/app-layout')

const Index = () => import(/* webpackChunkName: "Index" */ '@/views/index/home')

const BlogList = () => import(/* webpackChunkName: "BlogList" */ '@/views/blog/blog-list/blog-list')
const BlogDetail = () => import(/* webpackChunkName: 'BlogDetail' */ '@/views/blog/blog-detail/blog-detail')

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
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
        path: 'detail/:blogId',
        name: '文章详情',
        component: BlogDetail
      }
    ]
  }
]

export default routes