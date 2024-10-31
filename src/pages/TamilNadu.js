import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import brihadishwararImage from '../assets/brihadiswara.jpg';
import rameshwaramImage from '../assets/rameswaram.webp';
import meenakshiImage from '../assets/meenakshi.jpg';

const Tamilnadu = () => {
  const temples = [
    {
      name: 'Brihadishwarar Temple',
      description: 'Located in Thanjavur, Brihadishwarar Temple is a UNESCO World Heritage Site known for its architectural grandeur and dedicated to Lord Shiva.',
      image: brihadishwararImage,
    },
    {
      name: 'Rameshwaram Temple',
      description: 'Rameshwaram Temple in Rameswaram is one of the Char Dham pilgrimage sites and is famous for its long corridors and sacred wells.',
      image: rameshwaramImage,
    },
    {
      name: 'Meenakshi Temple',
      description: 'Located in Madurai, Meenakshi Temple is renowned for its stunning gopurams and vibrant sculptures dedicated to Goddess Meenakshi and Lord Sundareswarar.',
      image: meenakshiImage,
    },
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ color: '#ff6f00', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
        Temples in Tamil Nadu
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

export default Tamilnadu;
