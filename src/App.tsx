import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
import Inputs from './Components/Inputs'
import Result from './Components/Result'
import { ToDoItem } from './Types'

function App() {
	const [tasks, setTasks] = useState<ToDoItem[]>([])

	const [infoDelete, setInfoDelete] = useState<string>('stan działania')

	const addTasks = (task: ToDoItem) => {
		if (tasks.length < 10) {
			setTasks([...tasks, task])
			setInfoDelete('dodano prawidłowo')
		}
	}

	// useEffect(() => {
	// 	if (tasks.length === 0) {
	// 		setInfoDelete('usunięto wszystkie zadania')
	// 	}
	// }, [tasks.length])

	const handleDeleteTask = (id: string | number) => {
		const deleteTask = tasks.filter(item => item.id !== id)
		setTasks(deleteTask)

		if (deleteTask) {
			setInfoDelete('usunięto zadanie')
		}

		if (deleteTask.length === 0) {
			setInfoDelete('usunięto wszystkie zadania')
		}
	}

	// console.log(infoDelete)

	// useEffect(() => {
	// 	if (deleteTask) {
	// 		setInfoDelete('usunięto zadanie')
	// 	}
	// }, [])

	return (
		<div className={styles.wrapper}>
			<Inputs addToInput={addTasks} tasksLenght={tasks} infoDelete={infoDelete} />
			<Result addToResult={tasks} deleteTask={handleDeleteTask} />
		</div>
	)
}

export default App
