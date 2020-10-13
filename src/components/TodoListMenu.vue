<template>
  <div class="todo-list-menu level">
    <div class="level-left">
      <a class="level-item has-text-light" :class="{ active: activeFilter === 'all' }" @click="filter('all')">All</a>
      <a class="level-item has-text-light" :class="{ active: activeFilter === 'active' }" @click="filter('active')">Active</a>
      <a class="level-item has-text-light" :class="{ active: activeFilter === 'completed' }" @click="filter('completed')">Completed</a>
    </div>
    <div class="level-right">
      <a class="level-item has-text-light" @click="removeCompletedItems()">Remove completed</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TodoListMenu',
    data() {
      return {
        activeFilter: 'all'
      };
    },
    methods: {
      filter(value) {
        this.$emit('filter-change', value);
        this.activeFilter = value;
      },
      removeCompletedItems() {
        this.$emit('remove-completed-items');
      },
      reset() {
        this.activeFilter = 'all';
      }
    }
  };
</script>

<style>
.todo-list-menu.level, .todo-list-menu .level-left {
    display: flex;
  }
   .todo-list-menu .level-left + .level-right {
    margin-top: 0;
  }
  .todo-list-menu .level-item:not(:last-child) {
    margin-bottom: 0rem;
    margin-right: 0.75rem;
  }


  .active {
    font-weight: bold;
  }
</style>