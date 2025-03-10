import { useState } from 'react'
import { Button, ButtonIcon } from '../button/Button'
import styles from './NewTodo.module.scss'

/* TODO: 1. Сделать кнопку DELETE.  ☑
				 2. Доделать кнопку: выбрать всё. 
				 3. Менять местами таски.
				 4. Добавлять новые таски через кнопку Add.
				 5. Отмеченные таски становятся перечеркнутыми и переносятся в правый столбик.
				 6. При нажатии на гамбургер вылетает меню.
*/

const data = [
	{ id: 1, task: 'Stretch', isDone: false },
	{ id: 2, task: 'Studies', isDone: true },
	{ id: 3, task: 'Water', isDone: false },
	{ id: 4, task: 'Yoga', isDone: false },
	{ id: 5, task: 'Vitamins', isDone: true },
]

export const NewTodo = () => {
	const [tasks, setTasks] = useState(data)
	const [choiceAll, setChoiceAll] = useState(false)

	const deleteTask = (index: number) => {
		const updateTack = tasks.filter((_, i) => i !== index)
		setTasks(updateTack)
	}

	const choiceTask = (index: number, isDone: boolean) => {
		let task = tasks.find(t => t.id === index)
		if (task) {
			task.isDone = isDone
		}
		let copy = [...tasks]
		setTasks(copy)
	}

	return (
		<>
			<Button
				renderIcon={(props, state) => (
					<ButtonIcon
						{...props}
						text={'MY DAY'}
						outline={state.isButton ? '4px solid white' : ''}
						fontSize={40}
					/>
				)}
			/>
			<div className={styles.wrapper}>
				<div className={styles.il}>
					<button
						className={styles.circle}
						onClick={() => setChoiceAll(!choiceAll)}
					>
						{choiceAll ? (
							<img src='layout/circle2.svg' />
						) : (
							<img src='layout/circle1.svg' />
						)}
					</button>
					<p>ALL</p>
				</div>
				<ul className={styles.wrapper}>
					{tasks.map((t, index) => {
						const handleChange = (e: ChangeEvent) => {
							choiceTask(t.id, e.target.checked)
						}
						const removeTask = () => {
							deleteTask(index)
						}
						return (
							<li key={t.id} className={styles.li}>
								<input
									type='checkbox'
									checked={t.isDone}
									onChange={handleChange}
								/>
								<span className={styles.p}>{t.task}</span>
								<button onClick={removeTask}>delete</button>
							</li>
						)
					})}
				</ul>
			</div>
		</>
	)
}
