import './App.module.scss'
import { useBackGroundResize } from './components/Project/hooks/useBackGroundResize'
import { Layout } from './components/Project/Layout/Layout'

function App() {
	const color = useBackGroundResize()

	return (
		<>
			<div style={color}>
				<Layout />
			</div>
		</>
	)

	// <>
	{
		/* //TODO */
	}
	{
		/* <h4>
        Меняем иконку при ховере кнопки на OutLinedButton, без ховера Button
      </h4> */
	}

	// </>
}

export default App
