import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cap1 from '../../image/Screens/cap1.jpg'
import cap2 from '../../image/Screens/cap2.jpg'
import cap3 from '../../image/Screens/cap3.jpg'
import cap4 from '../../image/Screens/cap4.jpg'
import cap5 from '../../image/Screens/cap5.jpg'
import cap6 from '../../image/Screens/cap6.jpg'
import cap7 from '../../image/Screens/cap7.jpg'
import cap8 from '../../image/Screens/cap8.jpg'
import cap9 from '../../image/Screens/cap9.jpg'
import cap10 from '../../image/Screens/cap10.jpg'

import { Box, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import useStyles from '../estilos';

const stylesLocal = makeStyles((theme) => ({
    
    containerImagen:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 480,
        width: 290,
        background: "white",
        borderRadius: 6
    },
    imagen:{
        maxWidth: "95%",
        maxHeight: "95%",
        borderRadius: 6
    }
   
}));

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1
    }
};


export default function Carrusel_Screens() {
    const classes = useStyles();
    const estilos = stylesLocal();

    return (
    <div>
        <Grid xs={12}>
            <Typography component="div" variant="h3" color="primary">
                <Box textAlign="center" mt={8} p={1}>
                    Una perpectiva diferente
                </Box>
            </Typography>
            <Box textAlign="center" mt={1}> 
                <Divider className={classes.divisorPrincipal}/>
            </Box>
            <Typography component="div" variant='h6'>
                <Box textAlign="center" p={3}>
                    Preparate y entra en el nuevo mundo del E-Comerce
                </Box>
            </Typography>
            <Box textAlign="center" mt={1}> 
                <Divider className={classes.divisorPrincipal}/>
            </Box>
        </Grid>

        <Grid lg={12} xs={ 12}>
            <Box mt={5} mb={5} >
                <Carousel 
                    responsive={responsive} 
                    showDots
                    sliderClass=""
                    swipeable
                    // autoPlay
                    // autoPlaySpeed={3000}
                    // containerClass="container"
                >
                    <Box className={estilos.containerImagen}>
                        <img
                            className={estilos.imagen}
                            src={cap1}
                            alt="imagen"
                        />
                        
                    </Box>
                    <Box className={estilos.containerImagen}>
                        <img
                            alt="imagen"
                            className={estilos.imagen}
                            src={cap2}
                        />
                        
                    </Box>
                    <Box className={estilos.containerImagen}>
                        <img
                            className={estilos.imagen}
                            src={cap3}
                            alt="imagen"
                        />
                        
                    </Box>
                    <Box className={estilos.containerImagen}>
                        <img
                            className={estilos.imagen}
                            src={cap4}
                            alt="imagen"
                        />
                        
                    </Box>
                    <Box className={estilos.containerImagen}>
                        <img
                            className={estilos.imagen}
                            src={cap5}
                            alt="imagen"
                        />
                        
                    </Box>
                    <Box className={estilos.containerImagen}>
                        <img
                            className={estilos.imagen}
                            src={cap6}
                            alt="imagen"
                        />
                        
                    </Box>
                    <Box className={estilos.containerImagen}>
                        <img
                            className={estilos.imagen}
                            src={cap7}
                            alt="imagen"
                        />
                        
                    </Box>
                    <Box className={estilos.containerImagen}>
                        <img
                            className={estilos.imagen}
                            src={cap8}
                            alt="imagen"
                        />
                        
                    </Box>
                    <Box className={estilos.containerImagen}>
                        <img
                            className={estilos.imagen}
                            src={cap9}
                            alt="imagen"
                        />
                        
                    </Box>
                    <Box className={estilos.containerImagen}>
                        <img
                            className={estilos.imagen}
                            src={cap10}
                            alt="imagen"
                        />
                        
                    </Box>
                </Carousel>
            </Box>
        </Grid>

    </div>

    )
}
