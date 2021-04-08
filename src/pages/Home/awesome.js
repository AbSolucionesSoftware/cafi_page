import { Box, Divider, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../estilos';
import LaptopIcon from '@material-ui/icons/Laptop';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import CloudDoneIcon from '@material-ui/icons/CloudDone';

const stylesLocal = makeStyles((theme) => ({
   containerImagen:{
        width: 180,
        height: '100%',
   },
   large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    color: 'white',
    "&:hover": {
        webkitTransform: "scale(1.3)",
        transform: "scale(1.3)",
        overflow: "hidden",
    },
  },
  colorLetra:{
    color: 'white',
  },
  divisorPrincipal:{
    marginLeft: '39%',
    width: '20%',
    background: 'white',
  },
}))

export default function Awesome() {
    const local = stylesLocal();
    const classes = useStyles();
    return (
        <div className="poligonos" style={{background: "#953ee4"}}>
            <Grid
                container
                justify="center"
                alignItems="center"
            >
                 
                {/* Secciones de titulos */}
                <Grid xs={10}  style={{marginTop: 150}}>
                    <Box pb={5}>
                        <Typography className={local.colorLetra} component="div" variant="h3">
                            <Box textAlign="center" mt={4} p={1}>
                                ¡Beneficios increíbles!
                            </Box>
                        </Typography>
                        <Box textAlign="center" mt={1}> 
                            <Divider className={local.divisorPrincipal}/>
                        </Box>
                        <Typography className={local.colorLetra} component="div" variant="h5">
                            <Box textAlign="center" p={3}>
                                Adquiere grandiosos beneficios con nosotros al adquirir tu propia tienda
                            </Box>
                        </Typography>
                        <Box textAlign="center" mt={1}> 
                            <Divider className={local.divisorPrincipal}/>
                        </Box>
                    </Box>
                </Grid>
                {/* Secciones de regalos */}
                <Grid container justify="center" alignItems="center" >
                    <Grid xs={10} lg={3}>
                        <Box>
                            <Box textAlign="center" >
                                <IconButton>
                                    <LaptopIcon className={local.large}/>
                                </IconButton>
                            </Box>
                            <Typography className={local.colorLetra} component="div" variant="h5" color="primary">
                                <Box textAlign="center" mt={5} className={classes.tituloSec}>
                                    Tu propio Dominio
                                </Box>
                            </Typography>
                            <Typography component="div" variant="h6">
                                <Box textAlign="center" pr={3} pl={3}  mt={2}>
                                    Adquiere tu propio dominio, que sea tan único como tu negocio, para que tus clientes te identifiquen más rápido en la Web.
                                </Box>
                                </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={10} lg={3}>
                        <Box>
                            <Box textAlign="center" >
                                <IconButton>
                                    <CloudDoneIcon className={local.large}/>
                                </IconButton>
                            </Box>
                            <Typography className={local.colorLetra} component="div" variant="h5" color="primary">
                                <Box textAlign="center" mt={5} className={classes.tituloSec}>
                                    Almacenamiento
                                </Box>
                            </Typography>
                            <Typography component="div" variant="h6">
                                <Box textAlign="center" pr={3} pl={3}  mt={2}>
                                    No deberás preocuparte por una relación dentro del almacenamiento y podrás registrar los productos que quieras.
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={10} lg={3}>
                        <Box mt={3}>
                            <Box textAlign="center" >
                                <IconButton>
                                    <AddToQueueIcon className={local.large}/>
                                </IconButton>
                            </Box>
                            <Typography className={local.colorLetra} component="div" variant="h5"  color="primary">
                                <Box textAlign="center" mt={5} className={classes.tituloSec}>
                                    Variedad de Diseños
                                </Box>
                            </Typography>
                            <Typography component="div" variant="h6">
                                <Box textAlign="center" pr={3} pl={3}  mt={2}>
                                    Al adquirir tu tienda en linea podrás elegir entre algunos de nuestros diferentes templetes que tenemos para ofrecerte. Con un diseño sorprendente para tus clientes.
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Box p={10} />
        </div>
    )
}
