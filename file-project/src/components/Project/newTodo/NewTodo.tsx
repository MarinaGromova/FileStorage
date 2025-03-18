import { ChangeEvent, useState } from 'react'
import { Button, ButtonIcon } from '../button/Button'
import styles from './NewTodo.module.scss'

/* TODO: 1. Сделать кнопку DELETE.  ☑
				 2. Доделать кнопку: выбрать всё. ☑
				 3. Менять местами таски.
				 4. Добавлять новые таски через кнопку Add.
				 5. Отмеченные таски становятся перечеркнутыми и переносятся в правый столбик.
				 6. При нажатии на гамбургер вылетает меню.
*/

let data = [
	{
		id: 1,
		task: 'Stretch',
		isDone: false,
	},
	{ id: 2, task: 'Studies', isDone: true },
	{ id: 3, task: 'Water', isDone: false },
	{ id: 4, task: 'Yoga', isDone: false },
	{ id: 5, task: 'Vitamins', isDone: true },
]
interface NewTodoProps {
	buttonText: string
}
export const NewTodo = ({ buttonText }: NewTodoProps) => {
	const [tasks, setTasks] = useState(data)
	// const [tasksActive, setTasksActive] = useState(data)
	const [choice, setChoiceAll] = useState(false)

	// const choiceActive = () => {
	// 	setChoiceAll(!choice)
	// 	if (!choice) {
	// 		let task = tasks.filter(t => t.isDone === true)
	// 		setTasks(task)
	// 	} else {
	// 		setTasks(tasksAll)
	// 	}
	// }

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
					<div className={styles.il}>
						<button className={styles.circle} onClick={choiceAll}>
							{choice ? (
								<img src='layout/circle2.svg' />
							) : (
								<img src='layout/circle1.svg' />
							)}
						</button>
						<p>ALL</p>
					</div>
				</div>
			</div>
		</>
	)
}
