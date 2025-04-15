import { createContext } from 'react'
import { NewTodos } from '../newTodo/NewTodos'
import styles from './Layout.module.scss'
import { Header } from './header/Header'

const ThemeContext = createContext('default')

export const Layout = () => {
	return (
		<ThemeContext.Provider value=''>
			<div className={styles.wrapper}>
				<Header />
			</div>
			<div className={styles.layout}>
				<NewTodos buttonText='TODO' />
				{/* <NewTodo buttonText='DONE' /> */}
			</div>
		</ThemeContext.Provider>
	)
}
