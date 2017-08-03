// src/components/Todo.vue

<template>
  <div class="card">
    <div class="content">
        <div class="right floated meta">
            <button class="ui red button mini" v-on:click="deleteTodo(todo)">
              <i class="icon minus circle centre"></i>
            </button>
        </div>
        <div v-if="todo.editing">
          <input type:"text" v-model="todo.text" v-on:keyup.enter="updateTodo(todo)">
        </div>
        <div v-else v-on:click="toggleEditing(todo)">
          {{ todo.text }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    deleteTodo (todo) {
      this.$store.dispatch('deleteTodo', todo)
    },
    toggleEditing (todo) {
      todo.editing = true
    },
    updateTodo (todo) {
      this.$store.dispatch('updateTodo', todo)
      todo.editing = false
    }
  }
}
</script>
