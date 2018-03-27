<template>
  <div class="wrapper">
    <QAListItem
      v-for="qalistitem in qalist"
      :key="qalistitem.id"
      :qalistitem="qalistitem"
    />
  </div>
</template>

<script>
import QAListItem from '../components/QAListItem'

let nextQAListItemID = 1
let nextQListId = 1

export default {
  components: {
    QAListItem
  },
  data: function () {
    return {
      qalist: [
        {
          id: nextQAListItemID++,
          qlist: [
            {
              id: nextQListId++,
              text: 'Was I the sun?'
            },
            {
              id: nextQListId++,
              text: 'I was doing all the things that will be cool?'
            }
          ],
          answer: {
            text: 'Before it was cool.'
          }
        },
        {
          id: nextQAListItemID++,
          qlist: [
            {
              id: nextQListId++,
              text: 'Was fuse ignited?'
            }
          ],
          answer: {
            text: 'And they were gone!'
          }
        },
        {
          id: nextQAListItemID++,
          qlist: [
            {
              id: nextQListId++,
              text: 'Fernand, the traitor! Where is he?'
            },
            {
              id: nextQListId++,
              text: 'Mercedes, am I back in Marseilles?'
            }
          ],
          answer: {
            text: 'Oh, Dantes, do you still love me?'
          }
        },
        {
          id: nextQAListItemID++,
          qlist: [
            {
              id: nextQListId++,
              text: 'Who trespassed our garden?'
            }
          ],
          answer: {
            text: 'En garde!'
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  /*background-color: whitesmoke;*/
}
</style>
