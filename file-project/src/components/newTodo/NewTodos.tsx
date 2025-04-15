import { ChangeEvent, memo, useState } from 'react'
import { Button, ButtonIcon } from '../button/Button'
import { ButtonAll } from '../button/ButtonAll'
import { data } from './Constants'
import styles from './NewTodos.module.scss'

interface NewTodoProps {
	buttonText: string
}

export const NewTodos = memo(({ buttonText }: NewTodoProps) => {
	const [tasks, setTasks] = useState(data)

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

	const [choice, setChoiceAll] = useState(false)

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
			<div>
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
				<div className={styles.wrapper}>
					<ul className={styles.wrapper}>
						{tasks.map((t, index) => {
							return (
								<li key={t.id} className={styles.li}>
									<input
										type='checkbox'
										checked={t.isDone}
										onChange={(e: ChangeEvent<HTMLInputElement>) =>
											choiceTask(t.id, e.target.checked)
										}
									/>
									<span className={styles.p}>{t.task}</span>
									<button
										className={styles.close}
										onClick={() => deleteTask(index)}
									>
										<img src='layout/close.svg' />
									</button>
								</li>
							)
						})}
					</ul>
					<ButtonAll choiceAll={choiceAll} choice={choice} />
				</div>
			</div>
		</>
	)
})
