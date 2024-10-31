import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import gokarnaImage from '../assets/gokarna.png';
import kotilingeshwaraImage from '../assets/kotilinga.jpg';
import vidyashankaraImage from '../assets/Sringeri.jpg';

const KarnatakaTemples = () => {
  const temples = [
    {
      name: 'Gokarna Mahabaleshwar Temple',
      description: 'Located in Gokarna, this ancient temple is dedicated to Lord Shiva and is renowned for its Atmalinga, a revered symbol in Hindu mythology.',
      image: gokarnaImage,
    },
    {
      name: 'Kotilingeshwara Temple',
      description: 'Situated in Kolar, Kotilingeshwara Temple is famous for its massive collection of Shiva Lingas, with over 10 million Lingas installed within the temple complex.',
      image: kotilingeshwaraImage,
    },
    {
      name: 'Vidyashankara Temple',
      description: 'Located in Sringeri, Vidyashankara Temple is an architectural marvel blending Hoysala and Dravidian styles, dedicated to Lord Shiva and known for its intricate carvings.',
      image: vidyashankaraImage,
    },
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ color: '#ff6f00', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
        Temples in Karnataka
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

export default KarnatakaTemples;
