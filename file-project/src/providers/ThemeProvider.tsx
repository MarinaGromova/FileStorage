import { createContext, useCallback, useState } from 'react'
import { useBackGroundResize } from '../components/hooks/useBackGroundResize'

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }: any) => {
	const colorObject = useBackGroundResize()
	const [theme, setTheme] = useState(colorObject)
	const switchTheme = useCallback(() => {
		setTheme(curr =>
			JSON.stringify(curr) === JSON.stringify(colorObject)
				? { background: '#adefd1', color: '#00203f' }
				: colorObject
		)
	}, [])

	return (
		<ThemeContext.Provider value={{ theme, switchTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
