<template>
  <div class="todo-list-menu level">
    <div class="level-right">
      <a class="level-item" :class="{ active: activeFilter === 'all' }" @click="filter('all')">All</a>
      <a class="level-item" :class="{ active: activeFilter === 'active' }" @click="filter('active')">Active</a>
      <a class="level-item" :class="{ active: activeFilter === 'completed' }" @click="filter('completed')">Completed</a>
    </div>
    <div class="level-right">
      <a class="level-item" @click="removeCompletedItems()">Remove completed</a>
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
  .active {
    font-weight: bold;
  }
</style>