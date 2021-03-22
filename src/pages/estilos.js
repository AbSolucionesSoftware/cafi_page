import {  makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    containerImage:{
        width: "80%",
        height: '100%'
    },
    containerImgSec:{
        width: "80%",
        height: '100%'
    },
    
    imagen:{
        width: '100%',
        height: '100%'
    },
    
    margenes:{
        marginTop: "6%",
        textAlign: "left"
    },
    tipografia:{
        fontSize: 18,
        textAlign: 'center'
    },
    tituloSec:{
        fontSize: 24,
        color: '#673de6',
        textAlign:'center'
    },
    subtitulos:{
        fontSize: 20,
        color: '#673de6',
    },

    colorIcon:{
        fontSize: 25,
        color: '#673de6'
    },
    iconBoton:{
        fontSize: 60,
        color: '#673de6'
    },

    divisor:{
        textAlign: "left",
        // width: '5%',
        background: '#673de6'
    },
    divisorPrincipal:{
        marginLeft: '39%',
        width: '20%',
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
