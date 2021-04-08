import { Box, Button, Container, Grid, Hidden,  makeStyles, Typography} from '@material-ui/core';
import AndroidIcon from '@material-ui/icons/Android';
// import AppleIcon from '@material-ui/icons/Apple';
import React from 'react';
// import useStyles from '../estilos';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Carrito from '../../image/CarritoCafi.png'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './contacto.scss'
// import { StayPrimaryLandscape } from '@material-ui/icons';
// import { blue } from '@material-ui/core/colors';

const stylesLocal = makeStyles((theme) => ({
    containerImagen:{
        height: '100%',
        width: "90%"
    },
    imagen:{
        maxWidth: "100%",
        maxHeight: "100%"
    },
    textF: {
        width: "130%", 
        background: "white",
        borderRadius: 5,
    },
    textLarge: {
        width: "50%", 
        background: "white",
        borderRadius: 5,
    },
    letra:{
        color:"white",
        fontWeight: 800,
        fontSize: 30,
    },
    boton: {
        background: "white",
        color: '#6919a2',
        fontSize: 28,
        borderColor: "#6919a2",
        border: "1px solid white",
        "&:hover": {
            // webkitTransform: "scale(1.1)",
            // transform: "scale(1.1)",
            // overflow: "hidden",
            backgroundColor: "#953ee4",
            color: "white",
            border: "1px solid white"
        },
    },
    botonCorreo:{
        borderRadius: 100,
        fontSize: 75,
    },
    fondo:{
        background: "#953ee4"
    }
   
}))



export default function Contacto() {

    // const [ open, setOpen ] = useState(true);
    
    // const classes = useStyles();
    const estilo = stylesLocal();

    return (
        <div >
            <div style={{height: 150, overflow: "hidden"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M0.00,49.99 C154.28,294.38 373.81,-65.81 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#953ee4"}}></path></svg></div>
            <Grid container className={estilo.fondo}>
                <Grid item lg={5} xs={12}>
                    <Box ml={3} className={estilo.containerImagen} >
                        <img className={estilo.imagen} alt="no imagen" src={Carrito}/>
                    </Box>
                </Grid>
                <Grid lg={6} xs={12} >
                        <Box p={3} display="flex" justifyContent="center" alignItems="center"  textAlign="center">
                            <Typography className={estilo.letra} >
                                Conoce CAFI desde tu celular
                            </Typography>
                        </Box>
                        <Box p={3} display="flex" justifyContent="center" alignItems="center"  textAlign="center">
                            <Typography className={estilo.letra} >
                                Descarga la App de CAFI, disponible en Play-Store.
                            </Typography>
                        </Box>
                        <Box mt={2} display="flex" justifyContent="center" alignItems="center"  textAlign="center">
                            <Typography style={{fontSize: 25, color: "white"}}>
                                Click aquí para ver
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <ArrowDownwardIcon  style={{fontSize: 45, color: "white"}}/>
                        </Box>
                        <Box p={1} display="flex" justifyContent="center" alignItems="center"  textAlign="center">
                            <a  style={{textDecoration: "none" }} target="_blank" href={`https://play.google.com/store/apps/details?id=com.fractalstudio.cafi`}>
                                <Button 
                                    variant="contained" 
                                    size="large"
                                    className={estilo.boton}
                                    disableRipple
                                    startIcon={ <AndroidIcon style={{fontSize: 50}} />}
                                >
                                    Cafi App
                                </Button>
                            </a>
                        </Box>
                        <Box p={3} mt={3} display="flex" justifyContent="center" textAlign="center">
                            <Typography style={{fontSize: 25,  fontWeight: 600, color: "white"}}>
                                Descubre y visualiza como podría verse tu tienda dentro de una aplicación, disponible para todos en cualquier momento, CAFI a la vanguardia digital.
                            </Typography>
                        </Box>
                </Grid>
            </Grid>
            <div style={{height: 150, overflow: "hidden"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height:"100%", width: "100%"}}><path d="M-0.84,19.23 C160.55,245.22 328.72,-115.95 503.67,64.63 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill: "#953ee4"}}></path></svg></div>
            <div>
                <Container>
                    {/* <Box textAlign="center">
                        <IconButton 
                            variant="outlined"
                            color="primary"
                            size="large"
                            className={estilo.botonCorreo}
                            disableRipple
                            onClick={() => open === false ? (
                                setOpen(true)
                            ):(
                                setOpen(false)
                            ) }
                        >
                            <MailOutlineIcon className={estilo.botonCorreo}/>
                        </IconButton>
                    </Box> */}
                    <Box>
                        {/* {open === true ? (
                            <Box textAlign="center">
                               <form>
                                    <Box display="flex" justifyContent="center" p={1}>
                                        <TextField 
                                            className={estilo.textLarge} 
                                            // id="outlined-basic" 
                                            label="Nombre de Interesado" 
                                            variant="outlined" 
                                        />
                                    </Box>
                                    <Box display="flex" justifyContent="center" p={1}>
                                        <TextField 
                                            className={estilo.textLarge} 
                                            // id="outlined-basic" 
                                            label="Cuenta de Correo" 
                                            variant="outlined" 
                                        />
                                    </Box>
                                    <Box display="flex" justifyContent="center" p={1}>
                                        <TextField
                                            className={estilo.textLarge} 
                                            // id="outlined-basic"
                                            label="Subject"
                                            variant="outlined"
                                        />
                                    </Box>
                                    <Box display="flex" justifyContent="center" p={1}>
                                        <TextField
                                            className={estilo.textLarge}
                                            // id="outlined-basic"
                                            label="Mensaje"
                                            variant="outlined"
                                        />
                                    </Box>
                                    <Box mt={3}>
                                        <Button 
                                            variant="contained" 
                                            color="primary"
                                            size="large"
                                            className={estilo.boton}
                                            disableRipple
                                        >
                                            Solicitar Información
                                        </Button>
                                    </Box>
                               </form>
                            </Box>
                        ): (
                            null
                        )} */}
                    </Box>
                </Container>
            </div>
        </div>
    )
}
