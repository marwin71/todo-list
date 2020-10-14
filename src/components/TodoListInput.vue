<template>
  <div class="field has-addons">
    <div class="control is-expanded">
      <input type="text" v-model="title" placeholder="Add a thing to do" @keyup.enter="addItem()" class="input is-rounded is-fullwidth" ref="input" />
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
        title: ''
      };
    },
    methods: {
      addItem() {
        if (this.title.trim().length < 1) return false;

        let item = {
          id: Date.now(),
          title: this.title,
          active: true,
          starred: false
        };
        
        this.$store.commit('addItem', item);
        this.title = '';
        this.$refs.input.focus();
      }
    }
  };
</script>