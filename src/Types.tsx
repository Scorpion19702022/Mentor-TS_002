export type ToDoItem = {
	id: number | string
	task: string
	isComplete: boolean
}

export type Content = {
	content: string | number
}

export type InputProps = {
	addToInput: (task: ToDoItem) => void
	tasksLenght: ToDoItem[]
	infoDelete: string
	inContents: Content
}

export type ResultProps = {
	addToResult: ToDoItem[]
	deleteTask: (id: string | number) => void
}

export type TaskResultProps = {
	content: ToDoItem
	toTaskView: (id: string | number) => void
}
