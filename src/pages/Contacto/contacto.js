import React, { useState } from 'react';
import clienteAxios from '../../config/axios';
import MessageSnackbar from '../../components/Snackbar/snackbar';

import AndroidIcon from '@material-ui/icons/Android';
import { Box, Button, Container, Grid, Hidden,  IconButton,  makeStyles, TextField, Typography} from '@material-ui/core';

import useStyles from '../estilos';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Carrito from '../../image/CarritoCafi.png'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './contacto.scss'

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
    textLargeMensaje: {
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

    const [ open, setOpen ] = useState(true);
    const [ validate, setValidate ] = useState(false);
    const [ correo, setCorreo ] = useState([]);
    
    const classes = useStyles();
    const estilo = stylesLocal();

    const [ snackbar, setSnackbar ] = useState({
		open: false,
		mensaje: '',
		status: ''
	});

    const enviarCorreo = async () => {
        if (!correo.nombre || !correo.asunto
            || !correo.mensaje || !correo.correo ) {
			setValidate(true);
			return;
		}
        try {
            await clienteAxios
            .post(`/company/contact/send/email/`, {
                "pagina": "cafi",
                "mensaje": correo.mensaje,
                "nombre": correo.nombre,
                "telefono": correo.telefono,
                "asunto": correo.asunto,
                "correo": correo.correo
            })
            .then((res) => {
                console.log(res);
                setSnackbar({
                    open: true,
                    mensaje: "Correo enviado exitosmente, pronto nos contataremos contigo.",
                    status: 'success'
                });
            })
            .catch((err) => {
                console.log(err);
                setSnackbar({
                    open: true,
                    mensaje: "Ocurrio un problema con el servidor",
                    status: 'err'
                });
            });
        } catch (error) {
            console.log(error);  
        }
    }

    const handleCorreo = (e) =>{
        setCorreo({
			...correo,
			[e.target.name]: e.target.value
		});
    }

    return (
        <div >
            <MessageSnackbar
				open={snackbar.open}
				mensaje={snackbar.mensaje}
				status={snackbar.status}
				setSnackbar={setSnackbar}
			/>
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
            <div id="correos">
                <Container>
                    <Box textAlign="center">
                        <Typography variant="h3" color="primary">
                            Contacto
                        </Typography>
                    </Box>
                    <Box textAlign="center">
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
                    </Box>
                    <Box>
                        {open === true ? (
                            <Box textAlign="center">
                               <form>
                                    <Box display="flex" justifyContent="center" p={1}>
                                        <TextField
                                            error={!correo.nombre && validate}
                                            helperText={!correo.nombre && validate ? 'Esta campo es requerido' : null}
                                            value={correo.nombre ? correo.nombre : ''}
                                            className={estilo.textLarge} 
                                            name="nombre"
                                            placeholder="Interesado"
                                            label="Nombre de Interesado" 
                                            variant="outlined"
                                            onChange={handleCorreo}
                                        />
                                    </Box>
                                    <Box display="flex" justifyContent="center" p={1}>
                                        <TextField 
                                            error={!correo.correo && validate}
                                            helperText={!correo.correo && validate ? 'Esta campo es requerido' : null}
								            value={correo.correo ? correo.correo : ''}
                                            className={estilo.textLarge} 
                                            name="correo"
                                            placeholder="Tu correo electronico"
                                            label="Cuenta de Correo" 
                                            variant="outlined" 
                                            onChange={handleCorreo}
                                        />
                                    </Box>
                                    <Box display="flex" justifyContent="center" p={1}>
                                        <TextField
                                            error={!correo.asunto && validate}
                                            helperText={!correo.asunto && validate ? 'Esta campo es requerido' : null}
                                            value={correo.asunto ? correo.asunto : ''}
                                            className={estilo.textLarge} 
                                            name="asunto"
                                            placeholder="Asunto de este correo"
                                            label="Asunto"
                                            variant="outlined"
                                            onChange={handleCorreo}
                                        />
                                    </Box>
                                    <Box display="flex" justifyContent="center" p={1}>
                                        <TextField 
                                            className={estilo.textLarge}
                                            value={correo.telefono ? correo.telefono : ''}
                                            name="telefono"
                                            placeholder="Telefono opcional"
                                            label="Telefono" 
                                            variant="outlined" 
                                            onChange={handleCorreo}
                                        />
                                    </Box>
                                    <Box display="flex" justifyContent="center" p={1}>
                                        <TextField
                                            error={!correo.mensaje && validate}
                                            helperText={!correo.mensaje && validate ? 'Esta campo es requerido' : null}
                                            value={correo.mensaje ? correo.mensaje : ''}
                                            className={estilo.textLargeMensaje}
                                            name="mensaje"
                                            placeholder="Mensaje de correo"
                                            label="Mensaje"
                                            multiline
                                            variant="outlined"
                                            onChange={handleCorreo}
                                        />
                                    </Box>
                                    <Box mt={3}>
                                        <Button 
                                            variant="contained" 
                                            color="primary"
                                            size="large"
                                            className={estilo.boton}
                                            onClick={() => enviarCorreo()}
                                        >
                                            Enviar Solicitud
                                        </Button>
                                    </Box>
                               </form>
                            </Box>
                        ): (
                            null
                        )}
                    </Box>
                </Container>
            </div>
        </div>
    )
}
