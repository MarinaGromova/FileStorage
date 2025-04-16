import { createContext } from 'react'
import './App.module.scss'
import { useBackGroundResize } from './components/hooks/useBackGroundResize'
import { Layout } from './components/layout/Layout'
import { NewTodos } from './components/newTodo/NewTodos'

function App() {
	const colorObject = useBackGroundResize()
	const ThemeContext = createContext('default')

	return (
		<ThemeContext.Provider value=''>
			<div style={colorObject}>
				<Layout />
				<NewTodos buttonText='TODO' />
			</div>
		</ThemeContext.Provider>
	)
}

export default App
