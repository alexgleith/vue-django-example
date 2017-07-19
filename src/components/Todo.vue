// src/components/Todo.vue

<template>
  <div class="card">
  	<div class="content">
  		<b>TODO</b><br>
    	{{ todo.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo']
}
</script>