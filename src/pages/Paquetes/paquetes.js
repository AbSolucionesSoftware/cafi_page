import { Box, Container, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import React, { Fragment } from 'react'
import tienda from '../../image/TiendaRenta.png'

import useStyles from '../estilos';

const stylesLocal = makeStyles((theme) => ({
    precio:{
        fontSize: 35,
        color: '#2222a8',
        textAlign: 'center'
    },
    tipografia:{
        fontSize: 17,
        textAlign:'center',
        marginTop: 12
    },
    fondo:{
        background: '#673de6',
    },
    fondoColor:{
        background: '#F8E9FF',
    },
    blanco:{
        fontSize: 35,
        textAlign:'center',
        color: "white"
    },
    fondo2:{
        background: '#F8E9FF',
        
    },
    containerImage:{
        width: "100%",
        height: 550
    },
    image:{
        maxWidth: "100%",
        maxHeight:"100%"
    }

}))

export default function Paquetes() {

    const classes = useStyles();
    const estilo = stylesLocal();

    return (
        <>
        
            <Container>
                <Grid container spacing={1} >
                        <Grid lg={12} xs={11}>
                            <Typography component="div" variant="h3" color="primary">
                                <Box textAlign="center" mt={5}>
                                    Paquetes de Nuestra Tienda
                                </Box>
                            </Typography>
                            <Box display="flex" justifyContent="center" alignItems="center" textAlign="center" mt={2}> 
                                <Divider className={classes.divisorPrincipal}/>
                            </Box>
                            <Typography component="div" variant="h5">
                                <Box textAlign="center" mt={3}>
                                    Busca la mejor modalidad que se adapate a tu negocio
                                </Box>
                            </Typography>
                            <Box display="flex" justifyContent="center" alignItems="center" textAlign="center" mt={1}> 
                                <Divider className={classes.divisorPrincipal}/>
                            </Box>
                        </Grid>
                        <Grid container>
                            <Grid lg={7} xs={12}>
                                <Box textAlign="center" mt={7}>
                                    <Typography variant="h3" color="primary">
                                        ¡Renta Mensual con opción de compra!
                                    </Typography>
                                </Box>
                                <Box textAlign="center" p={1} mt={2}>
                                    <Typography variant="h5">
                                        Nos adaptamos a tu negocio, obtén tu tienda en línea el tiempo que tú quieras
                                    </Typography>
                                </Box>
                                <Box mt={4} display="flex" justifyContent="center" alignItems="center" textAlign="center">
                                    <Typography variant="h3">
                                        Por solo $1,000 MX + I.V.A.
                                    </Typography>
                                </Box>
                                <Box textAlign="center">
                                <Typography style={{fontSize: 16}}>
                                        (Renta mínima de 3 meses)
                                    </Typography>
                                </Box>
                                <Box p={1} mt={3}  textAlign="center" alignItems="center">
                                    {/* <Typography variant="h5">
                                        <DoneIcon className={classes.colorIcon}/> Espacio Ilimitado
                                    </Typography> */}
                                    <Typography variant="h5">
                                        <DoneIcon className={classes.colorIcon}/> Editar información
                                    </Typography>
                                    <Typography variant="h5">
                                        <DoneIcon className={classes.colorIcon}/> Podras editar el diseño de tu página cuando tú quieras 
                                    </Typography>
                                    <Typography variant="h5">
                                        <DoneIcon className={classes.colorIcon}/> Soporte técnico
                                    </Typography>
                                </Box>
                                <Box textAlign="center" p={2}>
                                    <Typography variant="h5">
                                        Al llevar tu renta por un año con CAFI, tendrás la oportunidad de poder adquirir tu propia tienda. Con el beneficio de recibir la tarifa inicial, y bonificación de tus pagos anteriores.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid lg={5} xs={12}>
                                <Box className={estilo.containerImage}>
                                    <img className={estilo.image} alt="imagen de tienda" src={tienda}/>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid lg={4} md={4} xs={11}>
                                <Box mt={3} p={1} textAlign="center" className={estilo.fondoColor}>
                                    <Typography variant="h3" >
                                        Básico
                                    </Typography>
                                </Box>
                                <Box mt={2}>
                                    <Typography  className={estilo.precio}>
                                        $25,000 Mx.
                                    </Typography>
                                </Box>
                                <Box  p={5} mt={4} textAlign="center" alignItems="center" className={estilo.fondoColor}>
                                    {/* <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Espacio ilimitado
                                    </Typography> */}
                                    <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Editar información
                                    </Typography>
                                    <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Diseño básico 
                                    </Typography>
                                    <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Dominio Gratis
                                    </Typography>
                                    <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Soporte técnico
                                    </Typography>
                                    {/* <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> 
                                    </Typography> */}
                                </Box>
                            </Grid>
                            <Grid lg={4} md={4} xs={11}>
                                <Box mt={3} textAlign="center">
                                    <Typography color="primary" variant="h3">
                                        Intermedio
                                    </Typography>
                                </Box>
                                <Box mt={3} p={2} className={estilo.fondo}>
                                    <Typography className={estilo.blanco}>
                                       $35,000 Mx.
                                    </Typography>
                                </Box>
                                <Box p={5} textAlign="center" alignItems="center">
                                    {/* <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Espacio Ilimitado
                                    </Typography> */}
                                    <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Editar información
                                    </Typography>
                                    <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Diseño de Frente diferente en productos
                                    </Typography>
                                    <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Dominio Gratis
                                    </Typography>
                                    <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Soporte técnico
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid lg={4} md={4} xs={11}>
                                <Box  mt={3} p={1} textAlign="center" className={estilo.fondoColor}> 
                                    <Typography color="primary" variant="h3">
                                        Ultimate Plus
                                    </Typography>
                                </Box>
                                <Box mt={3}>
                                    <Typography  className={estilo.precio}>
                                        $40,000 Mx.
                                    </Typography>
                                </Box>
                                <Box p={1} mt={3}  textAlign="center" alignItems="center" className={estilo.fondoColor} >
                                    {/* <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Espacio Ilimitado
                                    </Typography> */}
                                    <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Editar información
                                    </Typography>
                                    <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Podras editar el diseño de tu página cuando tu quieras 
                                    </Typography>
                                    <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Tres formas de publicidad en tu página
                                    </Typography>
                                    <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Dominio Gratis
                                    </Typography>
                                    <Typography  vaiant="body1" variant="h6">
                                        <DoneIcon className={classes.colorIcon}/> Soporte técnico
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                </Grid>
            </Container>
            
        </>
    )
}
