export type ToDoItem = {
	id: number | string
	task: string
	isComplete: boolean
}

export type InputProps = {
	addToInput: (task: ToDoItem) => void
	tasksLenght: ToDoItem[]
	infoDelete: string
	deleteTask: (id: string | number) => void
}

export type ResultProps = {
	addToResult: ToDoItem[]
	deleteTask: (id: string | number) => void
}

export type TaskResultProps = {
	content: ToDoItem
	toTaskView: (id: string | number) => void
}
