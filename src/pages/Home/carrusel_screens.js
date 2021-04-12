import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './contacto.scss';
import CelularMarco from '../../image/PNG de celular.png'
import cap1 from '../../image/Screens/cap1.jpg'
import cap2 from '../../image/Screens/cap2.jpg'
import cap3 from '../../image/Screens/cap3.jpg'
import cap4 from '../../image/Screens/cap4.jpg'
import cap5 from '../../image/Screens/cap5.jpg'
import cap6 from '../../image/Screens/cap6.jpg'
import cap7 from '../../image/Screens/cap7.jpg'
import cap8 from '../../image/Screens/cap8.jpg'
import cap9 from '../../image/Screens/cap9.jpg'
// import cap10 from '../../image/Screens/cap10.jpg'

import cafi1 from '../../image/Galeria/CAFI1.PNG';
import cafi2 from '../../image/Galeria/CAFI2.PNG';
import cafi3 from '../../image/Galeria/CAFI3.PNG';
import cafi4 from '../../image/Galeria/CAFI4.PNG';

import { Box, Button, Container, Divider, Grid, Hidden, makeStyles, Typography } from '@material-ui/core';
import useStyles from '../estilos';

const stylesLocal = makeStyles((theme) => ({
    containerImagen:{
        height: 450,
        width: 300,
        // background: "white",
        borderRadius: 6
    },
    imagen:{
        maxWidth: "100%",
        maxHeight: "100%",
        borderRadius: 6
    },
    boton:{
        color: "white",
        backgroundColor: "#6919a2",
        fontSize: 30,
        fontWeight: 600,
        "&:hover": {
            backgroundColor: "#6919a2"
        },
    },
    colorLetra:{
        color: 'white',
    },
    divisorPrincipal:{
        width: '20%',
        background: 'white',
    },
    celular:{
        height: 513,
        width: 280,
        position: "absolute",  
        zIndex: 3,
        marginTop: 15,
        marginLeft: 468,

    },
    imagenCelular:{
        maxHeight: "100%",
        maxWidth: "100%"
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
      items: 2
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
};


export default function Carrusel_Screens() {
    const classes = useStyles();
    const estilos = stylesLocal();

    return (
    <div>
        <Container>
            <Grid xs={12}>
                <Typography component="div" variant="h3" color="primary">
                    <Box textAlign="center" mt={1} p={1}>
                        Una perpectiva diferente
                    </Box>
                </Typography>
                <Box  display="flex" justifyContent="center" mt={1}> 
                    <Divider className={classes.divisorPrincipal}/>
                </Box>
                <Typography component="div" variant='h6'>
                    <Box textAlign="center" p={3}>
                        Prepárate y entra en el nuevo mundo del E-Comerce
                    </Box>
                </Typography>
                <Box  display="flex" justifyContent="center" mt={1}> 
                    <Divider className={classes.divisorPrincipal}/>
                </Box>
            </Grid>
            <Hidden xsDown mdDown>
                <Box className={estilos.celular} >
                    <img className={estilos.imagenCelular} src={CelularMarco} alt="celularson"/>
                </Box>
            </Hidden>
            <Grid lg={12} xs={12} style={{position: "relative",  zIndex: 1}} >
                <Box textAlign="center" mt={6} mb={4} >
                    <Carousel
                        style={{position: "absolute",  zIndex: 2}} 
                        responsive={responsive}  
                        // showDots
                        // sliderClass=""
                        swipeable
                        infinite
                        // autoPlay
                        // autoPlaySpeed={2000}
                        // containerClass="container"
                    >
                        <Box className={estilos.containerImagen}>
                            <img
                                style={{marginLeft: 73}}
                                className={estilos.imagen}
                                src={cap1}
                                alt="imagen"
                            />
                        </Box>
                        <Box className={estilos.containerImagen}>
                            <img
                                style={{marginLeft: 73}}
                                alt="imagen"
                                className={estilos.imagen}
                                src={cap2}
                            />
                            
                        </Box>
                        <Box className={estilos.containerImagen}>
                            <img
                                className={estilos.imagen}
                                style={{marginLeft: 73}}
                                src={cap3}
                                alt="imagen"
                            />
                            
                        </Box>
                        <Box className={estilos.containerImagen}>
                            <img
                                className={estilos.imagen}
                                style={{marginLeft: 73}}
                                src={cap4}
                                alt="imagen"
                            />
                            
                        </Box>
                        <Box className={estilos.containerImagen}>
                            <img
                                className={estilos.imagen}
                                style={{marginLeft: 73}}
                                src={cap5}
                                alt="imagen"
                            />
                            
                        </Box>
                        <Box className={estilos.containerImagen}>
                            <img
                                className={estilos.imagen}
                                style={{marginLeft: 73}}
                                src={cap6}
                                alt="imagen"
                            />
                            
                        </Box>
                        <Box className={estilos.containerImagen}>
                            <img
                                className={estilos.imagen}
                                style={{marginLeft: 73}}
                                src={cap7}
                                alt="imagen"
                            />
                            
                        </Box>
                        <Box className={estilos.containerImagen}>
                            <img
                                className={estilos.imagen}
                                style={{marginLeft: 73}}
                                src={cap8}
                                alt="imagen"
                            />
                            
                        </Box>
                        <Box className={estilos.containerImagen}>
                            <img
                                className={estilos.imagen}
                                style={{marginLeft: 73}}
                                src={cap9}
                                alt="imagen"
                            />
                            
                        </Box>
                        {/* <Box className={estilos.containerImagen}>
                            <img
                                className={estilos.imagen}
                                style={{marginLeft: 73}}
                                src={cap10}
                                alt="imagen"
                            />
                            
                        </Box> */}
                    </Carousel>
                </Box>
            </Grid>
        </Container>
        <Grid lg={12}  className="poligonoGaleria" style={{background: "#953ee4"}}>
            <Container>
                <Box p={6}/>
                <Typography component="div" variant="h3" className={estilos.colorLetra}>
                    <Box textAlign="center" mt={8}>
                        Visita nuestra tienda
                    </Box>
                </Typography>
                <Box textAlign="center" mt={2} display="flex" justifyContent="center"> 
                    <Divider className={estilos.divisorPrincipal}/>
                </Box>
                <Typography component="div" variant='h6'>
                    <Box textAlign="center" p={2}>
                        Da un vistazo a algunos de los diferentes demos disponibles que tenemos para ofrecerte
                    </Box>
                </Typography>

                <Grid container justify="center">
                    <Grid lg={6} xs={12} className="caption-style-1">
                        <Box p={1}>
                            <li>
                                <img  className="imagenGaleria" alt="Galeria de fotos" src={cafi1}/>
                                <a rel="noreferrer" href="https://dreamy-euclid-9e955c.netlify.app/" target="_blank">
                                    <div className="caption">
                                        <div className="blur"></div>
                                        <div className="caption-text">
                                            <Button className={estilos.boton} variant="outlined">
                                                Visitar tienda
                                            </Button>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </Box>
                    </Grid>
                    <Grid lg={6} xs={12} className="caption-style-1">
                        <Box p={1}>
                            <li>
                                <img  className="imagenGaleria" alt="Galeria de fotos" src={cafi2}/>
                                <a rel="noreferrer" href="https://modest-booth-e9ef32.netlify.app/" target="_blank">
                                    <div className="caption">
                                        <div className="blur"></div>
                                        <div className="caption-text">
                                            <Button className={estilos.boton} variant="outlined">
                                                Visitar tienda
                                            </Button>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </Box>
                    </Grid>
                    <Grid lg={6} xs={12} className="caption-style-1">
                        <Box p={1}>
                            <li>
                                <img  className="imagenGaleria" alt="Galeria de fotos" src={cafi3}/>
                                <a rel="noreferrer" href="https://vibrant-hamilton-7a1ec1.netlify.app/" target="_blank">
                                    <div className="caption">
                                        <div className="blur"></div>
                                        <div className="caption-text">
                                            <Button className={estilos.boton} variant="outlined">
                                                Visitar tienda
                                            </Button>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </Box>
                    </Grid>
                    <Grid lg={6} xs={12} className="caption-style-1">
                        <Box p={1}>
                            <li>
                                <img  className="imagenGaleria" alt="Galeria de fotos" src={cafi4} />
                                <a rel="noreferrer" href="https://krispychicken.mx/" target="_blank">
                                    <div className="caption">
                                        <div className="blur"></div>
                                        <div className="caption-text">
                                            <Button className={estilos.boton} variant="outlined">
                                                Visitar tienda
                                            </Button>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Grid>

    </div>

    )
}   