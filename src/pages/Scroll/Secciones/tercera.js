import { Box, Container, Divider, Grid, Hidden, makeStyles, Typography } from '@material-ui/core';
import React, { Fragment } from 'react'
import DoneAllIcon from '@material-ui/icons/DoneAll';

import Celular from '../../../image/Publicidad CAFI 3.1.jpg'
import useStyles from '../../estilos';

const styleslocales = makeStyles((theme) => ({
    containerImage:{
        width: "90%",
        height: "90%"
    },
    imagen:{
        maxHeight: '100%',
		maxWidth: '100%'
    },
}));

export default function Tercera() {
    const local = styleslocales();
    const classes = useStyles();

    return (
        <Fragment>
            <Container>
                <Grid container>
                    <Grid lg={7} xs={12} >
                        <Box display="flex" justifyContent="center" alignItems="center" className={local.containerImage}>
                            <img 
                                className={local.imagen}
                                src={Celular}
                                alt="Celular Promocional" 
                            />
                        </Box>
                    </Grid>
                    <Grid lg={5} xs={11}>
                        <Typography component="div" variant="h3" color="primary">
                            <Box textAlign="left">
                                ¡Todo lo que obtienes con CAFI!
                            </Box>
                        </Typography>
                        <Box className={classes.margenes}>
                        
                        <Divider variant="inset" className={classes.divisor}/>
                        
                        </Box>
                        <Typography component="div" variant="h6">
                            <Box className={classes.margenes}>
                                Tú, como dueño de tu tienda en línea tendrás acceso a tu panel de administrador donde estarán todos los apartados y secciones de tu tienda 100% editables para que des el diseño y estructura que siempre habías soñado.
                            </Box>
                            <Box display="flex" alignItems="center" className={classes.margenes}>
                                <Box display="flex" alignItems="center" p={1}>
                                    <DoneAllIcon className={classes.colorIcon} />
                                </Box>
                                <Box>
                                    Editar la información de tu tienda
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center" className={classes.margenes}>
                                <Box  display="flex" alignItems="center" p={1}>
                                    <DoneAllIcon className={classes.colorIcon} />
                                </Box>
                                <Box>
                                    Configurar tus políticas de envió, privacidad y de imagen corporativa
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center" className={classes.margenes}>
                                <Box  display="flex" alignItems="center" p={1}>
                                    <DoneAllIcon className={classes.colorIcon} />
                                </Box>
                                <Box>
                                    Un apartado exclusivo donde puedes subir la historia de tu empresa.
                                </Box> 
                            </Box>
                            <Box display="flex" alignItems="center" className={classes.margenes}>
                                <Box  display="flex" alignItems="center" p={1}>
                                    <DoneAllIcon className={classes.colorIcon} />
                                </Box>
                                <Box>
                                    Podras editar el logo de tu negocio, datos principales de contacto, ubicación y todas tus redes sociales.
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center" className={classes.margenes}>
                                <Box  display="flex" alignItems="center" p={1}>
                                    <DoneAllIcon className={classes.colorIcon} />
                                </Box>
                                <Box>
                                    Tu propio apartado de publicidad donde en este podrás subir una sección completa con un banner y los productos de una categoría en especial en la página principal.
                                </Box>
                            </Box>
                        </Typography>

                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}
