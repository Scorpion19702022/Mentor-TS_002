import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import styles from './Inputs.module.css'
import { InputProps, ToDoItem } from '../Types'

const Inputs: React.FC<InputProps> = ({ addToInput }) => {
	const [content, setContent] = useState('')

	const handleAddTask = () => {
		const newTask: ToDoItem = {
			id: uuidv4(),
			task: content,
			isComplete: false,
		}

		addToInput(newTask)

		setContent('')
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.box_iputs}>
				<div className={styles.inputs}>
					<label>Wpisz treść:</label>
					<input type='text' value={content} onChange={e => setContent(e.target.value)} />
				</div>
				<div className={styles.btns}>
					<button className={styles.btn} onClick={handleAddTask}>
						dodaj
					</button>
				</div>
			</div>
		</div>
	)
}

export default Inputs
