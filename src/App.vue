<template>
  <div id="app" class="container is-max-desktop">
    <TodoListInput @item-added="itemAdd($event)" ref="input" />
    <TodoListMenu @filter-change="setFilter($event)" @remove-completed-items="removeCompleted()" ref="menu" />
    <TodoList :items="filteredItems" @item-active-change="itemActiveChange($event)" @item-remove="itemRemove($event)" ref="list" />
  </div>
</template>

<script>
import TodoListInput from "./components/TodoListInput.vue";
import TodoListMenu from "./components/TodoListMenu.vue";
import TodoList from "./components/TodoList.vue";
import db from "./utils/database.js";

export default {
  name: "App",
  components: {
    TodoList,
    TodoListMenu,
    TodoListInput
  },

  data() {
    return {
      items: [],
      filter: 'all'
    }
  },
  
  mounted() {
    this.items = db.loadItems();
    this.$refs.input.setFocus();
  },

  computed: {
    filteredItems() {
      if (this.filter === "active")
        return this.items.filter((item) => item.active);

      if (this.filter === "completed")
        return this.items.filter((item) => !item.active);

      return this.items;
    },
  },

  methods: {
    itemAdd(item) {
      this.items.push(item);
      this.saveItems();
    },

    itemActiveChange(item) {
      item.active = !item.active
      this.saveItems();
    },

    itemRemove(item) {
      setTimeout(() => {
        this.items = this.items.filter((currentItem) => currentItem !== item)
        this.saveItems();
      }, 300);
    },

    removeCompleted() {
      this.items = this.items.filter((currentItem) => currentItem.active);
      this.saveItems();
    },

    saveItems(){
      db.saveItems(this.items);
      this.$refs.input.setFocus();
      if( this.filteredItems.length === 0) {
        this.$refs.menu.reset();
      }
    },

    setFilter(value) {
      this.filter = value;
    }
  },
};
</script>

<style>
body {
  background-color: lightblue;
  min-height: 100vh;
}
#app {
  padding-top: 1rem;
}
</style>
