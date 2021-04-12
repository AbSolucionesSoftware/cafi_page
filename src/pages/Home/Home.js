import React from 'react'
import BannerPrincipal from '../BannerPrincipal/bannerPrincipal'
import FrenteScroll from '../Scroll/scroll'
import Awesome from './awesome'
import Paquetes from '../Paquetes/paquetes';
import Contacto from '../Contacto/contacto';
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
            <div id="beneficios"  >
                <Awesome />
            </div>
            <div id="galeria">
                <Carrusel_Screens />
            </div>
            <div id="paquetes">
                <Box >
                    <Paquetes />
                </Box>
            </div>
            <div id="appMovil">
                <Box>
                    <Contacto />
                </Box>
            </div>
        </div>
    )
}
