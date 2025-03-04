import { useState } from 'react'
import { Button, ButtonIcon } from '../button/Button'
import styles from './NewTodo.module.scss'

const data = [
	{ task: 'Stretch' },
	{ task: 'Studies' },
	{ task: 'Water' },
	{ task: 'Yoga' },
	{ task: 'Vitamins' },
]

export const NewTodo = () => {
	const [choice, setChoice] = useState(false)
	const [choiceAll, setChoiceAll] = useState(false)

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
					{data.map((item, index) => (
						<li key={index} className={styles.li}>
							<input
								type='checkbox'
								// checked={choiceAll}
								onChange={() => setChoice(!choice)}
							/>
							<p className={styles.p}>{item.task}</p>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
