import { Link } from 'react-router-dom'
import styles from '../Layout.module.scss'
import { Menu } from './../hamburger/menu'

export const Header = () => {
	return (
		<>
			<button className={styles.button}>
				<Link to={'profile'}>
					<img src='/header/profile.svg' alt='icon minion' />
				</Link>
			</button>
			<Menu />
		</>
	)
}
