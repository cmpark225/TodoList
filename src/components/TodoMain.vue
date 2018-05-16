<template>
  <div>
    <h1 class="ui dividing centered header">Vue.js Todo App</h1>
    <div class="ui three column centered grid">
      <div class="column">
        <todo-list v-bind:todos="todos"></todo-list>
        <create-todo v-on:add-todo="addTodo"></create-todo>
      </div>
    </div>
  </div>
</template>



<script>
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';


export default{
  components: {
    TodoList,
    CreateTodo,
  },
  data(){
    return {
      todos: [
        {
          title: 'Todo A',
          project: 'Project A',
          done: false,
        },  
        {
          title: "Todo B",
          project: 'Project B',
          done: true,
        },  
        {
          title: 'Todo C',
          project: 'Project C',
          done: false,
        },  
      ]
    }
  },
  methods: {
    addTodo(todo){
      this.todos.push({
        title:todo.title,
        project:todo.project,
        done: false
      });
    },
  },
}


</script>
