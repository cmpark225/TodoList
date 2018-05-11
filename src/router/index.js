import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/Example'
import TodoPage from '@/components/TodoPage'
import TodoMain from '@/components/TodoMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
    {
      path: '/todos',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path: '/todo_list',
      name: 'TodoList',
      component: TodoMain
    }

  ]
})
