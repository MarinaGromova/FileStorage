import { ReactElement } from 'react'
import styles from '../Layout.module.scss'

interface ParentProps {
	children: () => ReactElement
}

const Children = ({ children }: ParentProps) => {
	return children()
}

export const Header = () => {
	return (
		<Children
			children={() => (
				<>
					<button className={styles.button}>
						<img src='/header/profile.svg' alt='icon minion' />
					</button>
					<button className={styles.button}>
						<img src='/header/menu.svg' alt='icon menu' />
					</button>
				</>
			)}
		/>
	)
}
