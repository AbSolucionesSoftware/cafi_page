import { Box, Container, Divider, Grid, Hidden, makeStyles, Typography } from '@material-ui/core';
import React, { Fragment } from 'react'

import ImagenOne from '../../../image/PUBLICIDAD PARA CAFI 6.1.jpg'
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
                        <Box className={classes.margenes}>
                            <Divider variant="inset" className={classes.divisor}/>
                        </Box>
                        <Typography component="div" variant="h6">
                            <Box  className={classes.margenes}>
                                Al adquirir nuestros servicios tendras la posibilidad de poder obtener tu propia App Movil.
                            </Box>
                            <Box  className={classes.margenes}>
                                Una mayor experiencia para tus usuarios. Podran encontrarte mas rapido desde la PlayStore, para poder consultar mas rapido tus productos
                            </Box>
                            <Box  className={classes.margenes}>
                                Mismos productos, misma publicidad, mismas promociones, todo desde tu propia aplicación. Estar a la vanguardia del mercado digital nunca fue tan facil.
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
