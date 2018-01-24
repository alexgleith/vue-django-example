<template>
  <div id="app" class="container">
    <div class="py-5 text-center">
      <h2 class="h1">Todo List</h2>
      <div class="row justify-content-md-center">
        <user-input></user-input>
      </div>
      <div class="row justify-content-md-center">
        <todo-list></todo-list>
      </div>
    </div>
  </div>
</template>
<style>
</style>

<script>
import TodoList from '../components/TodoList.vue'
import UserInput from '../components/UserInput.vue'

export default {
  components: {
    UserInput,
    TodoList
  },
  mounted () {
    this.$store.dispatch('getTodos')
  }
}
</script>
