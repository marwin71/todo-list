<template>
  <div class="todo-list">
     <TodoListItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @item-active-change="itemActiveChange($event)"
      @item-remove="itemRemove($event)"
    />
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
  props: {
    items:  {
        type: Array,
        required: true
    }
  },
   methods: {
    itemActiveChange(item) {
      this.$emit("item-active-change", item);
    },
    itemRemove(item) {
      this.$emit("item-remove", item);
    }
  },
};
</script>