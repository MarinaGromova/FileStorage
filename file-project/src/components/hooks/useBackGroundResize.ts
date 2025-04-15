import { useEffect, useState } from 'react'

export const useBackGroundResize = () => {
	const [width, setWidth] = useState(0)
	const [background, setBackground] = useState('#00203f')
	const [color, setColor] = useState('#adefd1')

	useEffect(() => {
		const listener = () => {
			const width = window.innerWidth
			setBackground(width > 600 ? background : '#adefd1')
			setColor(width > 600 ? color : '#00203f')
			setWidth(width)
		}
		window.addEventListener('resize', listener)
	}, [])

	return { background: background, color: color }
}
