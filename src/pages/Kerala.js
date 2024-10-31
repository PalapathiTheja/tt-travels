import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import ananthapadmanabhaImage from '../assets/anantha.jpg';
import guruvayurImage from '../assets/guruvayur.webp';
import padmanabhaswamyImage from '../assets/padmanabha.jpg';
import erumeli from '../assets/erumeli.jpg';
import pamba from '../assets/pamba.webp';


const KeralaTemples = () => {
  const temples = [
    {
      name: 'Shree Ananthapadmanabha Swamy Lake Temple',
      description: 'Located in Kasaragod, this unique temple is situated on a lake and dedicated to Lord Vishnu. It’s known for its serene ambiance and remarkable architecture.',
      image: ananthapadmanabhaImage,
    },
    {
      name: 'Guruvayur Shri Krishna Temple',
      description: 'Guruvayur Temple, in Thrissur, is one of the most revered Krishna temples in India, attracting devotees for its religious significance and traditional architecture.',
      image: guruvayurImage,
    },
    {
      name: 'Sree Padmanabhaswamy Temple',
      description: 'Located in Thiruvananthapuram, this temple is dedicated to Lord Vishnu and is famous for its wealth, architectural beauty, and historical importance.',
      image: padmanabhaswamyImage,
    },
    {
      name: 'Erumeli',
      description: 'Erumeli is famous for Hindu Muslim religious harmony . The Mosque at Erumeli about 60 Km from north- east of Kottayam town is dedicated to Vavar, a contemporary and companion of Lord Ayyappa, a Hindu deity.',
      image: erumeli,
    },
    {
      name: 'Pamba',
      description: 'The river is also known as Dakshina Bhageerathi. During ancient times, it was called River Baris and jordan of malankara. The River Pamba enriches the lands of Pathanamthitta district and the Kuttanad area of Alappuzha district and few areas of Kottayam.',
      image: pamba,
    },
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ color: '#ff6f00', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
        Temples in Kerala
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

export default KeralaTemples;
