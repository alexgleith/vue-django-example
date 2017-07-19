// src/components/UserInput.vue

<template>
  <div id="user-inputs" class="ui large">
    <div class="ui left icon input">
      <i class="plus icon"></i>
      <input type:"text" v-model="newTodoText" v-on:keyup.enter="createTodo">
    </div>
    <button class="ui red button" v-on:click="clearTodos">
      <i class="icon minus circle"></i>
      Clear
    </button>
  </div>
</template>

<script>
export default {
  data: function () {
    return { newTodoText: '' }
  },
  methods: {
    createTodo () {
      this.$store.dispatch('addTodo', {text: this.newTodoText})
      this.newTodoText = ''
    },
    clearTodos () {
      this.$store.dispatch('clearTodos')
    }
  }
}
</script>