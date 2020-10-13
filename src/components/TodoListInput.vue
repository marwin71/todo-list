<template>
  <div class="field has-addons">
    <div class="control is-expanded">
      <input type="text" v-model="itemTitle" placeholder="Add a thing to do" @keyup.enter="addItem()" class="input is-rounded is-fullwidth" ref="input" />
    </div>
    <div class="control">
      <button @click="addItem()" class="button is-primary is-rounded">
        <span class="icon is-small">
          <i class="fas fa-plus"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TodoListInput',

    data() {
      return {
        itemTitle: ''
      };
    },

    methods: {
      addItem() {
        if (this.itemTitle.trim().length < 1) return false;
        this.$emit('item-added', this.itemTitle);
        this.itemTitle = '';
      },

      setFocus() {
        this.$refs.input.focus();
      }
    }
  };
</script>