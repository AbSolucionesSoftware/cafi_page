import { Accordion, AccordionSummary, Box, Button, Container, Drawer, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import React, { Fragment, useState } from 'react';
import useStyles from '../estilos';
import ImagenFondo from '../../image/foto.jpg'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './contacto.scss'

const stylesLocal = makeStyles((theme) => ({
    
   containerImagen:{
        backgroundImage: `url(${ImagenFondo})`,
        backgroundAttachment: 'fixed',
   },
   textF: {
        background: "white",
        borderRadius: 5,
        width: 300
   },
   tipo:{
       color:"white",
       fontSize: 50,
   },
   boton: {
       height: 56
   },
   botonCorreo:{
        borderRadius: 100,
        fontSize: 75,
   }
   
}))



export default function Contacto() {

    const [ open, setOpen ] = useState(false);
    
    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };
    
    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    const classes = useStyles();
    const estilo = stylesLocal();

    return (
        <div>
            <div className="fondoImagen">
                <Container>
                    <Grid xs={12} >
                        <Box pb={1}>
                            <Box p={1}>
                                <Typography className={estilo.tipo} component="div" >
                                    <Box textAlign="center" mt={10}>
                                        Download the app on
                                    </Box>
                                </Typography>
                            </Box>
                                <Box display="flex" justifyContent="center" p={5}>
                                    <Box pr={4}>
                                        <Button
                                            variant="contained" 
                                            color="primary"
                                            size="large"
                                            className={estilo.boton}
                                            disableRipple
                                            startIcon={<AppleIcon />}
                                        >
                                            App Store
                                        </Button>
                                    </Box>
                                    <Box>
                                        <Button 
                                            variant="contained" 
                                            color="primary"
                                            size="large"
                                            className={estilo.boton}
                                            disableRipple
                                            startIcon={<AndroidIcon />}
                                        >
                                            Play Store
                                        </Button>
                                    </Box>
                                </Box>
                            <Box>
                                <Typography  className={estilo.tipo}  component="div" >
                                    <Box textAlign="center" mt={10}>
                                        Subscribe Now!
                                    </Box>
                                </Typography>
                            </Box>
                            <Box display="flex" justifyContent="center" p={5}>
                                <Box  pr={4}>
                                    <TextField 
                                        className={estilo.textF} 
                                        id="outlined-basic" 
                                        label="Your mail" 
                                        variant="outlined" 
                                    />
                                </Box>
                                <Box>
                                    <Button 
                                        variant="contained" 
                                        color="primary"
                                        size="large"
                                        className={estilo.boton}
                                        disableRipple
                                    >
                                        Suscribirse
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </div>
            <div>
                <Container>
                    <Box textAlign="center">
                        <Button 
                            variant="outlined"
                            size="large"
                            className={estilo.botonCorreo}
                            disableRipple
                            onClick={() => setOpen(true)}
                        >
                            <MailOutlineIcon className={estilo.botonCorreo}/>
                        </Button>
                    </Box>
                    <Box>
                        {open === true ? (
                            <Box>
                                
                            </Box>
                        ): (
                            null
                        )}
                    {/* <Drawer  
                        className={classes.drawer}
                        anchor="bottom"
                        open={open}
                        onClose={handleDrawerClose}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                        <Box>

                        </Box>
                    </Drawer> */}
                    </Box>
                </Container>
            </div>
        </div>
    )
}
