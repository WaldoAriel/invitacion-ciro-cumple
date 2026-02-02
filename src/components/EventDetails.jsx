import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const EventDetails = () => {
  const details = [
    {
      icon: "/icons/sun.svg",
      color: "#FFB74D",
      text: "¡Los invito a pasar un día de sol y río!",
    },
    {
      icon: "/icons/calendar.svg",
      color: "#4FC3F7",
      text: "Día: 16 de febrero desde las 10:00 AM",
    },
    {
      icon: "/icons/rio.svg",
      color: "#02569f",
      text: "Lugar: Estancia Río Quillinzo",
    },
    {
      icon: "/icons/deckchair.svg",
      color: "#FF6B6B",
      text: "Llevá tu reposera!",
    },
    {
      icon: "/icons/mate.svg",
      color: "#8D6E63",
      text: "Y no te olvides del mate!",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ my: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Box sx={{ textAlign: "center", px: { xs: 2, sm: 3 } }}>
          <Typography
            variant="h3"
            sx={{
              my: 5,
              color: "#ffffff",
              fontSize: { xs: "1.8rem", sm: "2.2rem" },
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "3px",
                background:
                  "linear-gradient(90deg, transparent, #FFD700, transparent)",
              },
            }}
          >
            Detalles de la Fiesta
          </Typography>

          <Box sx={{ maxWidth: "500px", mx: "auto" }}>
            {details.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                style={{ marginBottom: "12px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 2, sm: 3 },
                    py: 2.5,
                    px: 3,
                    borderRadius: 3,
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    borderLeft: `5px solid ${item.color}`,
                    "&:hover": {
                      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {/* Icono con fondo del color */}
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: 0,
                      borderRadius: "50%",
                      backgroundColor: `${item.color}15`, // 15 = 9% opacity en hex
                    }}
                  >
                    <Box sx={{ width: 30, height: 30 }}>
                      <img
                        src={item.icon}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          filter: `brightness(0) saturate(100%) invert(39%) sepia(91%) saturate(715%) hue-rotate(${
                            item.color === "#FFB74D"
                              ? "0deg"
                              : item.color === "#4FC3F7"
                                ? "180deg"
                                : item.color === "#81C784"
                                  ? "120deg"
                                  : item.color === "#FF6B6B"
                                    ? "350deg"
                                    : "0deg"
                          }) brightness(95%) contrast(105%)`,
                        }}
                      />
                    </Box>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      textAlign: "left",
                      flex: 1,
                      color: "#5D4037",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          
        </Box>
      </motion.div>
    </Container>
  );
};

export default EventDetails;
