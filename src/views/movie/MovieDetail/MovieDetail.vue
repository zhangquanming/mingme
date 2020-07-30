<template>
  <div class="z-container">
    <div class="z-row">
      <div class="z-col-sm-45">
        <z-video :src="videoUrl" :poster="videoPoster" />
        <div class="movie-brief" v-loading="isLoading">
          <h2 class="movie-brief-title">
            {{ movieDetail.original_title }} <span class="movie-brief-year">({{ movieDetail.year }})</span>
          </h2>
          <p class="movie-brief-introduce">{{ movieDetail.summary }}</p>
        </div>
        <ul class="movie-reviews-wrap" v-loading="isLoading">
          <movie-reviews-item v-for="review in movieDetail.popular_reviews" :key="review.id" :review="review" />
        </ul>
      </div>

      <div class="z-col-sm-15" v-loading="isLoading">
        <movie-info-card :movieDetail="movieDetail" />
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/api-douban'
import ZVideo from '@/components/base/ZVideo/ZVideo'
import MovieInfoCard from '@/views/movie/components/MovieInfoCard'
import MovieReviewsItem from '@/views/movie/components/MovieReviewsItem'

export default {
  name: 'MovieDetail',
  components: {
    ZVideo,
    MovieReviewsItem,
    MovieInfoCard
  },
  data () {
    return {
      isLoading: false,
      movieDetail: {}
    }
  },
  computed: {
    videoUrl () {
      const trailerUrls = this.movieDetail.trailer_urls
      if (trailerUrls && trailerUrls.length > 0) {
        return trailerUrls[0]
      }
      return ''
    },
    videoPoster () {
      const trailers = this.movieDetail.trailers
      if (trailers && trailers.length > 0) {
        return trailers[0].medium
      }
      return ''
    }
  },
  mounted () {
    this.requestMovieDetail()
  },
  methods: {
    /**
     * @desc 请求详情
     */
    requestMovieDetail () {
      this.isLoading = true
      api
        .DoubanMovieMovieDetail({ id: this.$route.params.movieId })
        .then(res => {
          this.isLoading = false
          this.movieDetail = res
        })
        .catch(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="less" scoped>
.movie-reviews-wrap {
  margin-top: 20px;
  padding: 0 15px;
  background-color: #fff;
}
.movie-brief {
  padding: 15px;
  background-color: #fff;
  &-title {
    font-size: 30px;
    font-weight: 400;
  }
  &-year {
    margin: 0 5px;
    color: @colorTextContent;
  }
  &-introduce {
    color: @colorTextContent;
    text-align: justify;
  }
}
</style>
