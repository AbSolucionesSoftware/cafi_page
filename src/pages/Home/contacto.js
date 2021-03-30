import { Box, Button, Container, Grid, Hidden, IconButton, makeStyles, TextField, Typography } from '@material-ui/core';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import React, {  useState } from 'react';
import useStyles from '../estilos';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import fondo from '../../image/ImagenFondo.jpeg'
import './contacto.scss'
// import { StayPrimaryLandscape } from '@material-ui/icons';
// import { blue } from '@material-ui/core/colors';

const stylesLocal = makeStyles((theme) => ({
    
    containerImagen:{
        // backgroundImage: `url(${fondo})`,
        backgroundAttachment: 'fixed',
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
    tipo:{
        color:"white",
        background: "#673de6",
        fontWeight: 800,
        fontSize: 33
    },
    boton: {
        background: '#5D0170',
        color: 'white',
        height: 'auto',
        fontSize: 30
    },
    botonCorreo:{
        borderRadius: 100,
        fontSize: 75,
    }
   
}))



export default function Contacto() {

    const [ open, setOpen ] = useState(true);
    
    // const classes = useStyles();
    const estilo = stylesLocal();

    return (
        <div >
            <Container>
                <Grid lg={12} xs={12}>
                    <Hidden smDown>
                        <Box className="fondoImagen" display="flex" justifyContent="center"  p={5}>
                            <Box pr={3} className="banner-user">
                                <img className="banner-elemento" src={fondo} />
                            </Box>
                            <Box mb={10} className="buttonIndex">
                                <a  style={{textDecoration: "none" }} target="_blank" href={`https://play.google.com/store/apps/details?id=com.fractalstudio.cafi`}>
                                    <Button 
                                        variant="contained" 
                                        size="large"
                                        className={estilo.boton}
                                        disableRipple
                                        startIcon={ <AndroidIcon style={{fontSize: 50}} />}
                                    >
                                        
                                        CafiApp
                                    </Button>
                                </a>
                            </Box>
                        </Box>
                    </Hidden>

                    {/* <Box>
                        <Typography  className={estilo.tipo}  component="div" >
                            <Box textAlign="center" mt={10}>
                                Subscribe Now!
                            </Box>
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" flexWrap="wrap" p={5}>
                        <Box mr={2} mt={3}>
                            <TextField 
                                className={estilo.textF} 
                                id="outlined-basic" 
                                label="Your mail" 
                                variant="outlined" 
                            />
                        </Box>
                        <Box ml={7} mt={3}>
                            <Button 
                                variant="contained" 
                                color="primary"
                                size="large"
                                className={estilo.boton}
                                disableRipple
                            >
                                Suscribirse
                            </Button>
                        </Box>
                    </Box> */}
                </Grid>
            </Container>
            <div >
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
