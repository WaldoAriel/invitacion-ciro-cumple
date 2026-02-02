import React from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const PhotoSection = () => {
  return (
    <Box sx={{ height: '100vw', position: 'relative', marginTop: '-40vw', marginBottom: '60vw' }}>
      <Box sx={{ mt: 1, mb: 4 }}>
        {/* Foto de Ciro - Ancho completo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ marginBottom: '1.5rem' }}
        >
          <Box
            component="img"
            src="/ciro.png"
            alt="Ciro"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              objectPosition: 'center 30%', // Ajusta para enfocar la cara
            }}
          />
        </motion.div>

        {/* Texto centrado sobre la foto o debajo */}
        <Box sx={{ 
          textAlign: 'center', 
          px: { xs: 2, sm: 3 },
          mt: { xs: -6, sm: -8 }
        }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.5rem', sm: '1.8rem' },
                fontStyle: 'italic',
                color: '#9d59a2',
                lineHeight: 1.5,
                maxWidth: '500px',
                mx:4,
                fontFamily: '"Andika", sans-serif',
              }}
            >
              "Su sonrisa es nuestro rayito de sol, su mirada, un mundo de amor."
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Box>
  )
}

export default PhotoSection