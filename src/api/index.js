import request from '@/utils/request'

export default {
  // 获取文章列表
  GetBlogList: (params, options) => request.get('/blogs', params, options)
}