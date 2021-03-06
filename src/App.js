import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './config/routes';
import { Helmet } from 'react-helmet';
import './scss/styles.scss';


function App() {
	return (
			<div>
				<Helmet>
					<meta charSet="utf-8" />
					<title>CAFI - Tu tienda en linea</title>
				</Helmet>
				<Router>
					<Switch>{routes.map((route, index) => <RoutesWithSubRoutes key={index} {...route} />)}</Switch>
				</Router>
			</div>
	);
}

function RoutesWithSubRoutes(route) {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={(props) => <route.component routes={route.routes} {...props} />}
		/>
	);
}

export default App;

