<template>
  <div class="todo-list">
    <TodoListItem v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
  import TodoListItem from './TodoListItem.vue';

  export default {
    name: 'TodoList',
    components: {
      TodoListItem
    },
    created() {
      this.$store.dispatch('loadItems');
    },
    computed: {
      items() {
        return this.$store.getters.getItems;
      }
    }
  };
</script>
<style>
  .todo-list {
    display: flex;
    flex-flow: column;
  }
</style>