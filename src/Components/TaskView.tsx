import React from 'react'
import { TaskResultProps } from '../Types'

const TaskView: React.FC<TaskResultProps> = ({ content, toTaskView }) => {
	return (
		<div>
			<h1>{content.task}</h1>
			<button onClick={() => toTaskView(content.id)}>usuń</button>
		</div>
	)
}

export default TaskView
