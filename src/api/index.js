import request from '@/utils/request'

export default {
  /**
   * @desc 分类
   */

  // 获取文章分类列表
  GetCategory: (params, options) => request.get('/categories', params, options),

  // 新增文章分类
  PostCategory: (params, options) => request.post('/categories', params, options),

  // 修改文章分类
  PutCategory: (params, options) => request.put(`/categories/${params.categoryId}`, params, options),

  // 删除文章分类
  DeleteCategory: (params, options) => request.delete(`/categories/${params.categoryId}`, params, options),

  /**
   * @desc 文章
   */

  // 获取文章列表
  GetBlogList: (params, options) => request.get('/blogs', params, options),

  // 获取文章列表
  GetBlogDetail: (params, options) => request.get(`/blogs/${params.blogId}`, params, options),

  // 发布文章
  PostBlog: (params, options) => request.post('/blogs', params, options),

  // 点赞
  PostBlogLike: (params, options) => request.post('/blogs/like', params, options),

  // 取消点赞
  PostBlogUnLike: (params, options) => request.post('/blogs/unlike', params, options),

  // 修改文章
  PutBlog: (params, options) => request.put(`/blogs/${params.blogId}`, params, options),

  // 删除文章
  DeleteBlog: (params, options) => request.delete(`/blogs/${params.blogId}`, params, options)
}