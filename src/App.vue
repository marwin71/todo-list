<template>
  <div id="app" class="container is-max-desktop">
    <TodoListInput @item-added="itemAdd($event)" ref="input" />
    <TodoListMenu @filter-change="filterChange($event)" @clear-completed-items="clearCompletedItems()" ref="menu" />
    <div class="todo-list">
      <TodoListItem v-for="item in filteredItems" :key="item.id" :item="item" @item-updated="saveItems()" @item-remove="itemRemove($event)" />
    </div>
  </div>
</template>

<script>
  import TodoListInput from './components/TodoListInput.vue';
  import TodoListMenu from './components/TodoListMenu.vue';
  import TodoListItem from './components/TodoListItem.vue';
  import db from './utils/database.js';

  export default {
    name: 'App',
    components: {
      TodoListItem,
      TodoListMenu,
      TodoListInput
    },
    data() {
      return {
        items: [],
        filter: 'all'
      };
    },
    mounted() {
      this.items = db.loadItems();
      this.$refs.input.setFocus();
    },
    computed: {
      filteredItems() {
        if (this.filter === 'active') return this.items.filter((item) => item.active);
        if (this.filter === 'completed') return this.items.filter((item) => !item.active);
        return this.items;
      }
    },
    methods: {
      itemAdd(itemTitle) {
        let item = {
          id: Date.now(),
          title: itemTitle,
          active: true,
          starred: false
        };

        this.items.push(item);
        this.saveItems();
      },

      itemRemove(item) {
        this.items = this.items.filter((currentItem) => currentItem !== item);
        this.saveItems();
      },

      clearCompletedItems() {
        this.items = this.items.filter((currentItem) => currentItem.active);
        this.saveItems();
      },

      saveItems() {
        db.saveItems(this.items);
        this.$refs.input.setFocus();
        if (this.filteredItems.length === 0) {
          this.$refs.menu.reset();
        }
      },

      filterChange(value) {
        this.filter = value;
      }
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
  .todo-list {
    display: flex;
    flex-flow: column;
  }
</style>
