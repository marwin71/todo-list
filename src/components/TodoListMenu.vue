<template>
  <div class="todo-list-menu level">
    <div class="level-left">
      <a class="level-item has-text-light" :class="{ active: filter === 'active' }" @click="setFilter('active')">Active</a>
      <a class="level-item has-text-light" :class="{ active: filter === 'completed' }" @click="setFilter('completed')">Completed</a>
      <a class="level-item has-text-light" :class="{ active: filter === 'all' }" @click="setFilter('all')">All</a>
    </div>
    <div class="level-right">
      <a class="level-item has-text-light" @click="deleteCompletedItems()">Clear completed</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TodoListMenu',
    computed: {
      filter() {
        return this.$store.getters.getFilter;
      }
    },
    methods: {
      setFilter(value) {
        this.$store.commit('setFilter', value);
      },
      deleteCompletedItems() {
        this.$store.commit('deleteCompletedItems');
      }
    }
  };
</script>

<style>
  .todo-list-menu.level,
  .todo-list-menu .level-left {
    display: flex;
  }
  .todo-list-menu .level-left + .level-right {
    margin-top: 0;
  }
  .todo-list-menu .level-item:not(:last-child) {
    margin-bottom: 0rem;
    margin-right: 0.75rem;
  }
  .todo-list-menu .active {
    border-bottom: 3px solid #00d1b2;
    margin-top: 3px;
  }
</style>