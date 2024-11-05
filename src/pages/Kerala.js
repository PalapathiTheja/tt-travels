import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import ananthapadmanabhaImage from '../assets/anantha.jpg';
import guruvayurImage from '../assets/guruvayur.webp';
import padmanabhaswamyImage from '../assets/padmanabha.jpg';
import erumeli from '../assets/erumeli.jpg';
import pamba from '../assets/pamba.webp';
import sannidhan from '../assets/sannidhan.webp';
import trivendrum from '../assets/trivendrum.jpg';
import pandalam from '../assets/pandalam.jpg';



const KeralaTemples = () => {
  const temples = [
    {
      name: 'Shree Ananthapadmanabha Swamy Lake Temple',
      description: 'Located in Kasaragod, this unique temple is situated on a lake and dedicated to Lord Vishnu. It’s known for its serene ambiance and remarkable architecture.',
      image: ananthapadmanabhaImage,
    },
    {
      name: 'Pandalam Ayyappa Temple',
      description: 'Pandalam Ayyappa Temple is a popular Ayyappa temple in Kerala which is situated at Pandalam in Pathanamthitta district. Lord Ayyappa is the presiding deity of this temple who was born out of the union between Lord Shiva and the mythical Mohini, the avatar of Lord Vishnu.',
      image: pandalam,
    },
    {
      name: 'Guruvayur Shri Krishna Temple',
      description: 'Guruvayur Temple is a Hindu temple dedicated to Guruvayurappan (four-armed form of the Vishnu), located in the town of Guruvayur in Kerala, India. Administrated by the Guruvayur Devaswom Board, it is one of the most important places of worship for Hindus in Kerala and Tamil Nadu.',
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
    {
      name: 'Sannidhanam',
      description: 'The temple is open to all faiths. The divine qualities like equality, fraternity, tolerance, humanity etc.. are shining well in the pilgrims.Ayyappa cult gives much importance for the secularism and communal harmony and has turned out to be a model for the whole world.',
      image: sannidhan,
    },
    {
      name: 'Trivendrum',
      description: 'Thiruvananthapuram, formerly known as Trivandrum, is the capital city of the Indian state of Kerala. It is the largest and most populous city in Kerala. The encompassing urban agglomeration population is around 1.68 million. Located on the west coast of India near the extreme south of the mainland',
      image: trivendrum,
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
            <Card sx={{
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.05)' }
            }}>
              <CardMedia
                component="img"
                alt={temple.name}
                height="200"
                image={temple.image}
                sx={{
                  objectFit: 'cover',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.1)' }
                }}
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
