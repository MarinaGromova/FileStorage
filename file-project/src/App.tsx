import { createContext, useCallback, useState } from 'react'
import './App.module.scss'
import { useBackGroundResize } from './components/hooks/useBackGroundResize'
import { Layout } from './components/layout/Layout'
import { NewTodos } from './components/newTodo/NewTodos'

export const ThemeContext = createContext({})

const ThemeProvider = ({ children }: any) => {
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

function App() {
	const colorObject = useBackGroundResize()
	return (
		<ThemeProvider>
			<div style={colorObject}>
				<Layout />
				<NewTodos buttonText='TODO' />
			</div>
		</ThemeProvider>
	)
}

export default App
