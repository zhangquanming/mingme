<template>
  <div v-loading="isLoading" style="min-height: 300px;">
    <div class="z-container">
      <ebook-menu />
      <div class="z-row">
        <div class="z-col-xl-15 z-col-lg-20 z-col-sm-30" v-for="part in rankData" :key="`${part.title}-${$route.params.rankType}`">
          <ebook-rank-part :dataSource="part"></ebook-rank-part>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/api-ebook'

import EbookMenu from '../components/ebook-menu'
import EbookRankPart from './ebook-ranking-part'

export default {
  name: 'EbookRanking',
  components: {
    EbookMenu,
    EbookRankPart
  },
  data () {
    return {
      isLoading: false,
      rankData: []
    }
  },
  mounted () {
    this.getRankingBook()
  },
  beforeRouteUpdate (to, from, next) {
    if (to.path.indexOf('/ebook/ranking') > -1) {
      this.getRankingBook(to.params.rankType)
    }
    next()
  },
  methods: {
    /**
     * @desc 获取排行榜书籍
     */
    getRankingBook (rankType = this.$route.params.rankType) {
      this.isLoading = true
      api
        .getRankingBook({ rankType })
        .then(res => {
          this.isLoading = false
          this.rankData = res.result
        })
        .catch(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
