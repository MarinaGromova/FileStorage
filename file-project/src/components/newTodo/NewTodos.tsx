import { memo, useState } from 'react'
import { Button, ButtonIcon } from '../button/Button'
import { ButtonAll } from '../button/ButtonAll'
import stylesLayout from '../layout/Layout.module.scss'
import { data } from './Constants'
import { NewTodo } from './NewTodo'
import styles from './NewTodos.module.scss'

interface NewTodoProps {
	buttonText: string
}

export const NewTodos = memo(({ buttonText }: NewTodoProps) => {
	const [tasks, setTasks] = useState(data)
	const [choice, setChoiceAll] = useState(false)

	const deleteTask = (index: number) => {
		const updateTack = tasks.filter((_, i) => i !== index)
		setTasks(updateTack)
	}

	const choiceTask = (index: number, isDone: boolean) => {
		let task = tasks.find(t => t.id === index)
		if (task) task.isDone = isDone
		let copy = [...tasks]
		setTasks(copy)
	}

	const choiceAll = () => {
		setChoiceAll(!choice)
		if (!choice) {
			let task = tasks.map(t => {
				t.isDone = true
				return t
			})
			setTasks(task)
		} else {
			let task = tasks.map(t => {
				t.isDone = false
				return t
			})
			setTasks(task)
		}
	}

	return (
		<>
			<Button
				renderIcon={(props, state) => (
					<ButtonIcon
						{...props}
						text={buttonText}
						outline={state.isButton ? '4px solid white' : ''}
						fontSize={40}
					/>
				)}
			/>
			<div className={stylesLayout.layout}>
				<div className={styles.wrapper}>
					<NewTodo
						deleteTask={deleteTask}
						choiceTask={choiceTask}
						tasks={tasks}
					/>
					<ButtonAll choiceAll={choiceAll} choice={choice} />
				</div>
			</div>
		</>
	)
})
