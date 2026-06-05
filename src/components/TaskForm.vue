<script setup lang="ts">
import {ref} from "vue";

const newTask = ref<string>('');
const error = ref<string>('');

const emit = defineEmits<{
  addTask: [newTaskStr: string]
}>()

const handleSubmit = (): void => {
  if (!newTask.value.trim()) {
    error.value = 'Task cannot be empty';
    return;
  }
  emit('addTask', newTask.value.trim());
  newTask.value = '';
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label for="new-task">New Task:</label>
    <input id="new-task" type="text" placeholder="Enter a new task" v-model="newTask" @input="error = ''"
           :aria-invalid="!!error || undefined" aria-describedby="invalid-helper"/>
    <small v-if="error" id="invalid-helper">
      {{ error }}
    </small>
    <div class="button-container">
      <button class="outline">Add Task</button>
    </div>
  </form>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: end;
}
</style>