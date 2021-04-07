import {  makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    containerImage:{
        width: "90%",
        height: '100%'
    },
    containerImgSec:{
        width: "80%",
        height: '100%'
    },
    imagen:{
        maxHeight: '100%',
		maxWidth: '100%'
    },
    
    margenes:{
        marginTop: "6%",
        textAlign: "left"
    },
    // tipografia:{
    //     fontSize: 18,
    // },
    tituloSec:{
        // fontSize: 28,
        // color: '#673de6',
        textAlign:'center'
    },
    subtitulos:{
        // fontSize: 24,
        // color: '#673de6',
    },

    colorIcon:{
        fontSize: 30,
        color: '#673de6'
    },
    iconBoton:{
        fontSize: 65,
        color: '#673de6'
    },

    divisor:{
        textAlign: "left",
        // width: '5%',
        background: '#673de6'
    },
    divisorPrincipal:{
        width: '25%',
        background: '#673de6'
    },

    imagenes:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    cajaVideo:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
    video:{
        width: "100%",
        height: "100%"
    }
}));

export default useStyles;
