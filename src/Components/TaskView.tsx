import React from 'react'

import styles from './TaskView.module.css'
import { TaskResultProps } from '../Types'

const TaskView: React.FC<TaskResultProps> = ({ content, toTaskView }) => {
	return (
		<div className={styles.box_results}>
			<h3 className={styles.heading_result}>{content.task.toUpperCase()}</h3>
			<button className={styles.btn_result} onClick={() => toTaskView(content.id)}>
				usuń
			</button>
		</div>
	)
}

export default TaskView
