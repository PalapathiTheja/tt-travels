import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, 
  Typography, 
  Container,
  Avatar,
  Rating,
  Paper,
  IconButton,
  Grid
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const testimonials = [
  {
    name: "Rajesh Kumar",
    review: "Booked a 45-seater bus for our company trip to Tirupati. TT Travels provided excellent service with a well-maintained vehicle and professional driver. The AC worked perfectly throughout the journey. Will definitely book again!",
    stars: 5,
    avatar: "R",
    vehicle: "Bus"
  },
  {
    name: "Priya Sharma",
    review: "Used their tempo traveller for a family trip to Pondicherry. The 12-seater vehicle was spotlessly clean and comfortable. Driver was punctual and experienced. Best travel experience in recent times!",
    stars: 5,
    avatar: "P",
    vehicle: "Tempo"
  },
  {
    name: "Mohammed Ali",
    review: "Hired an Innova for a business trip to Chennai. The car was in pristine condition and the driver was very professional. Their rates are competitive and service is top-notch. Highly recommended!",
    stars: 5,
    avatar: "M",
    vehicle: "Car"
  },
  {
    name: "Lakshmi Reddy",
    review: "Regular customer of TT Travels for our school excursions. Their buses are well-maintained and drivers are very responsible. The booking process is smooth and they're always punctual.",
    stars: 5,
    avatar: "L",
    vehicle: "Bus"
  }
];

const theme = createTheme({
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#003459',
    },
    secondary: {
      main: '#00A8E8',
    },
    text: {
      primary: '#fff',
      secondary: '#d1e5f0',
    }
  },
});

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        bgcolor: 'primary.main',
        py: { xs: 2, md: 4 },
        px: { xs: 1, md: 2 },
        color: 'text.primary',
        textAlign: 'center'
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            sx={{ fontWeight: 700, mb: 3, color: 'secondary.main' }}
          >
            Customer Experiences
          </Typography>

          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper 
                    elevation={6} 
                    sx={{
                      p: { xs: 4, md: 6 },
                      borderRadius: 3,
                      bgcolor: 'secondary.main',
                      color: 'primary.main',
                      position: 'relative',
                      textAlign: 'center',
                      minHeight: { xs: 250, md: 300 }
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 64,
                        height: 64,
                        bgcolor: 'primary.main',
                        color: 'text.primary',
                        position: 'absolute',
                        top: -30,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: 24,
                        fontWeight: 'bold'
                      }}
                    >
                      {testimonials[activeTestimonial].avatar}
                    </Avatar>

                    <Box sx={{ mt: 4 }}>
                      <Rating 
                        value={testimonials[activeTestimonial].stars} 
                        readOnly 
                        size="large"
                      />
                    </Box>

                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontStyle: 'italic',
                        mt: 2,
                        color: 'text.primary',
                        fontSize: '1rem'
                      }}
                    >
                      "{testimonials[activeTestimonial].review}"
                    </Typography>

                    <Typography 
                      variant="h6" 
                      sx={{ fontWeight: 600, mt: 3, color: 'primary.main' }}
                    >
                      {testimonials[activeTestimonial].name}
                    </Typography>

                    <Typography 
                      variant="subtitle2" 
                      sx={{ color: 'text.secondary', mt: 1 }}
                    >
                      Service: {testimonials[activeTestimonial].vehicle}
                    </Typography>
                  </Paper>
                </motion.div>
              </AnimatePresence>
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            {testimonials.map((_, index) => (
              <IconButton
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: activeTestimonial === index ? 20 : 12,
                  height: 12,
                  borderRadius: 6,
                  bgcolor: activeTestimonial === index ? 'secondary.main' : 'grey.400',
                  mx: 0.5,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'secondary.main'
                  }
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Testimonials;
