import React, { useEffect} from 'react'; //
import { Route, Switch } from 'react-router-dom';
import { AppBar, CssBaseline, Slide, Toolbar, useScrollTrigger } from '@material-ui/core';
import Navegacion from '../Navegacion/navegacion';
import PropTypes from 'prop-types';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
// import theme from '../../config/themeConfig';
// import darkMode from '../../config/darkMode';
// import { CssBaseline } from '@material-ui/core';
import Footer from '../Footer/footer';

const stylesLocal = makeStyles((theme) => ({
	fondo:{
		background: "#6e1ea9"
	}
}))

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
	return (
	  <Slide appear={false} direction="down" in={!trigger}>
		{children}
	  </Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};


export default function LayoutUsers(props) {
	const estilo = stylesLocal();
	let thema = localStorage.getItem('tema');
	let tema = JSON.parse(thema)
	const { routes } = props;
	// const [ darkTheme, setDarkTheme ] = useState(tema);

	useEffect(() => {
		if(tema === null){
			localStorage.setItem('tema', false);
			return;
		}
	}, [tema]);

	return (
		<ThemeProvider>
			<CssBaseline />
			<div>
				<div style={{minHeight: '8vh'}}>
					<HideOnScroll {...props}>
						<AppBar>
							<Toolbar>
								<Navegacion />
							</Toolbar>
						</AppBar>
					</HideOnScroll>
				</div>
				<div style={{minHeight: '90vh'}} >
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