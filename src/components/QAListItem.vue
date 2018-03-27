<template>
  <div class="wrapper">
    <!--<div class="title">QAListItem</div>-->
    <table>
      <tr>
        <td class="column">
          <QList
            :qlist="qalistitem.qlist"
          />
        </td>
        <td class="column">
          <Answer
            :answer="qalistitem.answer"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import QList from '../components/QList'
import Answer from '../components/Answer'

export default {
  components: {
    QList,
    Answer
  },
  props: {
    qalistitem: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .wrapper {
    margin: 20px 0px;
  }
  table {
    width: 100%;
  }
  td {
    width: 50%;
    text-align: center;
  }
</style>
