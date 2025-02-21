import { useState } from 'react'
import { Folder } from '../folder/Folder'
import { IconFolder } from '../iconFolder/IconFolder'
import styles from './FileStorage.module.scss'

export const FileStorage = () => {
	const [isColor, setIsColor] = useState(false)

	const Text = () => {
		return <h2>Архив</h2>
	}

	return (
		<>
			<h4 className={styles.size}>Меняем цвет</h4>
			<button
				className={styles.button}
				onClick={() => {
					setIsColor(!isColor)
				}}
			>
				{!isColor ? (
					<IconFolder color='#b5dda4' />
				) : (
					<>
						<IconFolder color='#754668' />
						<Folder content={<Text />} fontSize={50} />
					</>
				)}
			</button>
		</>
	)
}
