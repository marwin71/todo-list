<template>
  <div class="todo-list-item box level">
    <div class="level-left">
      <div class="level-item" style="line-height: 0">
        <div v-if="item.active" @click="itemActiveChange()">
          <span class="icon has-text-primary">
            <i class="far fa-square fa-lg"></i>
          </span>
        </div>
        <div v-if="!item.active" @click="itemActiveChange()">
          <span class="icon has-text-primary">
            <i class="far fa-check-square fa-lg"></i>
          </span>
        </div>
      </div>
      <div class="level-item">{{ item.title }}</div>
    </div>
    <div class="level-right" @click="itemRemove()">
      <a class="level-item has-text-danger">
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
      itemActiveChange() {
        this.$emit('item-active-change', this.item);
      },
      itemRemove() {
        this.$emit('item-remove', this.item);
      }
    }
  };
</script>

<style>
  .todo-list-item.level,
  .todo-list-item .level-left {
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