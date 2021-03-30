import React from 'react'

import BannerPrincipal from '../BannerPrincipal/bannerPrincipal'
import FrenteScroll from '../Scroll/scroll'
import Awesome from './awesome'
import Paquetes from '../Paquetes/paquetes';
import Contacto from './contacto';
import Carrusel_Screens from './carrusel_screens'
import { Box, Container } from '@material-ui/core';

export default function Home() {
    return (
        <div>
            <div id="inicio"> 
                <BannerPrincipal/>
            </div>
                <Container>
                    <FrenteScroll/>
                </Container>
            <div id="beneficios"  style={{background: "white"}}>
                <Awesome />
            </div>
            <div id="galeria">
                <Container>
                    <Carrusel_Screens />
                </Container>
            </div>
            <div id="paquetes" style={{background: "white"}}>
                <Box >
                    <Paquetes />
                </Box>
            </div>
            <div id="contacto">
                <Box>
                    <Contacto />
                </Box>
            </div>
        </div>
    )
}
