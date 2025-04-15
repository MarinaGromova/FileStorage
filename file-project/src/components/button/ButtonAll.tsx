import styles from '../layout/Layout.module.scss'

interface NewAllProps {
	choiceAll: any
	choice: boolean
}

export const ButtonAll = ({ choiceAll, choice }: NewAllProps) => {
	return (
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
	)
}
