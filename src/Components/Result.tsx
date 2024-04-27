import React from 'react'

import styles from './Result.module.css'
import { ResultProps } from '../Types'
import TaskView from './TaskView'

const Result: React.FC<ResultProps> = ({ addToResult, deleteTask }) => {
	const resultToDo = addToResult.map(item => {
		return <TaskView content={item} toTaskView={deleteTask} />
	})

	return <div className={styles.box_result}>{resultToDo}</div>
}

export default Result
