// src/components/Todo.vue

<template>
  <div class="card">
    <div class="content">
        <div class="right floated meta">
            <button class="ui red button mini" v-on:click="deleteTodo(todo)">
              <i class="icon minus circle centre"></i>
            </button>
        </div>
        <div>
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
    }
  }
}
</script>