<template>
  <div class="col-md-5 mb-5">
    <todo v-for="todo in todos"
            v-bind:todo="todo" 
            v-bind:key="todo.id">
    </todo>
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
