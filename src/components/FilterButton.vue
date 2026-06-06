<script setup lang="ts">
import type {TaskFilter} from "@/types.ts";

const fType = defineModel<TaskFilter>('fType', {default: 'all'})

const props = defineProps<{
  filterType: TaskFilter
}>()

const updateFilter = (): void => {
  fType.value = props.filterType;
};
</script>

<template>
  <button @click="updateFilter" :class="fType === props.filterType ? 'contrast' : 'secondary'">
    {{ filterType }}
  </button>
</template>

<style scoped>
button {
  text-transform: capitalize;
}
</style>