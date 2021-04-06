import { Box, Container, Divider, Grid, Typography } from '@material-ui/core';
import React, { Fragment } from 'react'

import useStyles from '../../estilos';


export default function Cuarta() 
 {

    const classes = useStyles();

    return (
        <Fragment>
            <Container>
                <Grid container >
                    <Grid lg={6} xs={10} >
                        <Box className={classes.cajaVideo} mt={3}>
                            <iframe 
                                className={classes.video}
                                src="https://www.youtube.com/embed/oeiiCCTrCB8" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen
                            >

                            </iframe>
                        </Box>
                    </Grid>
                    <Grid lg={6} xs={10}>
                        <Box ml={5}>
                        <Typography component="div" variant="h3" color="primary">
                            <Box textAlign="left" mt={6}>
                                Somos CAFI tu aliado del mundo digital. 
                            </Box>
                        </Typography>
                        </Box>
                        <Box className={classes.margenes}>
                            <Divider variant="inset" className={classes.divisor}/>
                        </Box>
                        <Box ml={5}>
                        <Typography component="div" variant="h6">
                            <Box  className={classes.margenes}>
                                No importa la industria en la que estés, adentrarte en el mundo digital te abre muchas oportunidades, reinventando los negocios y capturando ventajas competitivas únicas. Entra en el mundo digital y acércate a tus clientes de una manera diferente. Potencia tus ventas y logra mayor alcance de público con el poder del e-commerce.
                            </Box>
                        </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}