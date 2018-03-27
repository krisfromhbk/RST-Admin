<template>
  <div class="wrapper">
    {{ answer.text }}
  </div>
</template>

<script>
export default {
  props: {
    answer: {
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
    margin: 0px 20px;
  }
</style>
