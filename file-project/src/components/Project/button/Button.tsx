import { ReactElement, useState } from 'react'
import { FaBeer } from 'react-icons/fa'
import styles from './Button.module.scss'

interface ButtonIconProps {
	color: string
	// outline?: string
}
interface ButtonState {
	isButton: boolean
}

interface ButtonProps {
	renderIcon: (props: ButtonIconProps, state: ButtonState) => ReactElement
	color?: string
	// outline?: string
}

export const HomeIcon = ({ color }: ButtonIconProps) => (
	<FaBeer style={{ color }} />
)

export const Button = ({ renderIcon }: ButtonProps) => {
	const [isButton, setIsButton] = useState(false)

	const defaultIconProps: ButtonIconProps = {
		color: 'white',
	}

	return (
		<button
			className={styles.button}
			onMouseOver={() => setIsButton(true)}
			onMouseOut={() => setIsButton(false)}
		>
			{renderIcon(defaultIconProps, { isButton })}
		</button>
	)
}
