import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { motion } from 'framer-motion'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const LocationMap = () => {
  const handleOpenMap = () => {
    window.open('https://maps.app.goo.gl/yvVXnXTt5g5sAWv7A?g_st=aw', '_blank')
  }

  return (
    <Box 
      sx={{ 
        position: 'relative',
        mt: -8, // Hace que se superponga con el componente anterior
        mb: 4,
      }}
    >
      {/* Contenedor de la imagen */}
      <Box
        sx={{
          width: '100%',
/*           height: { xs: '500px', sm: '600px', md: '700px' }, */          
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Imagen de fondo - Ocupa todo el contenedor */}
        <Box
          component="img"
          src="/images/estancia.png"
          alt="Fondo de ubicación"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center', // Enfoca la parte superior
            display: 'block',
          }}
        />
        
        {/* Overlay gradiente para mejor legibilidad */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, transparent 100%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.9) 80%, #FFFFFF 100%)',
          }}
        />
      </Box>

      {/* Contenido superpuesto en la parte inferior de la imagen */}
      <Box
        sx={{
          position: 'relative',
          mt: { xs: -27, sm: -16, md: -20 }, // Trae el contenido hacia arriba
          zIndex: 2,
          px: { xs: 2, sm: 3 },
        }}
      >
        <Box sx={{ 
          textAlign: 'center',
          maxWidth: '500px',
          margin: '0 auto',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Título */}
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                color: '#ffffff',
                fontSize: { xs: '1.8rem', sm: '2.2rem' },
                fontWeight: 600,
                textShadow: '0 1px 2px rgba(255,255,255,0.8)',
              }}
            >
              Ubicación
            </Typography>

            {/* Ícono */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  border: '2px solid #4FC3F7',
                }}
              >
                <LocationOnIcon sx={{ fontSize: 35, color: '#4FC3F7' }} />
              </Box>
            </motion.div>

            {/* Información */}
            <Typography
              variant="h4"
              sx={{
                color: '#5D4037',
                fontSize: { xs: '1.3rem', sm: '1.5rem' },
                fontWeight: 600,
                mb: 1.5,
                backgroundColor: 'rgba(255,255,255,0.9)',
                display: 'inline-block',
                px: 2,
                py: 1,
                borderRadius: 2,
              }}
            >
              Estancia Río Quillinzo
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#666',
                fontSize: '1.1rem',
                mb: 4,
                lineHeight: 1.6,
                backgroundColor: 'rgba(255,255,255,0.8)',
                px: 3,
                py: 2,
                borderRadius: 2,
              }}
            >
              Un lugar mágico rodeado de naturaleza para celebrar este día especial
            </Typography>

            {/* Botón */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenMap}
            >
              <Button
                variant="contained"
                startIcon={<OpenInNewIcon />}
                sx={{
                  backgroundColor: '#4FC3F7',
                  '&:hover': {
                    backgroundColor: '#0288D1',
                  },
                  px: 5,
                  py: 1.5,
                  borderRadius: 3,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 6px 20px rgba(79, 195, 247, 0.4)',
                  minWidth: '250px',
                }}
              >
                Ver en Google Maps
              </Button>
            </motion.div>
          </motion.div>
        </Box>
      </Box>
    </Box>
  )
}

export default LocationMap