<template>
  <div class="todo-list-item box level" :style="{ order: this.item.starred ? '0' : '1' }">
    <div class="level-left">
      <div class="level-item" @click="toggleActive()">
        <div v-if="item.active">
          <a class="has-text-primary">
            <i class="far fa-lg fa-square"></i>
          </a>
        </div>
        <div v-if="!item.active">
          <a class="has-text-primary">
            <i class="far fa-lg fa-check-square"></i>
          </a>
        </div>
      </div>
      <div class="level-item">{{ item.title }}</div>
    </div>
    <div class="level-right">
      <a class="level-item" :class="item.starred ? 'has-text-warning' : 'has-text-grey-lighter'" @click="toggleStarred()">
        <i class="fas fa-star"></i>
      </a>
      <a class="level-item has-text-danger" @click="deleteItem()">
        <i class="far fa-trash-alt"></i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TodoListItem',
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      toggleActive() {
        this.$store.commit('toggleActive', this.item);
      },
      toggleStarred() {
        this.$store.commit('toggleStarred', this.item);
      },
      deleteItem() {
        this.$store.commit('deleteItem', this.item.id);
      }
    }
  };
</script>

<style>
  .todo-list-item {
    margin-bottom: 1.5rem;
  }
  .todo-list-item.level,
  .todo-list-item .level-left,
  .todo-list-item .level-right {
    display: flex;
  }

  .todo-list-item .level-left + .level-right {
    margin-top: 0;
  }

  .todo-list-item .level-item:not(:last-child) {
    margin-bottom: 0rem;
    margin-right: 0.75rem;
  }
  .todo-list-item .icon {
    cursor: pointer;
  }
</style>