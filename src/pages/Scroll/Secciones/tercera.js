import { Box, Container, Divider, Grid, Hidden, Typography } from '@material-ui/core';
import React, { Fragment } from 'react'
import DoneAllIcon from '@material-ui/icons/DoneAll';

import ImagenOne from '../../../image/CelularOne.png'
import useStyles from '../../estilos';


export default function Tercera() {

    const classes = useStyles();

    return (
        <Fragment>
            <Container>
                <Grid container spacing={1} >
                    <Hidden mdDown>
                        <Grid xs={6} >
                            <Box className={classes.containerImage}>
                                <img 
                                    className={classes.imagen}
                                    src={ImagenOne}
                                    alt="Tecnologia de Huawei" 
                                />
                            </Box>
                        </Grid>
                    </Hidden>
                    <Grid xs={6}>
                        <Typography component="div" variant="h4">
                            <Box textAlign="left" mt={9}>
                                Todo lo que necesitas saber!
                            </Box>
                        </Typography>
                        <Box className={classes.margenes}>
                        
                        <Divider variant="inset" className={classes.divisor}/>
                        
                        </Box>
                        <Typography component="div" variant="body1" className={classes.tipografia}>
                            <Box  className={classes.margenes}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Box>
                            <Box  className={classes.margenes}>
                                <DoneAllIcon className={classes.colorIcon} />Plataforma confiable y segura
                            </Box>
                            <Box  className={classes.margenes}>
                                <DoneAllIcon className={classes.colorIcon} />Todo está perfectamente organizado para el futuro.
                            </Box>
                            <Box  className={classes.margenes}>
                                <DoneAllIcon className={classes.colorIcon} />Adjunte archivos grandes fácilmente
                            </Box>
                            <Box  className={classes.margenes}>
                                <DoneAllIcon className={classes.colorIcon} />Un montón de funciones y fácil de usar y personalizar
                            </Box>
                        </Typography>

                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}
