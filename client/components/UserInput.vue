// src/components/UserInput.vue

<template>
  <div id="user-inputs" class="col-md-5 mb-5">
      <div class="card">
      <div class="form card-body">
        <div class="form-group">    
          <label for="addTodo">Add a new item to the list</label>
          <textarea class="form-control"  v-model="newTodoText" v-on:keyup.enter="createTodo" id="addTodo" rows="3"></textarea>
        </div>
        <button v-on:click="createTodo(e)" class="btn btn-primary float-right">Add todo</button>
      </div>
    </div>
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