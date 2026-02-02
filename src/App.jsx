import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Componentes
import Hero from './components/Hero'
import EventDetails from './components/EventDetails'
import PhotoSection from './components/PhotoSection'
import CountdownTimer from './components/CountdownTimer'
import LocationMap from './components/LocationMap'
import ConfirmationButton from './components/ConfirmationButton'
import DecorativeElements from './components/DecorativeElements'

// Crear tema personalizado con Hachi Maru Pop
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700',
      light: '#FFF176',
      dark: '#F9A825',
    },
    secondary: {
      main: '#4FC3F7',
      light: '#81D4FA',
      dark: '#0288D1',
    },
    background: {
      default: '#FFF9C4',
      paper: '#FFFFFF',
    },
    success: {
      main: '#81C784',
    },
    warning: {
      main: '#FFB74D',
    },
  },
  typography: {
    fontFamily: "'Andika', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Hachi Maru Pop', cursive",
      fontSize: { xs: '2.8rem', sm: '3.5rem' },
      color: '#FF6B6B',
      textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
      letterSpacing: '1px',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "'Hachi Maru Pop', cursive",
      fontSize: { xs: '2.2rem', sm: '2.5rem' },
      color: '#4FC3F7',
      letterSpacing: '1px',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "'Hachi Maru Pop', cursive",
      fontSize: { xs: '1.8rem', sm: '2rem' },
      color: '#81C784',
      letterSpacing: '0.5px',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: "'Hachi Maru Pop', cursive",
      fontSize: { xs: '1.5rem', sm: '1.8rem' },
      letterSpacing: '0.5px',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 20,
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DecorativeElements />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #32bdf2 0%, #97d9f3 60%, #8ae34f 80%, #8ae34f 90%, #8ae34f 100%)',
          position: 'relative',
          overflow: 'hidden',
          pb: 8,
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Hero />
          <PhotoSection />
          <EventDetails />
          <CountdownTimer />
          <LocationMap />
          <ConfirmationButton />
          
          {/* Footer con mensaje especial */}
          <Box sx={{ textAlign: 'center', mt: 6, px: 2 }}>
            
            <Typography
              variant="h4"
              sx={{
                mt: 8,
                color: "#ffffff",
                fontSize: { xs: "1.9rem", sm: "2.6rem" },
                fontFamily: '"Hachi Maru Pop", cursive',
              }}
            >
              Los espero!
            </Typography>
            <Typography
              variant="h4"
              sx={{
                mt: 1,
                color: "#ffffff",
                fontSize: { xs: "2.4rem", sm: "3rem" },
                fontFamily: '"Hachi Maru Pop", cursive',
              }}
            >
              Ciro
            </Typography>

          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App