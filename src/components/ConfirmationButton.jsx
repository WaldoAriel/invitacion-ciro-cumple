import React, { useState } from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import CelebrationIcon from '@mui/icons-material/Celebration'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import CloudIcon from '@mui/icons-material/Cloud'
import UmbrellaIcon from '@mui/icons-material/Umbrella'
import Confetti from 'react-confetti'

const ConfirmationButton = () => {
  const [showConfetti, setShowConfetti] = useState(false)
  const phoneNumber = '5493585139895'
  const message = encodeURIComponent(
    '¡Hola! Confirmo mi asistencia al cumple de Ciro. ¡Nos vemos el 16 de febrero! 🎉'
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
            Confirmá tu asistencia!
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
              mx: 'auto',
              fontFamily: '"Andika", sans-serif',
            }}
          >
            Ayudanos a preparar todo para que sea un día inolvidable.
          </Typography>

          {/* Aviso climático - Tarjeta animada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: 3,
                p: 3,
                mb: -1.5,
                maxWidth: '500px',
                mx: 'auto',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '2px solid rgba(79, 195, 247, 0.3)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
                {/* Íconos de clima animados */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <WbSunnyIcon sx={{ fontSize: 30, color: '#FFB74D' }} />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <CloudIcon sx={{ fontSize: 30, color: '#4FC3F7' }} />
                </motion.div>
                
                <motion.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <UmbrellaIcon sx={{ fontSize: 30, color: '#81C784' }} />
                </motion.div>
              </Box>
              
              <Typography
                variant="body1"
                sx={{
                  color: '#5D4037',
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  fontStyle: 'normal',
                  textAlign: 'center',
                  fontFamily: '"Andika", sans-serif',
                }}
              >
                💡 Recordá que al ser un evento al aire libre, 
                <strong> queda sujeto a las condiciones climáticas. </strong> 
                ¡Esperamos un día soleado para celebrar juntos! ☀️
              </Typography>
            </Box>
          </motion.div>

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
                  color: '#25D366',
                  '&:hover': {
                    backgroundColor: '#25D366',
                    color: '#ffffff',
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

          {/* Instrucción */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body2"
              sx={{
                mt: 4,
                color: '#fffed1',
                fontSize: '0.9rem',
                maxWidth: '400px',
                mx: 'auto',
                fontFamily: '"Andika", sans-serif',
              }}
            >
              Se abrirá WhatsApp con un mensaje predefinido que podrás enviarme.
            </Typography>
          </motion.div>

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