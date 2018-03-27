import Vue from 'vue'
import Router from 'vue-router'
import QAList from '@/components/QAList'
import QAListItem from '@/components/QAListItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QAList',
      component: QAList
    },
    {
      path: '/',
      name: 'QAListItem',
      component: QAListItem
    }
  ]
})
