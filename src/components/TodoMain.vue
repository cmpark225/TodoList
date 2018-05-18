<template>
  <div>
    <h1 class="ui dividing centered header">Vue.js Todo App</h1>
    <div class="ui three column centered grid">
      <div class="column">
        <todo-list></todo-list>
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
    'todo-list': TodoList,
    'create-todo': CreateTodo,
  },
  data(){
    return {
    }
  },
  methods: {
    addTodo(todo){
      this.$store.state.todos.push({
        title:todo.title,
        project:todo.project,
        done: false
      });
    },

  },
}


</script>
