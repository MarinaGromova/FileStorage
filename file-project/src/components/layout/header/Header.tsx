import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../providers/ThemeProvider'
import styles from '../Layout.module.scss'
import { Menu } from './../hamburger/menu'

export const Header = () => {
	const { theme, switchTheme } = useContext(ThemeContext)

	return (
		<>
			<button className={styles.button}>
				<Link to={'profile'}>
					<img src='/header/profile.svg' alt='icon minion' />
				</Link>
			</button>
			<button
				className={styles.checkbox}
				type='button'
				style={theme}
				onClick={switchTheme}
			>
				Цвет кнопки
			</button>
			<Menu />
		</>
	)
}
