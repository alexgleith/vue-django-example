// src/App.vue

<template>  
  <style type="text/css">
    body {
      background-color: #DADADA;
    }
    body > .grid {
      height: 100%;
    }
    .column {
      margin-top: 20px;
    }
    .column {
      max-width: 800px;
    }
  </style>
  <div id="app" class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui charcoal header">Todo List</h2>
      <div class="ui large column">
        <user-input></user-input>
      </div>
      <div class="ui large column">
        <todo-list></todo-list>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import UserInput from './components/UserInput.vue'

export default {
  components: {
    UserInput,
    TodoList
  }
}
</script>