<template>
  <Card :padding="padding">
    <NoData />
  </Card>
</template>

<script>
import Card from '@/components/base/Card/Card'
import NoData from '@/components/kit/NoData/NoData'

export default {
  name: 'CardNoData',
  props: {
    padding: {
      type: [String, Number],
      default: 0
    }
  },
  components: {
    Card,
    NoData
  }
}
</script>
