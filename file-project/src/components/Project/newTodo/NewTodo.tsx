import { Button, ButtonIcon } from '../button/Button'

export const NewTodo = () => {
	return (
		<Button
			renderIcon={(props, state) => (
				<ButtonIcon
					{...props}
					text={'Список'}
					outline={state.isButton ? '4px solid white' : ''}
					fontSize={30}
				/>
			)}
		/>
	)
}
