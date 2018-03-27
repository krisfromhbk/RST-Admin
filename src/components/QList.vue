<template>
  <div>
    <QListItem
      v-for="qlistitem in qlist"
      :key="qlistitem.id"
      :qlistitem="qlistitem"
    />
  </div>
</template>

<script>
import QListItem from '../components/QListItem'

export default {
  components: {
    QListItem
  },
  props: {
    qlist: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
