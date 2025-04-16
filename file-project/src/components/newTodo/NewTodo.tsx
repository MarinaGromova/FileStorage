import { ChangeEvent } from 'react'
import stylesLayout from '../layout/Layout.module.scss'
import styles from './NewTodos.module.scss'

interface NewTodoFunction {
	choiceTask: Function
	deleteTask: Function
	tasks: any
}

export const NewTodo = ({ choiceTask, deleteTask, tasks }: NewTodoFunction) => {
	return (
		<div className={stylesLayout.layout}>
			<div className={styles.wrapper}>
				<ul className={styles.wrapper}>
					{tasks.map((t: any, index: number) => {
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
			</div>
		</div>
	)
}
