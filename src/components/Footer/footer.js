import React from 'react'
import { Fragment } from 'react'

import { Grid, Box, makeStyles, Typography, Link, Hidden } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import logo from '../../image/Logo Cafi.png'
const useStyles = makeStyles((theme) => ({
    imagen:{
        width: 270,
        height: 95,
        "&:hover": {
            webkitTransform: "scale(1.3)",
            transform: "scale(1.3)",
            overflow: "hidden",
        },
    },
    botonRed:{
        "&:hover": {
            webkitTransform: "scale(1.3)",
            transform: "scale(1.3)",
            overflow: "hidden",
        },
    },
    fondo:{
        // background: "#953ee4"
    }
}));

export default function Footer() {

    const mensaje = 'Hola buen dia%0AMe interesa saber mas sobre CAFI, y adquirir algunos de sus paquetes.'

    const classes =useStyles();

    return (
           <Grid container className={classes.fondo}>
               <Grid lg={4} xs={12}>
                    <Box align="center" p={4} mt={1}>
                        <Typography variant="h6" color="primary">
                            Contacto:
                        </Typography>
                        <Typography variant="h6">
                            Telefono: 317-103-5768
                        </Typography>
                        <Typography variant="h6">
                            Javier Mina #452, Coto privado Javier Mina, CP 48900
                        </Typography>
                        <Typography variant="h6">
                            Autlán de Navarro, Jalisco.
                        </Typography>
                    </Box>
               </Grid>
               <Hidden xsDown mdDown>
                    <Grid lg={4} xs={12}>
                            <Box display="flex" alignItems="center" justifyContent="center" align="center" p={4} mt={2}>
                                <img className={classes.imagen}
                                    src={logo}
                                    alt="Tecnologia de Huawei" 
                                />
                            </Box>
                    </Grid>
               </Hidden>
               <Grid lg={4} xs={12}>
                    <Box align="center" p={4} mt={1}>
                        <Typography variant="h6">
                            Siguenos en nuestras redes:
                        </Typography>
                        <Box p={2}>
                            <Link href="https://www.facebook.com/cafi.tutiendaenlinea?_rdc=1&_rdr" color="inherit" target="_blank">
                                <FacebookIcon className={classes.botonRed} color="primary" style={{fontSize: 50}}/>
                            </Link>
                            <Link href="https://www.instagram.com/cafi.tutiendaonline/" color="inherit" target="_blank">
                                <InstagramIcon className={classes.botonRed} color="primary" style={{fontSize: 50}}/>
                            </Link>
                            <Link  href={`https://api.whatsapp.com/send?phone=523171035768&text=${mensaje}`} color="inherit" target="_blank">
                                <WhatsAppIcon className={classes.botonRed} color="primary" style={{fontSize: 50}}/>
                            </Link>
                        </Box>
                    </Box>
               </Grid>
           </Grid>
    )
}
