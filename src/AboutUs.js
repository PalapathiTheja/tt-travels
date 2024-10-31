import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        About TT Travels
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to TT Travels! We are your trusted partner for rental services, providing a variety of vehicles to meet your transportation needs.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Our Services:
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1">
          <strong>Car Rentals:</strong> We offer a range of cars from economy to luxury vehicles like Swift Dzire, Hyundai Creta, and Toyota Innova. All cars are well-maintained and available for both short and long journeys.
        </Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1">
          <strong>Bus Rentals:</strong> Need to transport a larger group? Our fleet of buses can accommodate from 21 to 50 passengers, ensuring comfort and convenience for any trip or occasion.
        </Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1">
          <strong>Tempo Rentals:</strong> For mid-size groups, our Tempo Traveller services are perfect, offering seating for 12-18 people with all the modern amenities.
        </Typography>
      </Box>
      <Typography variant="body1">
        Whether you're planning a family vacation, corporate event, or group tour, TT Travels is here to provide reliable, comfortable, and affordable rental services.
      </Typography>
    </Container>
  );
};

export default AboutUs;
