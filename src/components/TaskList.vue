<script setup lang="ts">
import type { Task } from '@/types.ts'

defineProps<{
	tasks: Task[]
}>()

const emit = defineEmits<{
	toggleDone: [taskId: string]
	removeTask: [taskId: string]
}>()
</script>

<template>
	<TransitionGroup
		name="list"
		tag="div"
		class="task-list"
	>
		<article
			v-for="task in tasks"
			:key="task.id"
		>
			<div>
				<input
					type="checkbox"
					:id="`task-${task.id}`"
					@input="emit('toggleDone', task.id)"
					:checked="task.done"
				/>
				<label :for="`task-${task.id}`">
					<span :class="{ done: task.done }">
						{{ task.title }}
					</span>
				</label>
			</div>
			<div>
				<button
					@click="emit('removeTask', task.id)"
					class="outline"
				>
					Remove
				</button>
			</div>
		</article>
	</TransitionGroup>
</template>

<style scoped>
.task-list {
	margin-top: 1rem;
}

.done {
	text-decoration: line-through;
}

article {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(300px);
}
</style>
