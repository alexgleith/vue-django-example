// src/components/Todo.vue

<template>
  <div class="ui card">
    <div class="content">
      <div class="header">Todo</div>
        <div v-if="todo.editing">
          <div class="ui input">
            <input type:"text" v-model="todo.text" v-on:keyup.enter="updateTodo(todo)">
          </div>
        </div>
        <div class="description" v-else v-on:click="toggleEditing(todo)">
          {{ todo.text }}
        </div>
    </div>
      <div class="ui bottom attached button red"v-on:click="deleteTodo(todo)">
        <i class="icon minus circle"></i>
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
