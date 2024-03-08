import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecorationColor: "#00FF00"
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#00FF00"
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#00FF00" 
        }
      }
    }
  },
  typography: {
    fontFamily: "Inconsolata",
    fontSize: 16,
    allVariants: {
      color: "#00FF00"
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

