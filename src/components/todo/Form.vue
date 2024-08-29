<script setup lang="ts">

import { computed } from 'vue';

const props = defineProps<{
  textTodo: String
}>();

const emit = defineEmits(['addTodo', 'update:textTodo']);

const inputValue = computed({
  get() {
    return props.textTodo;
  },

  set(newValue) {
    emit('update:textTodo', newValue);
  },
});

</script>

<template>
  <form @submit.prevent="$emit('addTodo')">


      <label for="todo">New Todo</label>
      <input type="text" id="todo" v-model.trim="inputValue" />

    <button type="submit" :disabled="!inputValue">Add todo</button>
  </form>
</template>


<style scoped>

form{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

</style>

