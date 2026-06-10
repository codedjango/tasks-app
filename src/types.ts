export interface Task {
	id: string
	title: string
	done: boolean
}

export const TASK_FILTERS = ['all', 'done', 'todo'] as const
export type TaskFilter = (typeof TASK_FILTERS)[number]
