import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    background: {
      default: "#012456"
    }
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecorationColor: "white"
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "white"
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "white" 
        }
      }
    }
  },
  typography: {
    fontFamily: "Inconsolata",
    fontSize: 16,
    allVariants: {
      color: "white"
    }
  }
});

const darkTheme = createTheme({
  palette: {
    background: {
      default: "black"
    }
  },
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
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

