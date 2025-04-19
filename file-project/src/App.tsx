import './App.module.scss'
import { useBackGroundResize } from './components/hooks/useBackGroundResize'
import { Layout } from './components/layout/Layout'
import { NewTodos } from './components/newTodo/NewTodos'
import { ThemeProvider } from './providers/ThemeProvider'

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
