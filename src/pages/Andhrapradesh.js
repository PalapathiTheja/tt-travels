import React from "react";
import { Helmet } from "react-helmet";
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
      keywords: "Tirupati Balaji, Venkateswara Temple, TTD, Tirumala",
      location: "Chittoor district, Andhra Pradesh",
    },
    {
      name: "Sri Kalahasti",
      description:
        "Sri Kalahasti Temple is dedicated to Lord Shiva and is one of the Pancha Bhoota Sthalams, symbolizing the element of air.",
      image: sriKalahastiImage,
      keywords: "Vayu lingam, Rahu Ketu temple, Pancha Bhoota Stalam",
      location: "Chittoor district, Andhra Pradesh",
    },
    {
      name: "Gudimallam",
      description:
        "Gudimallam is famous for the ancient Parasurameswara Temple, known for the unique 1.35-meter high Shiva Lingam, which is believed to be from the 3rd century BCE.",
      image: gudimallamImage,
      keywords: "Ancient Shiva temple, oldest Shiva lingam, Parasurameswara",
      location: "Chittoor district, Andhra Pradesh",
    },
    {
      name: "Kanipakam Temple",
      description:
        "Vinayaka Temple or Sri Varasidhi Vinayaka Swamy Temple is a Hindu temple of Ganesha. It is located at Kanipakam in Chittoor district of Andhra Pradesh, India.",
      image: kanipakam,
      keywords: "Vinayaka temple, Ganesh temple, growing idol",
      location: "Chittoor district, Andhra Pradesh",
    },
    {
      name: "Kanaka Durga Temple",
      description:
        "Kanaka Durga Temple, officially known as Sri Durga Malleswara Swamyvarla Devasthanam, is a Hindu temple dedicated to Kanaka Durga located in Vijayawada.",
      image: kanakadurga,
      keywords: "Vijayawada temple, Goddess Durga, Indrakeeladri",
      location: "Vijayawada, Andhra Pradesh",
    },
    {
      name: "Mantralayam Temple",
      description:
        "Mantralayam is a pilgrim village known for being the site of the samadhi of Raghavendra Tirtha, a saint who lived in the 17th century.",
      image: mantralayam,
      keywords: "Raghavendra Swamy, Brindavana, Mantralaya",
      location: "Kurnool district, Andhra Pradesh",
    },
    {
      name: "Govindaraja Temple",
      description:
        "Sri Govindarajaswamy Temple is an ancient Hindu Vaishnavite temple situated in Tirupati city, built during 12th century.",
      image: govind,
      keywords: "Govindaraja Swamy, ancient temple Tirupati, Ramanuja",
      location: "Tirupati, Andhra Pradesh",
    },
    {
      name: "Annavaram Temple",
      description:
        "Sri Veera Venkata Satyanarayana Swamy Temple is dedicated to Lord Satyanarayana Swamy, located on Ratnagiri Hill.",
      image: annavaram,
      keywords: "Satyanarayana Swamy, Ratnagiri Hill temple",
      location: "Kakinada district, Andhra Pradesh",
    },
    {
      name: "Mallikarjuna Temple",
      description:
        "The Mallikarjuna Temple in Srisailam is one of the 12 Jyotirlingas, dedicated to Lord Shiva in the Nallamala Hills.",
      image: mallikarjuna,
      keywords: "Srisailam temple, Jyotirlinga, Nallamala Hills",
      location: "Kurnool district, Andhra Pradesh",
    },
  ];

  // Schema.org structured data for rich results
  const templeSchemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": temples.map((temple, index) => ({
      "@type": "Place",
      "position": index + 1,
      "name": temple.name,
      "description": temple.description,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "India"
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Famous Temples in Andhra Pradesh - Religious Tourism Guide</title>
        <meta name="description" content="Discover the most sacred and historic temples in Andhra Pradesh, including Tirupati Balaji, Sri Kalahasti, Srisailam, and more. Plan your spiritual journey across AP's famous temples." />
        <meta name="keywords" content="Andhra Pradesh temples, Tirupati Balaji, Sri Kalahasti temple, Srisailam temple, religious tourism AP, famous temples AP, Kanaka Durga temple, Annavaram temple, Mantralayam, Hindu temples Andhra Pradesh" />
        <meta property="og:title" content="Famous Temples in Andhra Pradesh - Religious Tourism Guide" />
        <meta property="og:description" content="Explore the divine temples of Andhra Pradesh, including the world-famous Tirupati Balaji, Sri Kalahasti, and other sacred sites." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(templeSchemaData)}
        </script>
      </Helmet>

      <Box sx={{ padding: '20px' }}>
        <Typography 
          variant="h1" 
          sx={{ 
            color: '#ff6f00', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '20px',
            fontSize: '2.5rem' 
          }}
        >
          Famous Temples in Andhra Pradesh
        </Typography>
        
        <Typography variant="h2" sx={{ fontSize: '1.5rem', marginBottom: '20px', textAlign: 'center' }}>
          Discover Sacred Temples Across Andhra Pradesh
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
                  alt={`${temple.name} Temple - Famous temple in ${temple.location}`}
                  height="200"
                  image={temple.image}
                  sx={{
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.1)' }
                  }}
                />
                <CardContent>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '1.2rem' }}>
                    {temple.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {temple.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px', fontSize: '0.8rem' }}>
                    Location: {temple.location}
                  </Typography>
                  <Typography variant="body2" sx={{ display: 'none' }}>
                    Keywords: {temple.keywords}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Andhrapradesh;