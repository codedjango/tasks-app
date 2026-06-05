<script setup lang="ts">
import type {TaskFilter} from "@/types.ts";

defineProps<{
  filterType: TaskFilter
  currentFilter: TaskFilter
}>()

const emit = defineEmits<{
  selectedFilter: [selectedFilterType: TaskFilter]
}>()
</script>

<template>
  <button @click="emit('selectedFilter', filterType)"
          :class="currentFilter === filterType ? 'contrast' : 'secondary'">
    {{ filterType }}
  </button>
</template>

<style scoped>
button {
  text-transform: capitalize;
}
</style>