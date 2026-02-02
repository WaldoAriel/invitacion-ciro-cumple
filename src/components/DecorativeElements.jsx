import React from 'react'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

const DecorativeElements = () => {
  // Animalitos tipo peluche
  const plushAnimals = [
    { emoji: '🐻', size: 50, left: '5%', top: '15%', delay: 0 },
    { emoji: '🐰', size: 45, left: '85%', top: '25%', delay: 0.5 },
    { emoji: '🦊', size: 40, left: '10%', top: '70%', delay: 1 },
    { emoji: '🐯', size: 55, left: '80%', top: '75%', delay: 1.5 },
  ]

  // Globos flotantes
  const balloons = [
    { color: '#FF6B6B', left: '15%', top: '10%', delay: 0.2 },
    { color: '#4FC3F7', left: '25%', top: '5%', delay: 0.4 },
    { color: '#81C784', left: '75%', top: '8%', delay: 0.6 },
    { color: '#FFB74D', left: '85%', top: '12%', delay: 0.8 },
  ]

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      // En DecorativeElements.jsx, puedes agregar:
{/* Nubes con imágenes */}
<motion.div
  animate={{ x: [0, 40, 0], y: [0, -15, 0] }}
  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  style={{
    position: 'absolute',
    top: '40%',
    left: '15%',
    width: '90px',
    height: '55px',
    zIndex: 0,
    opacity: 0.6,
  }}
>
  <img 
    src="/images/cloud.png" 
    alt="Nube decorativa"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
    }}
  />
</motion.div>
      {/* Nubes de fondo */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`cloud-${i}`}
          animate={{ x: [0, 20, 0] }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          style={{
            position: 'absolute',
            top: `${15 + i * 15}%`,
            left: `${i * 20}%`,
            width: `${80 + i * 10}px`,
            height: `${40 + i * 5}px`,
            background: '#FFFFFF',
            borderRadius: '40px',
            opacity: 0.6,
          }}
        />
      ))}

      {/* Animalitos peluche animados */}
      {/* {plushAnimals.map((animal, index) => (
        <motion.div
          key={`animal-${index}`}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: animal.delay,
          }}
          style={{
            position: 'absolute',
            left: animal.left,
            top: animal.top,
            fontSize: `${animal.size}px`,
            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))',
          }}
        >
          {animal.emoji}
        </motion.div>
      ))} */}

      {/* Globos flotantes */}
      {balloons.map((balloon, index) => (
        <motion.div
          key={`balloon-${index}`}
          animate={{ y: [0, -30, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: balloon.delay,
          }}
          style={{
            position: 'absolute',
            left: balloon.left,
            top: balloon.top,
          }}
        >
          <Box
            sx={{
              width: '30px',
              height: '40px',
              background: balloon.color,
              borderRadius: '50%',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '2px',
                height: '15px',
                background: '#795548',
              },
            }}
          />
        </motion.div>
      ))}

      {/* Estrellitas titilantes */}
      {/* {[...Array(20)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            color: '#FFD700',
          }}
        >
          ✨
        </motion.div>
      ))} */}

      {/* Olas decorativas en el fondo */}
      {/* <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          overflow: 'hidden',
        }}
      >
        <motion.div
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '200%',
            height: '100%',
            background: 'linear-gradient(transparent, rgba(79, 195, 247, 0.3))',
            borderRadius: '50% 50% 0 0',
          }}
        />
      </Box> */}
    </Box>
  )
}

export default DecorativeElements