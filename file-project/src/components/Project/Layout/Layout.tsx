import { ReactElement } from 'react'
import { NewTodo } from '../newTodo/NewTodo'
import styles from './Layout.module.scss'

interface ParentProps {
	children: () => ReactElement
}

const Children = ({ children }: ParentProps) => {
	return children()
}

export const Layout = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<Children
					children={() => (
						<button>
							<img src='/header/profile.svg' alt='icon minion' />
						</button>
					)}
				/>
				<button>
					<img src='/header/menu.svg' alt='icon menu' />
				</button>
			</div>
			<NewTodo />
		</>
	)
}
