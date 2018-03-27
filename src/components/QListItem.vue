<template>
  <div class="wrapper">
    {{ qlistitem.text }}
  </div>
</template>

<script>
export default {
  props: {
    qlistitem: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .wrapper {
    background-color: white;
    padding: 20px 0px;
    margin: 15px 20px;
  }
</style>
