<template>
  <div id="app" class="container is-max-desktop">
    <TodoListInput />
    <TodoListMenu />
    <TodoList />
  </div>
</template>

<script>
  import TodoListInput from './components/TodoListInput.vue';
  import TodoListMenu from './components/TodoListMenu.vue';
  import TodoList from './components/TodoList.vue';

  export default {
    name: 'App',
    components: {
      TodoList,
      TodoListMenu,
      TodoListInput
    }
  };
</script>

<style>
  body {
    background-color: #00b0b9;
    min-height: 100vh;
  }
  #app {
    padding: 1rem 0.5rem;
  }
</style>
