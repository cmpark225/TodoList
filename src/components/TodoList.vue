<template>
  <div>
    <p>Completed Task: {{this.$store.state.todos.filter(todo => {return todo.done == true}).length}} </p> 
    <p>Pending Task: {{this.$store.state.todos.filter(todo => {return todo.done == false}).length}} </p>
   
 
    <todo v-on:delete-todo="deleteTodo" v-for="todo in this.$store.state.todos" v-bind:todo="todo"></todo>

  </div>
</template>


<script>
  import Todo from './Todo';

  export default {
     components: {
      Todo,
    },
     methods: {
      deleteTodo(todo){
        const todoIndex = this.$store.state.todos.indexOf(todo);
        this.$store.state.todos.splice(todoIndex,1);
      },
    }
  };
</script>

<style>
</style>
