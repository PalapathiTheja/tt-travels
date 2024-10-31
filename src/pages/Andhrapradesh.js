import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import tirupatiImage from '../assets/tirupati.webp';
import sriKalahastiImage from '../assets/kalahasti.jpg';
import gudimallamImage from '../assets/gudimallam.webp';
import kanipakam from '../assets/kanipakam.jpg';

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
    {
      name: 'Kanipakam Temple',
      description: 'Vinayaka Temple or Sri Varasidhi Vinayaka Swamy Temple is a Hindu temple of Ganesha. It is located at Kanipakam in Chittoor district of Andhra Pradesh, India. The temple is about 11 km from Chittoor and 68 km from Tirupati.',
      image: kanipakam,
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
            <Card 
              sx={{ 
                borderRadius: '16px', 
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)', 
                overflow: 'hidden', 
                position: 'relative', 
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)' } 
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  alt={temple.name}
                  height="200"
                  image={temple.image}
                  sx={{
                    objectFit: 'cover',
                    filter: 'brightness(70%)',
                    transition: 'filter 0.3s ease',
                    '&:hover': { filter: 'brightness(100%)' }
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    textAlign: 'center',
                    py: 1,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {temple.name}
                  </Typography>
                </Box>
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
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
