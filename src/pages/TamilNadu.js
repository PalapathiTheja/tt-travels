import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import brihadishwararImage from '../assets/brihadiswara.jpg';
import rameshwaramImage from '../assets/rameswaram.webp';
import meenakshiamma from '../assets/meenakshiamma.webp';
import kanyakumari from '../assets/kanyakumari.webp';
import palani from '../assets/Palani.jpg';
import Srirangam from '../assets/sriranga.jpg';
import jambukeswar from '../assets/jambukeswar.png';
import arunachalam from '../assets/arunachalam.jpg';
import golden from '../assets/golden.webp';

const Tamilnadu = () => {
  const temples = [
    {
      name: 'Brihadishwarar Temple',
      description: 'Located in Thanjavur, Brihadishwarar Temple is a UNESCO World Heritage Site known for its architectural grandeur and dedicated to Lord Shiva.',
      image: brihadishwararImage,
    },
    {
      name: 'Rameshwaram Temple',
      description: 'The shrine is dedicated to Lord Shiva and is one of the twelve jyotirlinga temples in India. Ramanathaswamy temple is known for its imposing structure.',
      image: rameshwaramImage,
    },
    {
      name: 'Meenakshi Temple',
      description: 'Located in Madurai, Meenakshi Temple is renowned for its stunning gopurams and vibrant sculptures dedicated to Goddess Meenakshi and Lord Sundareswarar.',
      image: meenakshiamma,
    },
    {
      name: 'KanyaKumari',
      description: 'Kanyakumari is popular for its beautiful beaches, unique Vivekananda Rock Memorial, and stunning sunrise and sunset views. It is also a major pilgrimage center for Hindus.',
      image: kanyakumari,
    },
    {
      name: 'Palani Temple',
      description: 'The Palani Murugan Temple or Arulmigu Dhandayuthapani Swamy Temple (Thiru Avinankudi), dedicated to Murugan is situated on a hill overlooking the town. The temple is visited by more than 7 million pilgrims each year.',
      image: palani,
    },
    {
      name: 'SriRangam Temple',
      description: 'Srirangam is the foremost of the eight self-manifested shrines (Swayam Vyakata Kshetras ) of Lord Vishnu. Sri Renganatha Swamy temple, established in a 156 acre land, is a great vaishnavite temple dedicated to Lord Vishnu. ',
      image: Srirangam,
    },
    {
      name: 'Jambukeswarar Temple',
      description: 'Jambukeswarar Temple, Thiruvanaikaval is a temple of Shiva in Tiruchirapalli district, in the state of Tamil Nadu, India. It is one of the five major Shiva Temples of Tamil Nadu representing the Mahābhūta or five elements; this temple represents the element of water, or neer in Tamil.',
      image: jambukeswar,
    },
    {
      name: 'Arunachalam Temple',
      description: 'Arunachalesvara Temple (also called Annamalaiyar Temple), is a Hindu temple dedicated to the god Shiva, located at the base of Arunachala hill in the town of Tiruvannamalai in Tamil Nadu, India. It is significant to the Hindu sect of Shaivism as one of the temples associated with the five elements.',
      image: arunachalam,
    },
    {
      name: 'Golden Temple',
      description: 'Sri Lakshmi Narayani Golden Temple complex inside the Thirupuram spiritual park is situated at the foot of a small range of green hills at Thirumalaikodi (or simply Malaikodi) Vellore in Tamil Nadu, India. It is 120 km from Tirupati, 145 km from Chennai, 160 km from Pondicherry and 200 km from Bengaluru.',
      image: golden,
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

export default Tamilnadu;
