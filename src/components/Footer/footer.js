import React from 'react'
import { Fragment } from 'react'

import { Grid, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

    imagen:{
        width: 145,
        height: 80
    },
    
}));

export default function Footer() {

    const classes =useStyles();
    return (
       <Fragment>
           <Grid>
               <Box align="center">
                    <img className={classes.imagen}
                        src="https://portadanacional.com/wp-content/uploads/2020/11/p1202.png" 
                        alt="Tecnologia de Huawei" 
                    />
               </Box>
               <Box>

               </Box>
           </Grid>
       </Fragment>
    )
}
