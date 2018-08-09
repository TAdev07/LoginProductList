import React from 'react'; 
import NotFound from './components/NotFound';
import Login from './components/Login';
import Transfer from './pages/Transfer';
import Inbound from './pages/Inbound';
import Reverse from './pages/Reverse';

const routes = [
	{
		path : '/',
		exact : true,
		main : () => <Transfer />
	},
	{
		path : '/inbound',
		exact : false,
		main : () => <Inbound />
	},
	{
		path : '/reverse',
		exact : false,
		main : () => <Reverse />
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