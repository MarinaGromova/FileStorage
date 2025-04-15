import './App.module.scss'
import { useBackGroundResize } from './components/hooks/useBackGroundResize'
import { Layout } from './components/layout/Layout'

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
