// src/components/TodoList.vue

<template>
  <div id="todolist" class="ui large">
    <div class="ui three doubling cards">
      <todo v-for="todo in todos"
            v-bind:todo="todo" 
            v-bind:key="todo.id">
      </todo>
    </div>
  </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
  components: {
    Todo
  },
  computed: {
    todos () {
      return this.$store.state.todos
    }
  }
}
</script>