<template>
  <div class="no-data-wrap">
    <Icon type="iconno-data" class="no-data-icon" :size="size" :color="color"></Icon>
  </div>
</template>

<script>
import Icon from '@/components/base/icon/icon'
export default {
  name: 'NoData',
  props: {
    size: {
      type: [Number, String],
      default: 150
    },
    color: {
      type: String,
      default: '#ccc'
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="less" scoped>
.no-data-wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
