<script setup lang="ts">
import type { TaskFilter } from '@/types.ts'

const currentFilter = defineModel<TaskFilter>('fType', { default: 'all' })

defineProps<{
	taskFilters: readonly TaskFilter[]
}>()

const updateFilter = (filter: TaskFilter): void => {
	currentFilter.value = filter
}
</script>

<template>
	<button
		v-for="(filter, index) in taskFilters"
		:key="index"
		@click="updateFilter(filter)"
		:class="currentFilter === filter ? 'contrast' : 'secondary'"
	>
		{{ filter ? filter.charAt(0).toUpperCase() + filter.slice(1) : filter }}
	</button>
</template>

<style scoped></style>
