import { ReactElement, useState } from 'react'
import { FaBeer } from 'react-icons/fa'
// import HomeOutlined from "@mui/icons-material/HomeOutlined";

interface IconProps {
	color: string
	fontSize?: 'large' | 'meduim' | 'small'
}
interface IconState {
	isHovered: boolean
}
interface ButtonProps {
	renderIcon: (props: IconProps, state: IconState) => ReactElement
	fontSize?: 'large' | 'normal'
	appearance?: 'primary' | 'secondary'
}

export const HomeIcon = ({ color, fontSize }: IconProps) => (
	<FaBeer style={{ color, fontSize }} />
)

export const Button = ({
	appearance = 'primary',
	fontSize = 'normal',
	renderIcon,
}: ButtonProps) => {
	const [isHovered, setIsHovered] = useState(false)

	const defaultIconProps: IconProps = {
		fontSize: fontSize === 'large' ? 'large' : 'meduim',
		color: appearance === 'primary' ? 'white' : 'black',
	}
	return (
		<button
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			магия
			{renderIcon(defaultIconProps, { isHovered })}
		</button>
	)
}
