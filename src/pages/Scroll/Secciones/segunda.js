import { Box, Container, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

import ImagenOne from '../../../image/PUBLICIDAD CAFI 6.png'
import useStyles from '../../estilos';

const styleslocales = makeStyles((theme) => ({
    containerImage:{
        width: "80%",
        height: "100%"
    },
    imagen:{
        maxHeight: '100%',
		maxWidth: '100%'
    },
    fondo:{
        // background: "#ebebeb"
    }
}));

export default function Primera() {
    
    const local = styleslocales();
    const classes = useStyles();

    return (
            <Container className={local.fondo}>
                <Grid container spacing={1} >
                    <Grid lg={5} xs={11}>
                        <Typography component="div"  variant="h3" color="primary">
                            <Box mt={9} textAlign="left" >
                                CAFI tu tienda en línea, en una APP MOVIL 
                            </Box>
                        </Typography>
                        <Box p={2} mt={2}>
                            <Divider variant="inset" className={classes.divisor}/>
                        </Box>
                        <Typography component="div" variant="h6">
                            <Box  className={classes.margenes}>
                                Al adquirir nuestros servicios tendrás la posibilidad de poder obtener tu propia App móvil.
                            </Box>
                            <Box  className={classes.margenes}>
                                Una mayor experiencia para tus usuarios. podrán encontrarte más rápido desde la PlayStore, para poder consultar más rápido tus productos
                            </Box>
                            <Box  className={classes.margenes}>
                                Mismos productos, misma publicidad, mismas promociones, todo desde tu propia aplicación. Estar a la vanguardia del mercado digital nunca fue tan fácil.
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid lg={7} xs={11} >
                        <Box mt={3} ml={4} display="flex" justifyContent="center" alignItems="center" className={local.containerImage}>
                            <img 
                                className={local.imagen}
                                src={ImagenOne}
                                alt="Tecnologia de Huawei" 
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
    )
}
