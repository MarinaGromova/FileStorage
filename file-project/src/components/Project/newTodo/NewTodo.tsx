import { Button, HomeIcon } from '../button/Button'

export const NewTodo = () => {
	return (
		<Button
			renderIcon={(props, state) => (
				<HomeIcon {...props} color={state.isButton ? 'red' : 'green'} />
			)}
		/>
	)
}
