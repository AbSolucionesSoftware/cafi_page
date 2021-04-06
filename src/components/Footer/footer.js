import React from 'react'
import { Fragment } from 'react'

import { Grid, Box, makeStyles, Typography, Link } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import logo from '../../image/Logo Cafi.png'
const useStyles = makeStyles((theme) => ({

    imagen:{
        width: 220,
        height: 80
    },
    
}));

export default function Footer() {

    const classes =useStyles();
    return (
       <Fragment>
           <Grid>
               <Box mt={8} align="center">
                    <img className={classes.imagen}
                        src={logo}
                        alt="Tecnologia de Huawei" 
                    />
               </Box>
               <Box align="center">
                   <Typography>
                       Telefono: 317-103-5768
                   </Typography>
                   <Typography >
                        Javier Mina #452, Coto privado Javier Mina, CP 48900
                   </Typography>
                   <Typography>
                       Autlán de Navarro, Jalisco.
                   </Typography>
               </Box>
               <Box align="center">
                    <Link href="https://www.facebook.com/cafi.tutiendaenlinea?_rdc=1&_rdr" color="inherit" target="_blank">
                        <FacebookIcon  fontSize="large"/>
                    </Link>
                    <Link href="https://www.instagram.com/cafi.tutiendaonline/" color="inherit" target="_blank">
                        <InstagramIcon fontSize="large"/>
                    </Link>
               </Box>
           </Grid>
       </Fragment>
    )
}
