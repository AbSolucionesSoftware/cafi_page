import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

//MATERIAL UI
import { AppBar, Box, Button, Drawer, Hidden, IconButton,List, Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//ICONOS
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ErrorIcon from '@material-ui/icons/Error';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';

import { deepOrange } from '@material-ui/core/colors';

//otros
import imagen from '../../image/Logo Cafi.png'

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1
	},
	appbar: {
		backgroundColor: 'white'
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	offset: theme.mixins.toolbar,
	orange: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500]
	},
	imagen:{
		width: 150,
		height: 55
	},
	marginButton: {
		marginRight: theme.spacing(1),
		marginLeft: theme.spacing(1)
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
}));

export default function Navegacion(props) {
	// const [ darkTheme, setDarkTheme ] = props.tema;
	const [ open, setOpen ] = useState(false);

	const classes = useStyles();

	// const darkModeAction = () => {
	// 	setDarkTheme(!darkTheme);
	// 	localStorage.setItem('tema', !darkTheme);
	// };

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	// const renderMenu = (
	// 	<div>
	// 		<ListItem button onClick={darkModeAction}>
	// 			<ListItemIcon>{darkTheme ? <Brightness5Icon /> : <BrightnessMediumIcon />}</ListItemIcon>
	// 		</ListItem>
	// 	</div>
	// );

	return (
		<div className="fondo">
				<AppBar className={classes.appbar}>
					<Toolbar>
						<Hidden mdUp>
							<IconButton
								edge="start"
								aria-label="show more"
								aria-haspopup="true"
								onClick={handleDrawerOpen}
								className={classes.menuButton}
							>
								<MenuIcon />
							</IconButton>
						</Hidden>
						<Hidden smDown>
							<Box>
								<img className={classes.imagen} alt="no hay imagen" src={imagen} />
							</Box>
						</Hidden>
						<Hidden smDown>
							<div className={classes.grow}/>
							<HashLink to="/#inicio" style={{textDecoration: "none" }}>
								<Button
									to="/"
									className={classes.marginButton}
								>
									Inicio
								</Button>
							</HashLink>
							<HashLink to="/#galeria" style={{textDecoration: "none" }}>
								<Button
									className={classes.marginButton}
								>
									Galeria
								</Button>
							</HashLink>
							<HashLink to="/#beneficios" style={{textDecoration: "none" }}>
								<Button
									className={classes.marginButton}
								>
									Beneficios
								</Button>
							</HashLink>
							<HashLink to="/#paquetes" style={{textDecoration: "none" }}>
								<Button
									className={classes.marginButton}
								>
									Paquetes
								</Button>
							</HashLink>
							<HashLink to="/#contacto" style={{textDecoration: "none" }}>
								<Button
									className={classes.marginButton}
								>
									Contacto
								</Button>
							</HashLink>
							{/* {renderMenu} */}
						</Hidden>
					</Toolbar>
				</AppBar>
				<Drawer  
					className={classes.drawer}
					anchor="left"
					open={open}
					onClose={handleDrawerClose}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<List>
						<Box>
							<img className={classes.imagen} alt="no hay imagen" src={imagen} />
						</Box>
						<HashLink to="/#inicio" style={{textDecoration: "none" }}>
							<ListItem button onClick={handleDrawerClose}>
								<ListItemIcon>
									<HomeIcon />
								</ListItemIcon>
								<ListItemText primary="Inicio" />
							</ListItem>
						</HashLink>
						<HashLink to="/#galeria" style={{textDecoration: "none" }}>
							<ListItem button  onClick={handleDrawerClose}>
								<ListItemIcon>
									<PhotoLibraryIcon />
								</ListItemIcon>
								<ListItemText primary="Galeria" />
							</ListItem>
						</HashLink>
						<HashLink to="/#beneficios" style={{textDecoration: "none" }}>
							<ListItem button onClick={handleDrawerClose}>
								<ListItemIcon>
									<ErrorIcon/>
								</ListItemIcon>
								<ListItemText primary="Beneficios" />
							</ListItem>
						</HashLink>
						<HashLink to="/#paquetes" style={{textDecoration: "none" }}>
							<ListItem button onClick={handleDrawerClose}>
								<ListItemIcon>
									<LocalOfferIcon/>
								</ListItemIcon>
								<ListItemText primary="Paquetes" />
							</ListItem>
						</HashLink>
						<HashLink to="/#contacto" style={{textDecoration: "none" }}>
							<ListItem button onClick={handleDrawerClose}>
								<ListItemIcon>
									<MailIcon/>
								</ListItemIcon>
								<ListItemText primary="Contacto" />
							</ListItem>
						</HashLink>
					</List>
				</Drawer>
		</div>
	);
}
