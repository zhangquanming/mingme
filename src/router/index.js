import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Index = () => import(/* webpackChunkName: "index" */ '@/views/index/home')
const AppLayout = () => import(/* webpackChunkName: "index" */ '@/components/framework/app-layout/app-layout')
const BlogList = () => import(/* webpackChunkName: "index" */ '@/views/blog/blog-list/blog-list')

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
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
