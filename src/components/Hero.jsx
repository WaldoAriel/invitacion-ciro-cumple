import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 6, md: 8 },
        px: 2,
        position: "relative",
        overflow: "hidden",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Sol animado */}
      <motion.div
        animate={{
          rotate: [-30, 0, -30],
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          position: "absolute",
          top: "5%",
          right: "10%",
          width: "120px",
          height: "120px",
          zIndex: 0,
          filter: "drop-shadow(0 0 15px rgba(255, 235, 59, 0.7))",
        }}
      >
        <img
          src="/images/sun.png"
          alt="Sol animado"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </motion.div>

      {/* Nubes */}
      <motion.div
        animate={{ x: [0, 65, 0], y: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "15%",
          left: "15%",
          width: "100px",
          height: "60px",
          zIndex: 0,
          opacity: 0.9,
        }}
      >
        <img
          src="/images/cloud.png"
          alt="Nube animada"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.1))",
          }}
        />
      </motion.div>

      {/* Segunda nube */}
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 15, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "80px",
          height: "50px",
          zIndex: 0,
          opacity: 0.7,
        }}
      >
        <img
          src="/images/cloud.png"
          alt="Nube animada"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.1))",
            transform: "scaleX(-1)",
          }}
        />
      </motion.div>

      {/* GLOBOS - Izquierda */}
      <motion.div
        animate={{ y: [0, -80, 0], rotate: [-5, 5, -5] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "17%",
          left: "5%",
          width: "80px",
          height: "100px",
          zIndex: 1,
        }}
      >
        <img
          src="/images/globos.png"
          alt="Globos"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.2))",
          }}
        />
      </motion.div>

      {/* GLOBOS - Derecha */}
      <motion.div
        animate={{ y: [0, -60, 0], rotate: [5, -5, 5] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{
          position: "absolute",
          top: "50%",
          right: "5%",
          width: "90px",
          height: "90px",
          zIndex: 1,
        }}
      >
        <img
          src="/images/globos.png"
          alt="Globos"
          style={{
            width: "120%",
            height: "120%",
            objectFit: "contain",
            filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.2))",
            transform: "scaleX(-1)",
          }}
        />
      </motion.div>

      {/* GLOBOS - Centro inferior (opcional) */}
      <motion.div
        animate={{ y: [0, -80, 0], scale: [1, 1.3, 1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          position: "absolute",
          bottom: "0%",
          left: "10%",
          transform: "translateX(-50%)",
          width: "60px",
          height: "80px",
          zIndex:1,
        }}
      >
        <img
          src="/images/globos.png"
          alt="Globos"
          style={{
            width: "120%",
            height: "130%",
            objectFit: "contain",
            filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.2))",
          }}
        />
      </motion.div>

      {/* Contenedor del texto */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "rgba(255, 255, 255, 0)",
          borderRadius: 2,
          p: 2,
          mx: "auto",
          maxWidth: "90%",
          backdropFilter: "blur(0px)",
          boxShadow: "1 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem" },
              textAlign: "start",
              position: "relative",
              zIndex: 3,
              color: "#FFFFFF",
              WebkitTextStroke: "3px #FFFFFF",
              textStroke: "3px #ffffff",
              paintOrder: "stroke fill",
              textShadow: "3px 3px 6px rgba(0,0,0,0.2)",
              mb: 2,
            }}
          >
            Llega Mi Primer Cumple!
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.7rem", sm: "2rem", md: "2.5rem" },
              color: "#9d59a2",
              position: "relative",
              zIndex: 3,
              WebkitTextStroke: "2px #9d59a2",
              textStroke: "2px #9d59a2",
              paintOrder: "stroke fill",
              textShadow: "3px 3px 6px rgba(0,0,0,0.2)",
              mb: 2,
            }}
          >
            y quiero festejarlo con ustedes!
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
