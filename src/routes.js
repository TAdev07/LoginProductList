import React from 'react'; 
import NotFound from './components/NotFound';
import Login from './components/Login';
import Transfer from './pages/Transfer';

const routes = [
	{
		path : '/',
		exact : true,
		main : () => <Transfer />
	},
	{
		path : '/login',
		exact : false,
		main : () => <Login />
	},
	{
		path : '/transfer',
		exact : false,
		main : () => <Transfer />
	},
	{
		path : '',
		exact : false,
		main : () => <NotFound />
	}
];

export default routes;