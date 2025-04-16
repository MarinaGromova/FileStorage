import styles from './Layout.module.scss'
import { Header } from './header/Header'

export const Layout = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
		</div>
	)
}
