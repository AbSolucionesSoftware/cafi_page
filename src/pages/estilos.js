import { Backdrop, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    containerImage:{
        width: 400,
        height: '100%'
    },
    containerImgSec:{
        width: 250,
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
        fontSize: 17,
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
        width: '30%',
        background: '#673de6'
    },
    divisorPrincipal:{
        marginLeft: '39%',
        width: '20%',
        background: '#673de6'
    }
}));

export default useStyles;
