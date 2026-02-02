import React, { useState } from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import CelebrationIcon from '@mui/icons-material/Celebration'
import Confetti from 'react-confetti'

const ConfirmationButton = () => {
  const [showConfetti, setShowConfetti] = useState(false)
  const phoneNumber = '5493585139895'
  const message = encodeURIComponent(
    '¡Hola! Confirmo mi asistencia al primer cumpleaños de Ciro. ¡Nos vemos el 16/02/2026! 🎉'
  )

  const handleConfirmation = () => {
    setShowConfetti(true)
    
    setTimeout(() => {
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
    }, 800)
    
    setTimeout(() => {
      setShowConfetti(false)
    }, 3000)
  }

  return (
    <Container maxWidth="md" sx={{ my: 8, px: { xs: 2, sm: 3 } }}>
      <AnimatePresence>
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={150}
            gravity={0.1}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box sx={{ textAlign: 'center' }}>
          {/* Título minimalista */}
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              color: '#ffffff',
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
              }
            }}
          >
            Confirma tu asistencia!
          </Typography>

          {/* Texto descriptivo */}
          <Typography
            variant="body1"
            sx={{
              color: '#fffed1',
              mb: 5,
              fontSize: '1.1rem',
              lineHeight: 1.6,
              maxWidth: '500px',
              mx: 3,
              fontFamily: '"Andika", sans-serif',
            }}
          >
            Ayúdanos a preparar todo para que sea un día inolvidable
          </Typography>

          {/* Botón principal */}
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            {/* Efecto de pulso alrededor del botón */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                right: '-10px',
                bottom: '-10px',
                backgroundColor: 'rgba(37, 211, 102, 0.1)',
                borderRadius: '12px',
                zIndex: 0,
              }}
            />
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleConfirmation}
              style={{ position: 'relative', zIndex: 1 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon sx={{ fontSize: 28 }} />}
                sx={{
                  backgroundColor: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#128C7E',
                    transform: 'translateY(-2px)',
                  },
                  px: { xs: 5, sm: 7 },
                  py: 2.5,
                  borderRadius: 3,
                  fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  fontWeight: 'bold',
                  textTransform: 'none',
                  boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
                  minWidth: { xs: '280px', sm: '320px' },
                  transition: 'all 0.5s ease',
                }}
              >
                Confirmar por WhatsApp
              </Button>
            </motion.div>
          </Box>

          

          {/* Decoración mínima */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 4 }}>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                style={{ fontSize: '24px' }}
              >
                {i === 0 ? '🎈' : i === 1 ? '🎉' : '🎂'}
              </motion.div>
            ))}
          </Box>
        </Box>
      </motion.div>
    </Container>
  )
}

export default ConfirmationButton