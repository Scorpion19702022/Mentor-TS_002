import React, { useState } from 'react'
import styles from './App.module.css'
import Inputs from './Components/Inputs'
import Result from './Components/Result'
import { ToDoItem } from './Types'

function App() {
	const [tasks, setTasks] = useState<ToDoItem[]>([])

	// const [infoDelete, setInfoDelete] = useState<deleteInfo>()

	const addTasks = (task: ToDoItem) => {
		if (tasks.length < 10) {
			setTasks([...tasks, task])
		}
	}

	const handleDeleteTask = (id: string | number) => {
		const deleteTask = tasks.filter(item => item.id !== id)
		setTasks(deleteTask)
		// if (!deleteTask) {
		// 	setInfoDelete()
		// }
	}

	return (
		<div className={styles.wrapper}>
			<Inputs addToInput={addTasks} tasksLenght={tasks} />
			<Result addToResult={tasks} deleteTask={handleDeleteTask} />
		</div>
	)
}

export default App
