import './App.module.scss'
import { useBackGroundResize } from './components/Project/hooks/useBackGroundResize'
import { Layout } from './components/Project/layout/Layout'

function App() {
	const colorObject = useBackGroundResize()

	return (
		<>
			<div style={colorObject}>
				<Layout />
			</div>
		</>
	)
}

export default App
