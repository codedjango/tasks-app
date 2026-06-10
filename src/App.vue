<script setup lang="ts">
import { computed, ref } from 'vue'

import FilterButton from '@/components/FilterButton.vue'
import TaskForm from '@/components/TaskForm.vue'
import TaskList from '@/components/TaskList.vue'
import { TASK_FILTERS, type Task, type TaskFilter } from '@/types'

const message = ref<string>('Tasks App')
const tasks = ref<Task[]>([])
const filter = ref<TaskFilter>('all')

const totalDone = computed(() =>
	tasks.value.reduce((total: number, task: Task) => (task.done ? total + 1 : total), 0)
)

const filteredTasks = computed(() => {
	switch (filter.value) {
		case 'all':
			return tasks.value
		case 'todo':
			return tasks.value.filter((t) => !t.done)
		case 'done':
			return tasks.value.filter((t) => t.done)
		default:
			return tasks.value
	}
})

const addTask = (newTask: string) => {
	tasks.value.unshift({
		id: crypto.randomUUID(),
		title: newTask,
		done: false,
	})
}

const toggleDone = (id: string) => {
	const task = tasks.value.find((t) => t.id === id)
	if (task) {
		task.done = !task.done
	}
}

const removeTask = (id: string) => {
	const index = tasks.value.findIndex((t) => t.id === id)
	if (index !== -1) {
		tasks.value.splice(index, 1)
	}
}
</script>

<template>
	<main>
		<h1>{{ message }}</h1>
		<TaskForm @add-task="addTask" />
		<div class="info">
			<h3 v-if="!tasks.length">Add a task to get started.</h3>
			<h3 v-else>{{ totalDone }} / {{ tasks.length }} tasks completed</h3>
			<div
				class="button-container"
				v-if="tasks.length"
			>
				<FilterButton
					:taskFilters="TASK_FILTERS"
					v-model:f-type="filter"
				/>
			</div>
		</div>
		<TaskList
			:tasks="filteredTasks"
			@toggle-done="toggleDone"
			@remove-task="removeTask"
		/>
	</main>
</template>

<style scoped>
main {
	max-width: 1200px;
	margin: 1rem auto;
}

.button-container {
	display: flex;
	justify-content: end;
	gap: 0.5rem;
}

.info {
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
