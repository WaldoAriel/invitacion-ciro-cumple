import React, { useState, useEffect } from 'react'
import { Box, Typography, Container } from '@mui/material'
import { motion } from 'framer-motion'

const CountdownTimer = () => {
  const targetDate = new Date('2026-02-16T10:00:00')
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = targetDate - new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timeComponents = [
    { label: 'Días', value: timeLeft.días, color: '#FF6B6B' },
    { label: 'Horas', value: timeLeft.horas, color: '#4FC3F7' },
    { label: 'Minutos', value: timeLeft.minutos, color: '#81C784' },
  ]

  return (
    <Container maxWidth="md" sx={{ my: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Box sx={{ textAlign: 'center', px: { xs: 2, sm: 3 } }}>
          {/* Título */}
          <Typography
            variant="h3"
            sx={{
              mb: 5,
              color: '#ffffff',
              fontSize: { xs: '1.5rem', sm: '2.2rem' },
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
            Cuenta regresiva para la fiesta...
          </Typography>

          {/* Contador en círculos */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: { xs: 2, sm: 3 },
            maxWidth: '500px',
            mx: 'auto'
          }}>
            {timeComponents.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Box
                  sx={{
                    width: { xs: 70, sm: 80 },
                    height: { xs: 70, sm: 80 },
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    border: `3px solid ${item.color}30`,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '9px',
                      backgroundColor: item.color,
                    }
                  }}
                >
                  {/* Número */}
                  <Typography
                    variant="h4"
                    sx={{
                      color: item.color,
                      fontWeight: 'bold',
                      fontSize: { xs: '1.6rem', sm: '1.8rem' },
                      lineHeight: 1,
                      mb: 0.5,
                    }}
                  >
                    {item.value?.toString().padStart(2, '0') || '00'}
                  </Typography>
                  
                  {/* Etiqueta */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#5D4037',
                      fontWeight: 600,
                      fontSize: { xs: '0.6rem', sm: '0.75rem' },
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Mensaje con animación sutil */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Typography
              variant="h4"
              sx={{
                mt: 4,
                color: '#ffffff',
                fontSize: { xs: '1.6rem', sm: '1.8rem' },
                fontFamily: '"Hachi Maru Pop", cursive',
              }}
            >
              No te lo pierdas! 🎉
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  )
}

export default CountdownTimer