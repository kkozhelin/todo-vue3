<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "@/store/Todo";

const todoStore = useTodoStore();

const inputValue = ref("");

function addTodo() {
  if (inputValue.value) {
    todoStore.addTodo(inputValue.value);
    inputValue.value = "";
  }
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <label for="todo">New Todo</label>
    <input type="text" id="todo" v-model.trim="inputValue" />

    <button type="submit" :disabled="!inputValue">Add todo</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>
