import React, { useEffect,  useState } from 'react'; //
import { Route, Switch } from 'react-router-dom';
import Navegacion from '../Navegacion/navegacion';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../config/themeConfig';
import darkMode from '../../config/darkMode';
import { CssBaseline } from '@material-ui/core';
import Footer from '../Footer/footer';

export default function LayoutUsers(props) {
	let thema = localStorage.getItem('tema');
	let tema = JSON.parse(thema)
	const { routes } = props;
	const [ darkTheme, setDarkTheme ] = useState(tema);

	useEffect(() => {
		if(tema === null){
			localStorage.setItem('tema', false);
			return;
		}
	}, [tema]);

	return (
		<ThemeProvider theme={tema === true ? darkMode : theme}>
			{/* <CssBaseline /> */}
			<div>
				<div style={{minHeight: '8vh'}}>
					<Navegacion />
				</div>
				<div style={{minHeight: '90vh'}}>
					<LoadRoutes routes={routes} />
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</ThemeProvider>
	);
}

function LoadRoutes({ routes }) {
	return (
		<Switch>
			{routes.map((route, index) => (
				<Route key={index} path={route.path} exact={route.exact} component={route.component} />
			))}
		</Switch>
	);
}