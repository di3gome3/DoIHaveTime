"use client"
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Press_Start_2P } from 'next/font/google';

const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: '400' });

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // cor principal
    },
    secondary: {
      main: '#dc004e', // cor secundária
    },
    error: {
      main: red.A400, // cor de erro
    },
    background: {
      default: '#0F3057', // cor de fundo padrão
    },
  },
  typography: {
    fontFamily: pressStart2P.style.fontFamily,
    h1: {
      fontFamily: pressStart2P.style.fontFamily,
      fontSize: '2rem',
    },
    h2: {
      fontFamily: pressStart2P.style.fontFamily,
      fontSize: '1.75rem',
    },
    h3: {
      fontFamily: pressStart2P.style.fontFamily,
      fontSize: '1.5rem',
    },
    h4: {
      fontFamily: pressStart2P.style.fontFamily,
      fontSize: '1.25rem',
    },
    h5: {
      fontFamily: pressStart2P.style.fontFamily,
      fontSize: '1rem',
    },
    h6: {
      fontFamily: pressStart2P.style.fontFamily,
      fontSize: '0.875rem',
    },
    body1: {
      fontFamily: pressStart2P.style.fontFamily,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: pressStart2P.style.fontFamily,
      fontSize: '0.875rem',
    },
    button: {
      fontFamily: pressStart2P.style.fontFamily,
      fontSize: '0.875rem',
    },
    caption: {
      fontFamily: pressStart2P.style.fontFamily,
      fontSize: '0.75rem',
    },
    overline: {
      fontFamily: pressStart2P.style.fontFamily,
      fontSize: '0.75rem',
    },
  },
});

export default theme;
