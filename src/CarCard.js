import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button, CardActions, Grid, Box } from '@mui/material';
import { Helmet } from 'react-helmet'; // Add Helmet for SEO
import swift from './assets/swift.webp';
import toyota from './assets/toyota.jpg';
import hyundai from './assets/hyundai.jpg';
import etios from './assets/etios.webp';
import tempo from './assets/tempo.webp';
import tempo1 from './assets/tempo1.webp';
import tempo3 from './assets/tempo3.jpg';
import bus1 from './assets/bus1.avif';
import bus2 from './assets/bus3.webp';
import urbania from './assets/urbania.webp';

const carData = [
  {
    name: 'Force Urbania',
    image: urbania,
    rate: '20',
    maxPeople: '17',
    transmission: 'Automatic',
    airConditioned: 'Yes',
    driverAllowance: '500',
    phone: '+91 8885544518',
  },
  {
    name: 'Swift Dzire',
    image: swift,
    rate: '17',
    maxPeople: '5',
    transmission: 'Manual',
    airConditioned: 'Yes',
    driverAllowance: '300',
    phone: '+91 8885544518',
  },
  {
    name: 'Toyota Innova',
    image: toyota,
    rate: '20',
    maxPeople: '7',
    transmission: 'Automatic',
    airConditioned: 'Yes',
    driverAllowance: '500',
    phone: '+91 8885544518',
  },
  {
    name: 'Hyundai Creta',
    image: hyundai,
    rate: '18',
    maxPeople: '5',
    transmission: 'Manual',
    airConditioned: 'Yes',
    driverAllowance: '500',
    phone: '+91 8885544518',
  },
  {
    name: 'Etios vehicle',
    image: etios,
    rate: '17',
    maxPeople: '5',
    transmission: 'Manual',
    airConditioned: 'Yes',
    driverAllowance: '500',
    phone: '+91 8885544518',
  },
  {
    name: 'Tempo Traveller 13-seater',
    image: tempo,
    rate: '25',
    maxPeople: '13',
    transmission: 'Manual',
    airConditioned: 'Yes',
    driverAllowance: '500',
    phone: '+91 8885544518',
  },
  {
    name: 'Tempo Traveller 18-seater',
    image: tempo1,
    rate: '30',
    maxPeople: '18',
    transmission: 'Manual',
    airConditioned: 'Yes',
    driverAllowance: '500',
    phone: '+91 8885544518',
  },
  {
    name: 'Tempo Traveller 21-seater',
    image: tempo3,
    rate: '40',
    maxPeople: '21',
    transmission: 'Manual',
    airConditioned: 'Yes',
    driverAllowance: '500',
    phone: '+91 8885544518',
  },
  {
    name: 'Mini Bus 21-seater',
    image: bus1,
    rate: '40',
    maxPeople: '21',
    transmission: 'Manual',
    airConditioned: 'Yes',
    driverAllowance: '500',
    phone: '+91 8885544518',
  },
  {
    name: 'Luxury Bus 21-seater',
    image: bus2,
    rate: '40',
    maxPeople: '21',
    transmission: 'Manual',
    airConditioned: 'Yes',
    driverAllowance: '500',
    phone: '+91 8885544518',
  },
];

const CarCard = () => {
  return (
    <>
      {/* SEO Enhancements */}
      <Helmet>
        <title>Car Rentals in Tirupati | TT Travels - Affordable Rentals</title>
        <meta
          name="description"
          content="Explore affordable car rentals in Tirupati with TT Travels. Choose from Swift Dzire, Toyota Innova, Tempo Travellers, and buses for a comfortable journey."
        />
        <meta
          name="keywords"
          content="car rentals Tirupati, TT Travels, car hire Tirupati, tempo traveller Tirupati, bus rentals Tirupati, affordable travel Tirupati"
        />
        <meta name="author" content="TT Travels" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Schema Markup for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "TT Travels",
          "description":
            "Affordable car rentals in Tirupati including Swift Dzire, Toyota Innova, and luxury tempos. Perfect for local and outstation trips.",
          "image": "https://yourwebsite.com/assets/logo.jpg",
          "telephone": "+91 8885544518",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Opposite BMR Parking, Kothapalli",
            "addressLocality": "Tirupati",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "517501",
            "addressCountry": "IN",
          },
          "url": "https://yourwebsite.com",
          "priceRange": "₹₹",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "13.6288",
            "longitude": "79.4192",
          },
        })}
      </script>

      {/* Car Cards */}
      <Grid container spacing={4} justifyContent="center">
        {carData.map((car, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                margin: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={car.image}
                alt={`${car.name} available for rent in Tirupati`}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{ fontWeight: 'bold', color: 'primary.main' }}
                >
                  {car.name} in Tirupati
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                  Rate per Kilometer:
                  <Typography component="span" sx={{ fontWeight: 'normal' }}>
                    {' '}
                    Rs. {car.rate}/-
                  </Typography>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                  Max People:
                  <Typography component="span" sx={{ fontWeight: 'normal' }}>
                    {' '}
                    {car.maxPeople}
                  </Typography>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                  Transmission:
                  <Typography component="span" sx={{ fontWeight: 'normal' }}>
                    {' '}
                    {car.transmission}
                  </Typography>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                  Air Conditioned:
                  <Typography component="span" sx={{ fontWeight: 'normal' }}>
                    {' '}
                    {car.airConditioned}
                  </Typography>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                  Driver Allowance:
                  <Typography component="span" sx={{ fontWeight: 'normal' }}>
                    {' '}
                    Rs. {car.driverAllowance}/-
                  </Typography>
                </Typography>
              </CardContent>
              <CardActions>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Button size="medium" variant="contained" color="primary" href={`tel:${car.phone}`}>
                    Book Now
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CarCard;
