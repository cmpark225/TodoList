<template>
  <div>

    <p>Completed Task: {{todos.filter(todo => {return todo.done == true}).length}} </p> 
    <p>Pending Task: {{todos.filter(todo => {return todo.done == false}).lenght}} </p> 
    
    <todo v-for="todo in todos" v-bind:todo="todo"></todo>


  </div>
</template>


<script>
  import Todo from './Todo';

  export default {
     props:['todos'],
     components: {
      Todo,
    },
  };
</script>

<style>
</style>
