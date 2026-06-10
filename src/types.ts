export interface Task {
	id: string
	title: string
	done: boolean
}

export type TaskFilter = 'all' | 'done' | 'todo'
export const TASK_FILTERS = ['all', 'done', 'todo'] as const
