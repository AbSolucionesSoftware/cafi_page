import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './scss/styles.scss';

// const theme = createMuiTheme({
//   typography: {
//     fontFamily: "Quicksand"
//   }
// });

const theme = createMuiTheme({
  typography: {
    h6:{ //testo
      fontSize: 18
    },
    h5:{ //subtitulos
      fontSize: 20
    },
    // h4:{ // titulos
    //   fontSize: 27,
    // },
    h3:{ //nombre empresa
      fontSize: 28,
      fontWeight: 500
    },
    body1:{
      fontSize: 16
    },
    fontFamily: "Quicksand"
  }, 
  palette:{
    primary: {
      main: "#673de6"
    },
    // secondary: {
    //   main: "#160404"
    // }
  }
});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// reportWebVitals();
