import { Box, Container, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../estilos';
import ImagenOne from '../../image/regalo.PNG'
import ImagenDos from '../../image/regalo2.PNG'
import ImagenSupport from '../../image/support.PNG'


const stylesLocal = makeStyles((theme) => ({
   containerImagen:{
        width: 180,
        height: '100%',
   },
}))


export default function Awesome() {

    const classes = useStyles();
    const estilo = stylesLocal();


    return (
        <div>
                    <Grid 
                        container
                        justify="center"
                        alignItems="center"
                    >
                        {/* Secciones de titulos */}
                        <Grid xs={10} >
                            <Box pb={5}>
                                <Typography component="div" variant="h4">
                                    <Box textAlign="center" mt={5}>
                                        It's Awesome
                                    </Box>
                                </Typography>
                                <Box textAlign="center" mt={1}> 
                                    <Divider className={classes.divisorPrincipal}/>
                                </Box>
                                <Typography component="div" variant="body1">
                                    <Box textAlign="center" mt={3}>
                                        List your app features and all the details Lorem ipsum dolor kadr
                                    </Box>
                                </Typography>
                                <Box textAlign="center" mt={1}> 
                                    <Divider className={classes.divisorPrincipal}/>
                                </Box>
                            </Box>
                        </Grid>
                        {/* Secciones de regalos */}
                        <Grid container justify="center"
                        alignItems="center">
                            <Grid xs={10} lg={3}>
                                <Box>
                                    <Box textAlign="center" >
                                        <img 
                                            className={estilo.containerImagen}
                                            src={ImagenOne}
                                            alt="Regalo" 
                                        />
                                    </Box>
                                    <Typography component="div">
                                        <Box textAlign="center" mt={5} className={classes.tituloSec}>
                                            Your Data in Cloud
                                        </Box>
                                        <Box textAlign="center" pr={3} pl={3} className={classes.tipografia} mt={2}>
                                            Fruitful Fruit hath, fruitful said him created bring set, behold darkness Shall lights deep fish seasons itself given likeness upon bring fill their their whose. Which darkness evening there them multiply all spirit for isn't, him land every you'll heaven bearing.
                                        </Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={10} lg={3}>
                            <Box>
                                    <Box textAlign="center" >
                                        <img 
                                            className={estilo.containerImagen}
                                            src={ImagenDos}
                                            alt="Regalo" 
                                        />
                                    </Box>
                                    <Typography component="div">
                                        <Box textAlign="center" mt={5} className={classes.tituloSec}>
                                            Monthly Rewards
                                        </Box>
                                        <Box textAlign="center" pr={3} pl={3} className={classes.tipografia} mt={2}>
                                            Fruitful Fruit hath, fruitful said him created bring set, behold darkness Shall lights deep fish seasons itself given likeness upon bring fill their their whose. Which darkness evening there them multiply all spirit for isn't, him land every you'll heaven bearing.
                                        </Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={10} lg={3}>
                                <Box>
                                    <Box textAlign="center" >
                                        <img 
                                            className={estilo.containerImagen}
                                            src={ImagenSupport}
                                            alt="Regalo" 
                                        />
                                    </Box>
                                    <Typography component="div">
                                        <Box textAlign="center" mt={5} className={classes.tituloSec}>
                                            24/7 Support
                                        </Box>
                                        <Box textAlign="center" pr={3} pl={3} className={classes.tipografia} mt={2}>
                                            Fruitful Fruit hath, fruitful said him created bring set, behold darkness Shall lights deep fish seasons itself given likeness upon bring fill their their whose. Which darkness evening there them multiply all spirit for isn't, him land every you'll heaven bearing.
                                        </Box>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
        </div>
    )
}
