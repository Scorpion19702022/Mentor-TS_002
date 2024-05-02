export type ToDoItem = {
	id: number | string
	task: string
	isComplete: boolean
}

export type Content = {
	content: ToDoItem[]
}

export type InputProps = {
	addToInput: (task: ToDoItem) => void
	tasksLenght: ToDoItem[]
	infoDelete: string
	findTask: Content
}

export type ResultProps = {
	addToResult: ToDoItem[]
	deleteTask: (id: string | number) => void
}

export type TaskViewProps = {
	content: ToDoItem
	toTaskView: (id: string | number) => void
}
