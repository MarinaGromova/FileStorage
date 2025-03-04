import { ReactElement, useState } from 'react'
import styles from './Button.module.scss'

interface ButtonIconProps {
	text: string
	outline: string
	fontSize: number
}

interface ButtonState {
	isButton: boolean
}

interface ButtonProps {
	renderIcon: (props: ButtonIconProps, state: ButtonState) => ReactElement
	text?: string
	outline?: string
	fontSize?: number
}

const defaultIconProps: ButtonIconProps = {
	text: 'Ваш список',
	outline: '1px solid red',
	fontSize: 20,
}

export const ButtonIcon = ({ text, outline, fontSize }: ButtonIconProps) => {
	return <button style={{ outline, fontSize }}>{text}</button>
}

export const Button = ({ renderIcon }: ButtonProps) => {
	const [isButton, setIsButton] = useState(false)
	return (
		<div
			className={styles.button}
			onMouseOver={() => setIsButton(true)}
			onMouseOut={() => setIsButton(false)}
		>
			{renderIcon(defaultIconProps, { isButton })}
		</div>
	)
}
