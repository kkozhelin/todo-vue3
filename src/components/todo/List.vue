<script setup lang="ts">

import type { Todo } from '../../types/Todo';

defineProps<{
  todos: Todo[]
}>();

defineEmits(['toggleTodo', 'deleteTodo']);
</script>


<template>
  <ul v-if="todos.length">
    <li v-for="todo in todos" :key="todo.id"><span @click="$emit('toggleTodo', todo)" :class="{ done: todo.done }">
      {{ todo.text }}</span>
      <button @click="$emit('deleteTodo', todo)" >Delete</button>
    </li>
  </ul>
  <h4 v-else>Empty list</h4>
</template>


<style scoped>

.done {
  text-decoration: line-through;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

li{
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  border-bottom: 1px solid white;
  padding: 0.5rem;
}

span{
  cursor: pointer;
}
</style>