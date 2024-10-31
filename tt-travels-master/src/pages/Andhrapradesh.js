import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import tirupatiImage from '../assets/tirupati.webp'
import sriKalahastiImage from '../assets/kalahasti.jpeg'
import gudimallamImage from '../assets/gudimallam.webp'

const Andhrapradesh = () => {
  const temples = [
    {
      name: 'Tirupati',
      description: 'Tirupati is one of the most famous temple cities in India, known for the Sri Venkateswara Temple dedicated to Lord Venkateswara, an incarnation of Vishnu.',
      image: tirupatiImage,
    },
    {
      name: 'Sri Kalahasti',
      description: 'Sri Kalahasti Temple is dedicated to Lord Shiva and is one of the Pancha Bhoota Sthalams, symbolizing the element of air.',
      image: sriKalahastiImage,
    },
    {
      name: 'Gudimallam',
      description: 'Gudimallam is famous for the ancient Parasurameswara Temple, known for the unique 1.35-meter high Shiva Lingam, which is believed to be from the 3rd century BCE.',
      image: gudimallamImage,
    },
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ color: '#ff6f00', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
        Temples in Andhra Pradesh
      </Typography>
      <Grid container spacing={4}>
        {temples.map((temple, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <CardMedia
                component="img"
                alt={temple.name}
                height="200"
                image={temple.image}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                  {temple.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {temple.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Andhrapradesh;
