import React from 'react'

import BannerPrincipal from '../BannerPrincipal/bannerPrincipal'
import FrenteScroll from '../Scroll/scroll'
import Awesome from './awesome'
import Paquetes from '../Paquetes/paquetes';
import Contacto from './contacto';
import Carrusel_Screens from './carrusel_screens'
import { Box } from '@material-ui/core';

export default function Home() {
    return (
        <div>
            <div>
                <BannerPrincipal/>
            </div>
            <div>
                <FrenteScroll/>
            </div>
            <div  style={{background: "white"}}>
                <Awesome />
            </div>
            <div>
                <Carrusel_Screens />
            </div>
            <div  style={{background: "white"}}>
                <Box >
                    <Paquetes />
                </Box>
            </div>
            <div>
                <Box>
                    <Contacto />
                </Box>
            </div>
        </div>
    )
}
