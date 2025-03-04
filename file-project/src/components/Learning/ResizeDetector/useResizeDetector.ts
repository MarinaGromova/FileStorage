import { useEffect, useState } from 'react'

export const useResizeDetector = () => {
	const [width, setWidth] = useState(0)

	useEffect(() => {
		const listener = () => {
			const width = window.innerWidth
			setWidth(width)
		}

		window.addEventListener('resize', listener)
	}, [])

	return width
}
