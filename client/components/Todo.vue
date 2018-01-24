<template>
  <div class="card">
    <div class="card-body">
      <div v-if="todo.editing" class="input-group">
        <input type="text" v-model="todo.temptext" v-on:keyup.esc="toggleEditing" class="form-control" placeholder="Todo...">
        <div class="input-group-append">
          <button v-on:click="updateTodo(todo)" class="btn btn-success">Save</button>
        </div>
        <div class="input-group-append">
          <button v-on:click="toggleEditing(todo)" class="btn btn-secondary">Cancel</button>
        </div>
      </div>
      <div v-else>
        <p class="card-text" v-on:click="toggleEditing(todo)">{{ todo.text }}</p>
        <div class="btn-group float-right">
          <button type="button" class="btn btn-secondary" v-on:click="toggleEditing(todo)">Edit</button>
          <button type="button" class="btn btn-danger" v-on:click="deleteTodo(todo)">Delete</button>
        </div>
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
      todo.temptext = todo.text
      todo.editing = !todo.editing
    },
    updateTodo (todo) {
      todo.text = todo.temptext
      this.$store.dispatch('updateTodo', todo)
      todo.editing = false
    }
  }
}
</script>
