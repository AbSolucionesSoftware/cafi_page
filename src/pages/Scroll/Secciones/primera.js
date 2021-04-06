import { Box, Container, Divider, Grid, Typography } from '@material-ui/core';
import React, { Fragment } from 'react'
import { IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BarChartIcon from '@material-ui/icons/BarChart';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import Celular from '../../../image/Publicidad CAFI 2.1.jpg'
import useStyles from '../../estilos';


export default function Primera() {

    const classes = useStyles();

    return (
            <Container>
            <Grid container spacing={1} >
                {/* SECCIONES DE TITULOS */}
                <Grid xs={12} >
                    <Typography  component="div" variant="h3" color="primary" >
                        <Box textAlign="center" mt={1}>
                            Asombrosas funciones en un solo clic
                        </Box>
                    </Typography>

                    <Box mt={2}>
                        <Divider className={classes.divisorPrincipal}/>
                    </Box>

                    <Typography component="div" variant="h5" color="primary" >
                        <Box textAlign="center" mt={1}>
                            Una lista de maravillosas funciones para ti como dueño de tu propia tienda
                        </Box>
                    </Typography>

                    <Box mt={2} mb={5}>
                        <Divider className={classes.divisorPrincipal}/>
                    </Box>

                </Grid>
                {/* FIN SECCION DE TITULOS */}
            
                {/* INCIIO DE CONTENIDO PRINCIPAL */}
                    <Grid container >
                        <Grid container lg={4} xs={12}>
                            <Grid xs={10}>
                                <Box >
                                    <Typography component="div" variant="h5" color="primary">
                                        <Box textAlign="right" mt={2}>
                                            Descargar base de datos
                                        </Box>
                                    </Typography>
                                    <Typography component="div" variant="h6">
                                        <Box textAlign="right" mt={2}>
                                            Puedes descargar la base de datos de tus clientes para garantizar la experiencia de usuario y excelente servicio postventa.
                                        </Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={2}>
                                <Box mt="50%">
                                    <IconButton>
                                        <AccountCircleIcon className={classes.iconBoton}/>
                                    </IconButton>
                                </Box>
                            </Grid>

                            <Grid xs={10}>
                                <Box >
                                    <Typography component="div" variant="h5" color="primary" >
                                        <Box textAlign="right" mt={2}>
                                            Subir productos más rapido
                                        </Box>
                                        </Typography>
                                        <Typography component="div" variant="h6">
                                        <Box textAlign="right" mt={2}>
                                            Solamente necesitas seleccionar una categoría, Registrar los datos de tu producto y complementar con una galería de fotos. 
                                        </Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={2}>
                                <Box mt="50%">
                                    <IconButton>
                                        <CloudUploadIcon className={classes.iconBoton}/>
                                    </IconButton>
                                </Box>
                            </Grid>

                            <Grid xs={10}>
                                <Box >
                                    <Typography component="div" variant="h5" color="primary" >
                                        <Box textAlign="right" mt={2}>
                                            Ineventarios ONLINE
                                        </Box>
                                        </Typography>
                                        <Typography component="div" variant="h6">
                                        <Box textAlign="right" mt={2}>
                                            Ya no tendrás que hacer un conteo de tu mercancía a diario, con CAFI tu tienda en línea puedes administrar tu inventario online y cargar tus inventarios que tengas.
                                        </Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={2}>
                                <Box mt="50%">
                                    <IconButton>
                                        <BarChartIcon className={classes.iconBoton}/>
                                    </IconButton>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container lg={4} xs={12} >
                            <Box mb={5}>
                                <Box display="flex" justifyContent="center" ml={5} mt={5} className={classes.containerImgSec} >
                                    <img 
                                        className={classes.imagen}
                                        src={Celular}
                                        alt="Celular" 
                                    />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid container lg={4} xs={12}>
                            <Grid xs={2}>
                                <Box mt="50%">
                                    <IconButton>
                                        <AssignmentIcon className={classes.iconBoton}/>
                                    </IconButton>
                                </Box>
                            </Grid>
                            <Grid xs={10}>
                                <Box ml={3}>
                                    <Typography component="div" variant="h5" color="primary" >
                                        <Box textAlign="left" mt={2}>
                                            ¡Control de Apartados!
                                        </Box>
                                        </Typography>
                                        <Typography component="div" variant="h6">
                                        <Box textAlign="left" mt={2}>
                                            Si, tendrás un panel en el cual podrás gestionar los pedidos de tus clientes, donde el cliente podrá elegir si quiere envió a domicilio o lo recoge en sucursal. podrás actualizar el estado del pedido de tu cliente.
                                        </Box>
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid xs={2}>
                                <Box mt="50%">
                                    <IconButton>
                                        <AddCircleOutlineIcon className={classes.iconBoton}/>
                                    </IconButton>
                                </Box>
                            </Grid>
                            <Grid xs={10}>
                                <Box ml={3}>
                                    <Typography component="div" variant="h5" color="primary" >
                                        <Box textAlign="left" mt={2}>
                                            ¡Administrar tus Pedidos!
                                        </Box>
                                        </Typography>
                                        <Typography component="div" variant="h6">
                                        <Box textAlign="left" mt={2}>
                                            En este apartado puedes ver los pedidos de tus clientes, filtrar por estados, si ya están pagados o no y cambiar su estado. Toda la gestión de tu tienda a unos clics de distancia.
                                        </Box>
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid xs={2}>
                                <Box mt="50%">
                                    <IconButton>
                                        <LocalAtmIcon className={classes.iconBoton}/>
                                    </IconButton>
                                </Box>
                            </Grid>
                            <Grid xs={10}>
                                <Box ml={3}>
                                    <Typography component="div" variant="h5" color="primary" >
                                        <Box textAlign="left" mt={2}>
                                            Podras generar tus propias promociones
                                        </Box>
                                        </Typography>
                                        <Typography component="div" variant="h6">
                                        <Box textAlign="left" mt={2}>
                                            Podrás generar ofertas especiales a tus productos, así es, con pocos clics puedes agregar descuentos a tus productos.
                                        </Box>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                {/* find e contenido princiapl */}
            </Grid>
            </Container>
    )
}
