import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import styles from './Inputs.module.css'
import { InputProps, ToDoItem } from '../Types'

const Inputs: React.FC<InputProps> = ({ addToInput, tasksLenght, infoDelete }) => {
	const [content, setContent] = useState('')

	const [infoState, setInfoState] = useState('stan działania')

	const handleAddTask = () => {
		if (content !== '' && tasksLenght.length < 10) {
			const newTask: ToDoItem = {
				id: uuidv4(),
				task: content,
				isComplete: false,
			}
			addToInput(newTask)
			setInfoState('dodano prawidłowo')
			setContent('')
		} else if (content === '') {
			setInfoState('musisz wpisać treść')
		} else if (tasksLenght.length >= 10) {
			setInfoState('dodano maksymalną ilość zadań')
		}

		if (tasksLenght.length < 10) {
			setInfoState(infoDelete)
		}

		// setContent('')
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.box_inputs}>
				<div className={styles.inputs}>
					<label className={styles.label}>Wpisz treść:</label>
					<input className={styles.input} type='text' value={content} onChange={e => setContent(e.target.value)} />
				</div>
				<div className={styles.btns}>
					<button className={styles.btn} onClick={handleAddTask}>
						dodaj
					</button>
				</div>
			</div>
			<div className={styles.box_info}>
				<h4 className={styles.info_state}>
					Informacja o stanie: <span className={styles.span_info}>{infoState.toUpperCase()}</span>
				</h4>
				<h4 className={styles.info_length}>
					Ilość zadań: <span className={styles.span_length}>{tasksLenght.length}</span>
				</h4>
			</div>
		</div>
	)
}

export default Inputs
