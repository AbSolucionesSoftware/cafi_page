import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'
import { Fragment } from 'react'
// import GetAppIcon from '@material-ui/icons/GetApp';
import './banner.scss';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';

import Carrusel1 from '../../image/CarruselUno.jpg';
import Carrusel2 from '../../image/CarruselDos.jpg';
import Carrusel3 from '../../image/CarruselTres.jpg';

const useStyles = makeStyles((theme) => ({
    // principal:{
    //     position: 'relative'
    // },
    // imagen:{
    //     width: '100%',
    //     height: '100%'
    // },
    // containerImagen:{
    //     width: '100%',
    //     // height: '95%',
    //     position: 'relative',
    //     zIndex: 80
    // },
    // containerBotton:{
    //     marginLeft: '15%',
    //     position: 'absolute',
    //     top: '75%',
    //     zIndex: 100,
    // },
    // buton:{
    //     fontSize: 22,
    //     textTransform: 'none',
    // }
    //8600c8
    
}));

export default function BannerPrincipal() {
    const BgElement = Element.BgElement;
    const classes =useStyles();
    
    return (
        <>
            <BannerAnim autoPlay prefixCls="banner-user" delay={200}>
                <Element key={1} prefixCls="banner-user-elem" >
                    <BgElement
                        key="bg"
                        className="bg banner-elemento"
                        alt="img-oferta"
                        style={{
                            backgroundImage: `url(${Carrusel1})`,
                        }}
                    >
                    </BgElement>
                </Element>
                <Element key="2" prefixCls="banner-user-elem" >
                    <BgElement
                        key="bg"
                        className="bg banner-elemento"
                        alt="img-oferta"
                        style={{
                            backgroundImage: `url(${Carrusel2})`,
                        }}
                    >
                    </BgElement>
                </Element>
                <Element key="3" prefixCls="banner-user-elem" >
                    <BgElement
                        key="bg"
                        className="bg banner-elemento"
                        alt="img-oferta"
                        style={{
                            backgroundImage: `url(${Carrusel3})`,
                        }}
                    >
                    </BgElement>
                </Element>
            </BannerAnim>
        </>

        
    )
}
