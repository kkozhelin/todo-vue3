import { defineStore } from "pinia";
import { ref } from "vue";

import type { Todo } from "@/types/Todo";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>(JSON.parse(localStorage.getItem("todos") || "[]"));

  function addTodo(newTodo: string) {
    if (newTodo) {
      todos.value.push({
        id: Date.now(),
        text: newTodo,
        done: false,
      });
      saveData();
    }
  }

  function toggleTodo(todo: Todo) {
    todo.done = !todo.done;
    saveData();
  }

  function deleteTodo(todo: Todo) {
    todos.value = todos.value.filter((t) => t.id !== todo.id);
    saveData();
  }

  function saveData() {
    localStorage.setItem("todos", JSON.stringify(todos.value));
  }

  return {
    todos,

    addTodo,
    toggleTodo,
    deleteTodo,
  };
});
