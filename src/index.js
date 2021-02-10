import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './scss/styles.scss';

const theme = createMuiTheme({
  typography: {
    fontFamily: "Quicksand"
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// reportWebVitals();
