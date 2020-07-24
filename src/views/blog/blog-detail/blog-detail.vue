<template>
  <div class="z-container">
    <div class="z-row">
      <div class="z-col-lg-42 z-col-xl-45">
        <Card padding="0"></Card>
      </div>
      <div class="z-col-lg-18 z-col-xl-15 visible-lg visible-xl"></div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/base/card/card'
export default {
  name: 'BlogDetail',
  components: {
    Card
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang="less" scoped>
.fixed-side-card {
  position: fixed;
  top: @heightHeader + 20;
  width: 100%;
  @media screen and (min-width: @breakpoints-xs) {
    // min-width: 320px;
  }

  @media screen and (min-width: @breakpoints-sm) {
    max-width: @containerMaxWidth-sm * 7 / 24 - 16;
  }

  @media screen and (min-width: @breakpoints-md) {
    max-width: @containerMaxWidth-md * 7 / 24 - 16;
  }

  @media screen and (min-width: @breakpoints-lg) {
    max-width: @containerMaxWidth-lg * 7 / 24 - 16;
  }

  @media screen and (min-width: @breakpoints-xl) {
    max-width: @containerMaxWidth-xl * 6 / 24 - 16;
  }
}
</style>
