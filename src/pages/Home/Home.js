import React from 'react'

import BannerPrincipal from '../BannerPrincipal/bannerPrincipal'
import FrenteScroll from '../Scroll/scroll'
import Paquetes from '../Paquetes/paquetes';

export default function Home() {
    return (
        <div>
            <div>
                <BannerPrincipal/>
            </div>
            <div>
                <FrenteScroll/>
            </div>
            <div>
                <Paquetes />
            </div>
        </div>
    )
}
