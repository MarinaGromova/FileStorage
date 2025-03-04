import { useEffect, useState } from 'react'

export const useBackGroundResize = () => {
	const [width, setWidth] = useState(0)
	const [background, setBackground] = useState('#00203f')

	useEffect(() => {
		const listener = () => {
			const width = window.innerWidth
			setBackground(width > 600 ? background : '#adefd1')
			setWidth(width)
		}
		window.addEventListener('resize', listener)
	}, [])

	return { background }
}
