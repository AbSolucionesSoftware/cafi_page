import { Box, Container, Divider, Grid, Hidden, Typography } from '@material-ui/core';
import React, { Fragment } from 'react'

import ImagenOne from '../../../image/CelularOne.png'
import useStyles from '../../estilos';


export default function Primera() {

    const classes = useStyles();

    return (
        <Fragment>
            <Container>
                <Grid container spacing={1} >
                    <Grid lg={6} xs={11}>
                        <Typography component="div" variant="h4">
                            <Box textAlign="left" mt={9}>
                                Excelente manera de describir su aplicación
                            </Box>
                        </Typography>
                        <Box className={classes.margenes}>

                            <Divider variant="inset" className={classes.divisor}/>
                        
                        </Box>
                        <Typography component="div" variant="body1" className={classes.tipografia}>
                            <Box  className={classes.margenes}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Box>
                            <Box  className={classes.margenes}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Box>
                            
                        </Typography>
                    </Grid>
                    <Grid lg={6} xs={11} >
                        <Box ml={7} className={classes.containerImage}>
                            <img 
                                className={classes.imagen}
                                src={ImagenOne}
                                alt="Tecnologia de Huawei" 
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}
