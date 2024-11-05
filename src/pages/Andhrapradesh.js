import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import tirupatiImage from "../assets/tirupati.webp";
import sriKalahastiImage from "../assets/kalahasti.jpg";
import gudimallamImage from "../assets/gudimallam.webp";
import kanipakam from "../assets/kanipakam.jpg";
import kanakadurga from "../assets/kanakadurga.jpg";
import mantralayam from "../assets/mantralayam.jpg";
import annavaram from "../assets/annavaram.jpg";
import govind from "../assets/govind.jpg";
import mallikarjuna from "../assets/srisailamtemplee.png";

const Andhrapradesh = () => {
  const temples = [
    {
      name: "Tirupati",
      description:
        "Tirupati is one of the most famous temple cities in India, known for the Sri Venkateswara Temple dedicated to Lord Venkateswara, an incarnation of Vishnu.",
      image: tirupatiImage,
    },
    {
      name: "Sri Kalahasti",
      description:
        "Sri Kalahasti Temple is dedicated to Lord Shiva and is one of the Pancha Bhoota Sthalams, symbolizing the element of air.",
      image: sriKalahastiImage,
    },
    {
      name: "Gudimallam",
      description:
        "Gudimallam is famous for the ancient Parasurameswara Temple, known for the unique 1.35-meter high Shiva Lingam, which is believed to be from the 3rd century BCE.",
      image: gudimallamImage,
    },
    {
      name: "Kanipakam Temple",
      description:
        "Vinayaka Temple or Sri Varasidhi Vinayaka Swamy Temple is a Hindu temple of Ganesha. It is located at Kanipakam in Chittoor district of Andhra Pradesh, India. The temple is about 11 km from Chittoor and 68 km from Tirupati.",
      image: kanipakam,
    },
    {
      name: "Kanaka Durga Temple",
      description:
        "Kanaka Durga Temple, officially known as Sri Durga Malleswara Swamyvarla Devasthanam, is a Hindu temple dedicated to Kanaka Durga. The deity in this temple is also popularly referred as Kanaka Durga. The temple is located in Vijayawada, Andhra Pradesh, India on the Indrakeeladri hill on the banks of Krishna River.",
      image: kanakadurga,
    },
    {
      name: "Mantralayam Temple",
      description:
        "Mantralayam is a pilgrim village in Kurnool district in Andhra Pradesh, India, on the banks of the Tungabhadra River on the border with neighbouring state of Karnataka. It is known for being the site of the samadhi of Raghavendra Tirtha, a saint who lived in the 17th century.",
      image: mantralayam,
    },
    {
      name: "Govindaraja Temple",
      description:
        "Sri Govindarajaswamy Temple is an ancient Hindu Vaishnavite temple situated in the heart of Tirupati city in Tirupati district of Andhra Pradesh in India. The temple was built during 12th century and was consecrated in the year 1130 AD by Ramanuja.",
      image: govind,
    },
    {
      name: "Annavaram Temple",
      description:
        "Sri Veera Venkata Satyanarayana Swamy Temple is a Hindu-Vaishnavite temple located in Annavaram in Kakinada district of Andhra Pradesh, India. Dedicated to Lord Satyanarayana Swamy, an incarnation of Lord Vishnu, the temple is situated on Ratnagiri Hill.",
      image: annavaram,
    },
    {
      name: "Mallikarjuna Temple",
      description:
        "The Mallikarjuna Temple, located in Srisailam, is a significant Hindu temple dedicated to Lord Shiva. It is situated in the Nallamala Hills of the Kurnool district in Andhra Pradesh, India. The temple is one of the 12 Jyotirlingas, a group of sacred Shiva temples in India.",
      image: mallikarjuna,
    },
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ color: '#ff6f00', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
        Temples in Andhrapradesh
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

export default Andhrapradesh;
