import { Box, Container, Divider, Grid, Typography } from '@material-ui/core';
import React, { Fragment } from 'react'
import { IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import ImagenOne from '../../../image/iphone.png'
import useStyles from '../../estilos';


export default function Primera() {

    const classes = useStyles();

    return (
        <Fragment>
            <Container>
            <Grid container spacing={1} >
                {/* SECCIONES DE TITULOS */}
                <Grid xs={12} >
                    <Typography  component="div" variant="h4" >
                        <Box textAlign="center" mt={1}>
                            Amazing Features
                        </Box>
                    </Typography>

                    <Box mt={2}>
                        <Divider className={classes.divisorPrincipal}/>
                    </Box>

                    <Typography component="div" variant="body1" className={classes.tipografia}>
                        <Box textAlign="center" mt={1}>
                            List your app features and all the details Lorem ipsum dolor kadr
                        </Box>
                    </Typography>

                    <Box mt={2} mb={5}>
                        <Divider className={classes.divisorPrincipal}/>
                    </Box>

                </Grid>
                {/* FIN SECCION DE TITULOS */}
            
                {/* INCIIO DE CONTENIDO PRINCIPAL */}
                    <Grid container >
                        <Grid container lg={4} xs={11}>
                            <Grid xs={10}>
                                <Box mt={6}>
                                    <Typography component="div" variant="h4" >
                                        <Box textAlign="right" className={classes.subtitulos} mt={2}>
                                            Todo lo que necesitas saber!
                                        </Box>
                                        <Box textAlign="right" className={classes.tipografia} mt={2}>
                                            Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut labore et dolore magna.
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
                                    <Typography component="div" variant="h4" >
                                        <Box textAlign="right" className={classes.subtitulos} mt={2}>
                                            Todo lo que necesitas saber!
                                        </Box>
                                        <Box textAlign="right" className={classes.tipografia} mt={2}>
                                            Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut labore et dolore magna.
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
                                    <Typography component="div" variant="h4" >
                                        <Box textAlign="right" className={classes.subtitulos} mt={2}>
                                            Todo lo que necesitas saber!
                                        </Box>
                                        <Box textAlign="right" className={classes.tipografia} mt={2}>
                                            Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut labore et dolore magna.
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
                            
                        </Grid>

                        <Grid container lg={4} xs={11} >
                            <Box ml={9} mt={5} mb={5} className={classes.containerImgSec} >
                                <img 
                                    className={classes.imagen}
                                    src={ImagenOne}
                                    alt="Celular" 
                                />
                            </Box>
                        </Grid>

                        <Grid container lg={4} xs={11}>
                            <Grid xs={2}>
                                <Box mt="50%">
                                    <IconButton>
                                        <AccountCircleIcon className={classes.iconBoton}/>
                                    </IconButton>
                                </Box>
                            </Grid>
                            <Grid xs={10}>
                                <Box ml={2} mt={6}>
                                    <Typography component="div" variant="h4" >
                                        <Box textAlign="left" className={classes.subtitulos} mt={2}>
                                            Todo lo que necesitas saber!
                                        </Box>
                                        <Box textAlign="left" className={classes.tipografia} mt={2}>
                                            Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut labore et dolore magna.
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
                                <Box ml={2}>
                                    <Typography component="div" variant="h4" >
                                        <Box textAlign="left" className={classes.subtitulos} mt={2}>
                                            Todo lo que necesitas saber!
                                        </Box>
                                        <Box textAlign="left" className={classes.tipografia} mt={2}>
                                            Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut labore et dolore magna.
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
                                <Box ml={2}>
                                    <Typography component="div" variant="h4" >
                                        <Box textAlign="left" className={classes.subtitulos} mt={2}>
                                            Todo lo que necesitas saber!
                                        </Box>
                                        <Box textAlign="left" className={classes.tipografia} mt={2}>
                                            Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </Box>
                                    </Typography>
                                </Box>
                            </Grid>

                        </Grid>

                    </Grid>
                {/* find e contenido princiapl */}
            </Grid>
            </Container>
        </Fragment>
    )
}
