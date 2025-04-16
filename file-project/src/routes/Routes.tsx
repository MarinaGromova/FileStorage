import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Profile } from '../components/profile/Profile'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/profile',
		element: <Profile />,
	},
])
